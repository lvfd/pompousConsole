import moment from 'moment'

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
	}
}