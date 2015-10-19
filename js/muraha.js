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
		this.mouseListener=null;

		//setting own functions
		this.addAnt = function(posx,posy) {
			this.ants.push(new Ant({
				x: posx,
				y: posy,
				fingerprint:muraha.ants.length+1
			}))
		}
		this.addBlock = function(x,y){
			this.anthill.addBlock(x,y, 100);
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
		this.setCursor = function (type) {

			document.body.style.cursor = type;
		}
		this.getMousePosition = function(evt){
			var canvas = muraha.ctx.canvas;
			var rect = canvas.getBoundingClientRect();
			var canvasX = evt.clientX - rect.left;
			var canvasY = evt.clientY - rect.top;
			var anthillX = Math.floor((canvasX * anthillWidth) / canvas.clientWidth);
			var anthillY = Math.floor((canvasY * anthillHeight) / canvas.clientHeight); 
			return {
				x:anthillX,
				y:anthillY
			};			
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
		document.getElementById('muraha-add-ant').onclick=function() {
			muraha.setCursor("crosshair");

			muraha.mouseListener = function(evt) {
				var pos = muraha.getMousePosition(evt);
				muraha.addAnt(pos.x, pos.y);
			}
			muraha.ctx.canvas.addEventListener('mousedown', muraha.mouseListener );


		}
		document.getElementById('muraha-add-block').onclick=function() {
			muraha.setCursor("crosshair");			
			muraha.ctx.canvas.removeEventListener('mousedown', muraha.mouseListener);

			muraha.mouseListener = function(evt) {
				var pos = muraha.getMousePosition(evt);
				muraha.addBlock(pos.x, pos.y);
			}
			muraha.ctx.canvas.addEventListener('mousedown', muraha.mouseListener );
		}
		document.getElementById('muraha-add-reset').onclick=function() {
			muraha.setCursor("default");
			muraha.ctx.canvas.removeEventListener('mousedown', muraha.mouseListener);
		}
		
		//draw the field
		this.anthill.draw(this.ctx);
		
	}
	    
	return Muraha;	
})