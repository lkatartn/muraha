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
		var muraha = new Muraha(200, 150);
		
		
})
