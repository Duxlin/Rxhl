global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." 
global.ownNumb = "2347082252014","15512004958"
global.ownName = "Dux" 

global.autOwn = "req(62-8S57547ms11).287p"
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})