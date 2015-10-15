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
		this.colors ={
			1:"#51574a",
			2:"#447c69",
			3:"#74c493",
			4:"#8e8c6d",
			5:"#e4bf80",
			6:"#e2975d",
			7:"#e9d78e",
			8:"#f19670",
			9:"#e16552",
			10:"#c94a53",
			11:"#a34974",
			12:"#be5168",
			13:"#65387d",
			14:"#e0598b",
			15:"#9abf88",
			16:"#7c9fb0",
			17:"#4e2472",
			18:"#e279a3",
			19:"#5698c4"
		}
		this.ants =[];
		this.setColor = function(number, color) {
			this.colors[number]=color
		}
		this.getColor = function (number) {
			if (!this.colors[number]) {
				return '#000'
			} else {
				return this.colors[number]
			}
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
						context.fillStyle = this.getColor(this.field[i][j]);
						context.fillRect(i*cellWidth, j*cellHeight, cellWidth, cellHeight);
					}
				}
			}
			context.closePath();
		}
	}
	return Anthill;
})	