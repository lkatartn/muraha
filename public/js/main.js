requirejs.config({
  // The path where your JavaScripts are located
  baseUrl: './js/',

  paths: {
    lodash: '../vendor/lodash/lodash',
    Anthill: 'anthill',
    Ant: 'ant',
    Muraha: 'muraha'
  },
  shim: {
    lodash: {
      exports: '_'
    }
  }
});


require(['Muraha'], function(Muraha) {
		var muraha = new Muraha(200, 100);
		for(var i=0; i<10; i++){
			muraha.addAnt(Math.floor(Math.random()*199), Math.floor(Math.random()*99))
		}
		muraha.start();		
})
