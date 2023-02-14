import uk_css from 'uikit/dist/css/uikit.min.css'
import uk_js from 'uikit/dist/js/uikit.min.js'
import dom4 from 'dom4'
import logo from '@build/logo.svg'
import init from '@build/init'
import { bar, pie, line } from '@build/mychart'

document.write(`
	<link type="text/css" rel="stylesheet" href="${uk_css}">
	<script type="text/javascript" src="${dom4}"></script>
	<script type="text/javascript" src="${uk_js}"></script>
	`)

window.addEventListener('DOMContentLoaded', mainFunction)

function mainFunction() {
	const api = document.getElementById('api').value
	const staticData = document.getElementById('staticData').value
	const data_raw = document.getElementById('data').value
	const data = typeof data_raw === 'object'? data_raw: JSON.parse(data_raw)
	try {
		init.logo({ url: logo, after: '商密改造作战大屏' })
		init.moment()
		init.right({ api: api, data: data })
		init.broadcast({ api: staticData})
	} catch(e) {
		console.error(e, e.stack)
	}
	bar({ id: 'cli2sys', api: api, data: data })
	bar({ id: 'sys2sys', api: api, data: data })
	bar({ id: 'common', api: api, data: data })
	pie({ id: 'recharge', api: api, data: data })
	pie({ id: 'account', api: api, data: data })
	pie({ id: 'distill', api: api, data: data })
	pie({ id: 'withoutaccount', api: api, data: data })
	pie({ id: 'transfer', api: api, data: data })
	line({ id: 'percentage', api: api, data: data, wrap: 'percentageStyleTrigger' })
}
