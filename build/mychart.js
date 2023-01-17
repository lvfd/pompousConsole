import Chart from 'chart.js/auto'
import $ from 'jquery'

export function cli2sys(id) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: './data/demo',
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(id)
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels(res),
				datasets: [{
					label: '完成率',
					data: datas(res)
				}]
			},
			options: {
				indexAxis: 'y',
				layout: {
					padding: 10
				},
				plugins: {
					title: {
						align: 'start',
						display: true,
						text: res.progress.cli2sys.description
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
							mirror: true
						}
					}
				}
			}
		})
		function labels(res) {
			let labels = []
			res.progress.cli2sys.data.forEach(el => labels.push(el.description))
			return labels
		}
		function datas(res) {
			let datas = []
			res.progress.cli2sys.data.forEach(el => datas.push(el.value))
			return datas
		}
	}
}

export function sys2sys(id) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: './data/demo',
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(id)
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels(res),
				datasets: [{
					label: '完成率',
					data: datas(res)
				}]
			},
			options: {
				indexAxis: 'y',
				layout: {
					padding: 10
				},
				plugins: {
					title: {
						align: 'start',
						display: true,
						text: res.progress.sys2sys.description
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
							mirror: true
						}
					}
				}
			}
		})
		function labels(res) {
			let labels = []
			res.progress.sys2sys.data.forEach(el => labels.push(el.description))
			return labels
		}
		function datas(res) {
			let datas = []
			res.progress.sys2sys.data.forEach(el => datas.push(el.value))
			return datas
		}
	}
}

export function common(id) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: './data/demo',
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(id)
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels(res),
				datasets: [{
					label: '完成率',
					data: datas(res)
				}]
			},
			options: {
				indexAxis: 'y',
				layout: {
					padding: 10
				},
				plugins: {
					title: {
						align: 'start',
						display: true,
						text: res.progress.common.description
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
							mirror:　true
						}
					}
				}
			}
		})
		function labels(res) {
			let labels = []
			res.progress.common.data.forEach(el => labels.push(el.description))
			return labels
		}
		function datas(res) {
			let datas = []
			res.progress.common.data.forEach(el => datas.push(el.value))
			return datas
		}
	}
}

export function recharge(id) {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: './data/demo',
		error: (e) => console.error(e),
		success: canvas
	})
	function canvas(res) {
		const ctx = document.getElementById(id)
		const chart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ['商密笔数', '总笔数'],
				datasets: [{
					label: '笔数',
					data: datas(res)
				}]
			},
			options: {
				layout: {
					padding: 10
				},
				plugins: {
					title: {
						align: 'start',
						display: true,
						text: res.finished.recharge.description
					}
				}
			}
		})
		function datas(res) {
			const ready = res.finished.recharge.ready
			const total = res.finished.recharge.total
			return [ready, total - ready]
		}
	}
}