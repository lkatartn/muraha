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
		var muraha = new Muraha(100, 80);
		muraha.addAnt(10,10);
		muraha.addAnt(20,10);
		muraha.addAnt(30,10);
		muraha.addAnt(10,10);
		muraha.start();		
})
