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
			const m = moment()
			
		} catch(e) {
			console.error(e, e.stack)
		}
	}
}