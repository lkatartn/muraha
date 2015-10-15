define('Muraha', ['Anthill','Ant','lodash'], function(Anthill, Ant, _){
	var Muraha = function(anthillWidth, anthillHeight){
		var ctx = document.getElementById('muraha-anthill').getContext('2d');
	    this.anthill = new Anthill(anthillWidth, anthillHeight)
	    this.ants=[];
		anthill.draw(ctx);
		this.speed = 1;
		for (var i= 0; i< 10; i++) {
			this.ants.push(new Ant({
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
		this.start = function(){
			var muraha=this;
			this.timer = setInterval(function(){
				_.times(muraha.speed, function(){
					for(ant in muraha.ants) {
						muraha.ants[ant].rule(muraha.anthill.field)
					}
				})
			}, 30);
		};
		muraha.stop = function() {
			clearInterval(this.timer);
		}
		
		//buttons listeners
		document.getElementById('muraha-start').onclick=muraha.start;
		document.getElementById('muraha-stop').onclick=muraha.stop;
		document.getElementById('muraha-set-speed').onclick = function() {
			muraha.speed = Math.floor(prompt('Enter the speed >1',1));
			muraha.stop();
			muraha.start();
		}
	}
	    
	return Muraha;	
})