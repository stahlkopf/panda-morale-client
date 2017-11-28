const os = require('os')

const osName = os.platform()
const osType = os.type()
const osBit = os.arch()
const pcName = os.hostname()
const nInterface = Object.values(os.networkInterfaces())[1][0].address
const userName = os.userInfo().username

var menubar = require('menubar');

var mb = menubar({
	preloadWindow: true,
	alwaysOnTop: true,
	width: 420,
	height: 180
});



mb.on('ready', function ready(){
	console.log('App is ready');
});

mb.on('after-create-window', function windowLoaded(){
	console.log('App started');
	console.log(pcName)
});
