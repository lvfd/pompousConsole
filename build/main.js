import uk_css from 'uikit/dist/css/uikit.min.css'
import uk_js from 'uikit/dist/js/uikit-core.min.js'
import dom4 from 'dom4'
import $ from 'jquery'
import logo from '@build/logo.svg'
import init from '@build/init'

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
	} catch(e) {
		console.error(e, e.stack)
	}
}


