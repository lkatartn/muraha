requirejs.config({
  // The path where your JavaScripts are located
  baseUrl: './js/',

  paths: {
    lodash: '../vendor/lodash/lodash',
    Anthill: 'anthill',
    Ant: 'ant'
  },
  shim: {
    lodash: {
      exports: '_'
    }
  }
});


require(['Anthill', 'Ant', 'lodash'], function(Anthill, Ant, _ ) {

	    var ctx = document.getElementById('anthill').getContext('2d');
	    var anthill = new Anthill(120,80)
		anthill.draw(ctx);

		var ant = new Ant({
			x: 50,
			y: 40,
			direction: 'w'
		})
		setInterval(function(){
			_.times(3, function(){
				ant.rule(anthill.field)
			})
		}, 0);
		function drawLoop() {
			anthill.draw(ctx);
			window.requestAnimationFrame(drawLoop)
		}
		window.requestAnimationFrame(drawLoop);

		
})
