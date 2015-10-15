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
		muraha={

		};
	    var ctx = document.getElementById('anthill').getContext('2d');
	    var anthill = new Anthill(120,80);
	    muraha.anthill = anthill;
	    muraha.ants=[];
		anthill.draw(ctx);
		muraha.speed = 1;
		for (var i= 0; i< 10; i++) {
			muraha.ants.push(new Ant({
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
		muraha.start = function(){
			muraha.timer = setInterval(function(){
				_.times(muraha.speed, function(){
					for(ant in muraha.ants) {
						muraha.ants[ant].rule(anthill.field)
					}
				})
			}, 30);
		};
		muraha.stop = function() {
			clearInterval(muraha.timer);
		}
		muraha.start();

		//buttons listeners
		document.getElementById('start').onclick=muraha.start;
		document.getElementById('stop').onclick=muraha.stop;
		document.getElementById('set-speed').onclick = function() {
			muraha.speed = Math.floor(prompt('Enter the speed >1',1));
			muraha.stop();
			muraha.start();
		}
		
})
