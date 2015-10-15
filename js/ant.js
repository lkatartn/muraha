define('Ant', [], function(){    
    var Ant = function(opts) {
    	var defaults = {
    		x:0,
    		y:0,
    		direction: 'n',
            fingerprint: 1
    	}
    	var params = opts ? opts : defaults;

    	this.x = params.x || 0;
    	this.y = params.y || 0;
    	this.direction = params.direction || 'n';
        this.fingerprint=params.fingerprint || 1;

    	this.rule = function(field) {
    		if (field[this.x][this.y]==0) {
    			field[this.x][this.y]= this.fingerprint;
    			this.turnRight();
    		} else {
    			field[this.x][this.y]=0;
    			this.turnLeft();
    		}
    		this.step();
            if (this.x>=field.length) {
                this.x=0
            } else if (this.x<0) {
                this.x=field.length-1
            }

            if (this.y>=field[0].length) {
                this.y=0
            } else if (this.y<0) {
                this.y=field[0].length-1
            }

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