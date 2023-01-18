import moment from 'moment'
import $ from 'jquery'

export default {
	logo: (args) => {
		try {
			if (!args || !args.url) throw new Error('缺参数')
			const nodes = args.nodes? args.nodes: '.uk-logo'
			document.querySelectorAll(nodes).forEach(el => {
				el.innerHTML = ''

				const img = document.createElement('img')
				img.src = args.url
				img.setAttribute('uk-svg', '')
				img.style.height = '1.5em'
				img.style.width = 'auto'
				el.appendChild(img)

				const strw = document.createElement('span')
				strw.innerText = args.after? args.after: '一些文字'
				el.appendChild(strw)
			})
		} catch(e) {
			console.error(e, e.stack)
		}
	},
	moment: () => {
		try{
			const mtime = document.querySelector('#mtime')
			mtime.innerHTML = ''
			const mdate = document.querySelector('#mdate')
			mdate.innerHTML = ''
			mtime.innerText = moment().format('HH:mm:ss')
			mdate.innerText = moment().format('YYYY-MM-DD')
			window.setInterval(setMoment, 1000)
			function setMoment() {
				const m = moment()
				mtime.innerText = m.format('HH:mm:ss')
				if (m.hour() === 0 && m.minute() === 0) {
					mdate.innerText = m.format('YYYY-MM-DD')
				}
			}
		} catch(e) {
			console.error(e, e.stack)
		}
	},
	right: (args) => {
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: args.api,
			error: (e) => console.error(e),
			success: right
		})
		function right(res) {
			try {
				const date = document.createElement('span')
				const recharge = document.createElement('span')
				const distill = document.createElement('span')
				const account = document.createElement('span')
				const withoutaccount = document.createElement('span')
				const transfer = document.createElement('span')
				date.innerText = res.finished.date
				recharge.innerText = `${res.finished.recharge.ready}笔`
				distill.innerText = `${res.finished.distill.ready}笔`
				account.innerText = `${res.finished.account.ready}笔`
				withoutaccount.innerText = `${res.finished.withoutaccount.ready}笔`
				transfer.innerText = `${res.finished.transfer.ready}笔`
				document.getElementById('rdate').appendChild(date)
				document.getElementById('rrecharge').appendChild(recharge)
				document.getElementById('rdistill').appendChild(distill)
				document.getElementById('raccount').appendChild(account)
				document.getElementById('rwithoutaccount').appendChild(withoutaccount)
				document.getElementById('rtransfer').appendChild(transfer)
			} catch(e) {
				console.error(e, e.stack)
			}
			
		}
	}
}