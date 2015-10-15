define('Anthill', [], function () {	
	var Anthill = function (width, height) {
		
		this.height = height;
		this.width = width;

		//initialize the field with zeroes
		this.field = [];
		for(var i=0; i<width; i++) {
			var col = [];
			for(var j=0; j<height; j++) {
				col.push(0);
			}
			this.field.push(col);
		}

		this.draw = function (context) {
			var width = context.canvas.clientWidth;
			var height = context.canvas.clientHeight;
			var cellWidth = width/this.field.length;
			var cellHeight = height/this.field[0].length;

			//clear the field
			context.beginPath();
			context.fillStyle="#FFF";
			context.fillRect(0,0,width,height);
			context.closePath();

			//drawing the grid
			context.beginPath();
			context.strokeStyle="#000";
			context.fillStyle="#000"
			context.lineWidth=0.3;
			for(var i=cellWidth + 0.5; i<=width; i+=cellWidth) {
				context.moveTo(i,0);
				context.lineTo(i,height);
			}
			for(var i=cellHeight +0.5; i<=height; i+=cellHeight) {
				context.moveTo(0,i);
				context.lineTo(width,i);
			}			
			context.stroke();
			context.closePath();

			//fill non-zeroes cells
			context.beginPath()
			for(var i=0; i<this.width; i++) {
				for(var j=0; j<this.height; j++) {
					if (this.field[i][j]!=0) {
						context.fillRect(i*cellWidth, j*cellHeight, cellWidth, cellHeight)
					}
				}
			}
			context.closePath();
		}
	}
	return Anthill;
})	