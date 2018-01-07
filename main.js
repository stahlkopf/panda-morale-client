

var menubar = require('menubar');

var mb = menubar({
	preloadWindow: true,
	alwaysOnTop: false,
	width: 450,
	height: 225
});



mb.on('ready', function ready(){
	console.log('App is ready');
});

mb.on('after-create-window', function windowLoaded(){
	console.log('App started');
});
