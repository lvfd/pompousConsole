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
	try {
		init.logo({ url: logo, after: '商密改造作战大屏' })
		init.moment()
		init.right({ api: './data/demo' })
	} catch(e) {
		console.error(e, e.stack)
	}
	bar({ id: 'cli2sys', api: './data/demo' })
	bar({ id: 'sys2sys', api: './data/demo' })
	bar({ id: 'common', api: './data/demo' })
	pie({ id: 'recharge', api: './data/demo' })
	pie({ id: 'account', api: './data/demo' })
	pie({ id: 'distill', api: './data/demo' })
	pie({ id: 'withoutaccount', api: './data/demo' })
	pie({ id: 'transfer', api: './data/demo' })
	line({ id: 'percentage', api: './data/demo' })
}
