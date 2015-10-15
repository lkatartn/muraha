define('Ant', [], function(){    
    var Ant = function(opts) {
    	var defaults = {
    		x:0,
    		y:0,
    		direction: 'n'
    	}
    	var params = opts ? opts : defaults;

    	this.x = params.x;
    	this.y = params.y;
    	this.direction = params.direction;

    	this.rule = function(field) {
    		if (field[this.x][this.y]==0) {
    			field[this.x][this.y]=1;
    			this.turnRight();
    		} else {
    			field[this.x][this.y]=0;
    			this.turnLeft();
    		}
    		this.step();
    	}

    	this.step = function() {
    		switch(this.direction) {
    			case 'n': this.y -= 1; break;    		
    			case 'e': this.x += 1; break;    		
    			case 's': this.y += 1; break;    		
    			case 'w': this.x -= 1; break;
    		}
    	}

    	this.turnRight = function() {
    		switch(this.direction) {
    			case 'n': this.direction='e'; break;
    			case 'e': this.direction='s'; break;
    			case 's': this.direction='w'; break;
    			case 'w': this.direction='n'; break;
    		}
    	}
    	this.turnLeft = function() {
    		switch(this.direction) {
    			case 'n': this.direction='w'; break;
    			case 'e': this.direction='n'; break;
    			case 's': this.direction='e'; break;
    			case 'w': this.direction='s'; break;
    		}
    	}
    }
    return Ant;
})