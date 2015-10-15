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

		for (var i= 0; i< 10; i++) {
			anthill.ants.push(new Ant({
				x: 2*i,
				y: 2*i,
				fingerprint: i+1
			}))
		}

		
		function drawLoop() {
			anthill.draw(ctx);
			window.requestAnimationFrame(drawLoop)
		}
		window.requestAnimationFrame(drawLoop);
		window.start = function(speed){
			return setInterval(function(){
				_.times(speed, function(){
					for(ant in anthill.ants) {
						anthill.ants[ant].rule(anthill.field)
					}
				})
			}, 0);
		};
		window.stop = function(timerId) {
			clearInterval(timerId)
		}
		window.timerId = window.start(1);
		
})
