

var menubar = require('menubar');

var mb = menubar({
	preloadWindow: true,
	alwaysOnTop: false,
	width: 450,
	height: 230,
	tooltip: 'How are you feeling?',
	icon: 'IconTemplate@2x.png'
});

const {Menu} = require('electron')
const {dialog} = require('electron')

let t = null

mb.on('ready', function ready(){
	console.log('App is ready');
});

mb.on('after-create-window', function windowLoaded(){
	console.log('App started');
	const contextMenu = Menu.buildFromTemplate([
	{label: 'Credits', click(){
		dialog.showMessageBox({type:'info',buttons:['Close'],title:'About Project Panda',message:'A menubar application for tracking mood \nCopyright (c) 2018 Brandon Tayler'})
		}
	},
	{label: 'Quit', click(){
		mb.app.quit()
		}
	}
])
mb.tray.setContextMenu(contextMenu)
mb.window.setResizable(false)

});
