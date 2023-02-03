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
	// const api = 'http://10.1.51.73:28080/doveMgr/servlet/domesticCryptographicBoard'
	const api = '/pompousConsole/data/demo'
	try {
		init.logo({ url: logo, after: '商密改造作战大屏' })
		init.moment()
		init.right({ api: api })
	} catch(e) {
		console.error(e, e.stack)
	}
	bar({ id: 'cli2sys', api: api })
	bar({ id: 'sys2sys', api: api })
	bar({ id: 'common', api: api })
	pie({ id: 'recharge', api: api })
	pie({ id: 'account', api: api })
	pie({ id: 'distill', api: api })
	pie({ id: 'withoutaccount', api: api })
	pie({ id: 'transfer', api: api })
	line({ id: 'percentage', api: api, wrap: 'percentageStyleTrigger' })
}
