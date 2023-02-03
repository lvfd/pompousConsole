import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import $ from 'jquery'

Chart.register(ChartDataLabels)
Chart.defaults.set('plugins.datalabels', {})

export function bar(config) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: config.api,
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(config.id)
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels(res),
				datasets: [{
					label: '完成率',
					data: datas(res),
					barThickness: 20
				}]
			},
			options: {
				aspectRatio: context => context.chart.data.datasets[0].data.length === 3? 1: 5/4,
				indexAxis: 'y',
				layout: {
					padding: 10
				},
				plugins: {
					datalabels: {
						anchor: 'end',
						align: context => {
							const index = context.dataIndex
							const value = context.dataset.data[index]
							return value < 0.8 ? 'end': 'start'
						},
						color: '#FE777B',
						formatter: value => Math.round(value * 100) + '%'
					},
					title: {
						align: 'start',
						display: true,
						font: {
							size: 16
						},
						text: res.progress[config.id].description
					},
					tooltip: {
						callbacks: {
							label: context => {
								let label = context.dataset.label || ''
								if (label) {
									label += ': '
								}
								if (context.parsed.x !== null) {
									label += Math.round(context.parsed.x * 100) + '%'
								}
								return label
							}
						}
					}
				},
				scales: {
					x: {
						suggestedMin: 0,
						suggestedMax: 1,
						ticks: {
							stepSize: 0.1,
							callback: label => Math.floor(label * 100) + '%'
						}
					},
					y: {
						ticks: {
							labelOffset: -20,
							mirror: true
						}
					}
				}
			}
		})
		function labels(res) {
			let labels = []
			res.progress[config.id].data.forEach(el => labels.push(el.description))
			return labels
		}
		function datas(res) {
			let datas = []
			res.progress[config.id].data.forEach(el => datas.push(el.value))
			return datas
		}
	}
}

export function pie(config) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: config.api,
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(config.id)
		const chart = new Chart(ctx, {
			type: 'pie',
			data: {
				datasets: [{
					label: '商密笔数',
					backgroundColor: context => context.dataIndex > 0? 'rgba(0,0,0,0)': 'rgb(3,78,162)',
					borderWidth: 0,
					data: datas(res),
					datalabels: {
						align: 'end',
						anchor: 'end',
						display: context => context.dataIndex < 1,
						font: {
							size: 10
						},
						formatter: (value, context) => [context.chart.data.datasets[0].label, value],
						offset: 0,
						textAlign: 'center'
					},
					weight: 1/2
				}, {
					label: '总笔数',
					backgroundColor: 'rgb(250,166,26)',
					borderWidth: 0,
					data: [res.finished[config.id].total],
					datalabels: {
						anchor: 'start',
						color: 'white',
						font: {
							size: 10
						},
						formatter: (value, context) => [context.chart.data.datasets[1].label, value],
						textAlign: 'center'
					}
				}]
			},
			options: {
				aspectRatio: 2/3,
				layout: {
					padding: {
						top: 10,
						bottom: 40,
						left: 10,
						right: 60
					}
				},
				plugins: {
					subtitle: {
						align: 'start',
						display: true,
						font: {
							size: 14
						},
						text: subtitle(res)
					},
					title: {
						align: 'start',
						display: true,
						font: {
							size: 16
						},
						text: res.finished[config.id].description
					},
					tooltip: {
						filter: context => context.dataIndex < 1
					}
				}
			}
		})
		function datas(res) {
			const ready = res.finished[config.id].ready
			const total = res.finished[config.id].total
			return [ready, total - ready]
		}
		function subtitle(res) {
			const r = res.finished[config.id].ready / res.finished[config.id].total
			return `完成率: ${Math.round(r * 100)}%`
		}
	}
}

export function line(config) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: config.api,
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const wrap = config.wrap? document.getElementById(config.wrap): null
		if (wrap) {
			wrap.style.height = '50vh'
			wrap.style.width = (res.percentage.length) * 10 + '%'
		}
		const ctx = document.getElementById(config.id)
		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels(res),
				datasets: [{
					label: '占比',
					data: datas(res),
					tension: 0.1
				}]
			},
			options: {
				layout: {
					padding: 20
				},
				maintainAspectRatio: wrap? false: true,
				plugins: {
					datalabels: {
						align: 'top',
						formatter: value => Math.round(value) + '%'
					},
					legend: {
						display: false
					},
					title: {
						align: 'start',
						display: true,
						font: {
							size: 16,
							lineHeight: 3
						},
						text: '占比进度'
					},
					tooltip: {
						callbacks: {
							label: context => {
								let label = context.dataset.label || ''
								if (label) {
									label += ': '
								}
								if (context.parsed.y !== null) {
									label += Math.round(context.parsed.y) + '%'
								}
								return label
							}
						}
					}
				},
				scales: {
					y: {
						ticks: {
							callback: label => label + '%',
						}
					}
				},
			}
		})
		function labels(res) {
			let labels = []
			res.percentage.forEach(el => labels.push(el.date))
			return labels
		}
		function datas(res) {
			let datas = []
			res.percentage.forEach(el => datas.push(el.value))
			return datas
		}
	}
}