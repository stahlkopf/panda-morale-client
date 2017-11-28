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
});
