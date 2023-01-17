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
				scales: {
					x: {
						suggestedMin: 0,
						suggestedMax: 1
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

function sys2sys() {

}

function common() {

}