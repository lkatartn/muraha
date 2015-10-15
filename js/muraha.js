define('Muraha', ['Anthill','Ant','lodash'], function(Anthill, Ant, _){
	var Muraha = function(anthillWidth, anthillHeight){
		//setting context for global functions
		var muraha=this;

		//setting own params
		this.ctx = document.getElementById('muraha-anthill').getContext('2d');
	    this.anthill = new Anthill(anthillWidth, anthillHeight)
	    this.ants=[];
		this.speed = 1;
		this.timer=null;
		//setting own functions
		this.addAnt = function(posx,posy) {
			this.ants.push(new Ant({
				x: posx,
				y: posy,
				fingerprint:muraha.ants.length+1
			}))
		}
		this.start = function(){
			muraha.timer = setInterval(function(){
				_.times(muraha.speed, function(){
					for(ant in muraha.ants) {
						muraha.ants[ant].rule(muraha.anthill.field)
					}
				})
			}, 30);
		};
		this.stop = function() {
			clearInterval(muraha.timer);
		}
		this.drawLoop= function() {
			muraha.anthill.draw(muraha.ctx);
			window.requestAnimationFrame(muraha.drawLoop)
		}

		//setting controls
		window.requestAnimationFrame(this.drawLoop);
		document.getElementById('muraha-start').onclick=this.start;
		document.getElementById('muraha-stop').onclick=this.stop;
		document.getElementById('muraha-set-speed').onclick = function() {
			muraha.speed = Math.floor(prompt('Enter the speed >=1',1));
			muraha.stop();
			muraha.start();
		}
		//draw the field
		this.anthill.draw(this.ctx);
		
	}
	    
	return Muraha;	
})