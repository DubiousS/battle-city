var canvas = document.getElementById("example");
var context = canvas.getContext("2d");
var k, coor = 26;
var maps = new Array(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],		
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		);
function Clear(x, y) {
  context.clearRect(x,y,40,40);
}
var temp = 0;

function tank(x, y) 
{
    this.x = 0;
    this.y = 0;
    this.visible = 3;
    this.helth = 100;
    this.draw = function() 
    {
    	context.beginPath();
		
		if(this.visible == 1) {
			if(temp == 0) {
				var cat = document.getElementById("top");
				context.drawImage(cat, this.x, this.y);
				temp = 1;
			} else {
				var cat = document.getElementById("topB");
				context.drawImage(cat, this.x, this.y);
				temp = 0;
			}
		} else if(this.visible == 2) {
			if(temp == 0) {
				var cat = document.getElementById("right");
				context.drawImage(cat, this.x, this.y);
				temp = 1;
			} else {
				var cat = document.getElementById("rightB");
				context.drawImage(cat, this.x, this.y);
				temp = 0;
			}
				
		} else if(this.visible == 3) {
			if(temp == 0) {
				var cat = document.getElementById("bottom");
				context.drawImage(cat, this.x, this.y);	
				temp = 1;
			} else {
				var cat = document.getElementById("bottomB");
				context.drawImage(cat, this.x, this.y);	
				temp = 0;
			}
			
		} else if(this.visible == 4) {
			if(temp == 0) {
				var cat = document.getElementById("left");
				context.drawImage(cat, this.x, this.y);
				temp = 1;
			} else {
				var cat = document.getElementById("leftB");
				context.drawImage(cat, this.x, this.y);	
				temp = 0;
			}
				
		}
		
    	context.fill();
    };
}
function shoot() {

}

var f = 0, l = 0, i = 0;
for(l; l < coor; l++) {
	for(i; i < coor; i++) {
		if(maps[i][l] == 1) {
			context.beginPath();
			var cat = document.getElementById("wall");
			context.drawImage(cat, 20 * l, 20 * i);
		}
	}
	i = 0;
}
k = new tank(0, 0);
k.draw();
var left, right, bottom, tops;
onkeypress  = function() {
Clear(k.x, k.y);
left = 0;
right = 0;
bottom = 0;
tops = 0;
if(event.keyCode == 119 && tops != 1) k.visible = 1;
if(event.keyCode == 115 && bottom != 1) k.visible = 3;
if(event.keyCode == 100 && right != 1) k.visible = 2;
if(event.keyCode == 97 && left != 1) k.visible = 4;

for(i = 0; i < coor; i++) {
	for(l = 0; l < coor; l++) {			
		if(maps[l][i] == 1) {
			if((i * 20 + 20 == k.x) && (l * 20 + 20 > k.y) && (l *20 < k.y + 40)) {//left
				left = 1;
			}
			if((i * 20 == k.x + 40) && (l * 20 + 20 > k.y) && (l *20 < k.y + 40)) {//right
				right = 1;
			} 
			if((l * 20 == k.y + 40) && (i * 20 + 20 > k.x) && (i *20 < k.x + 40)) {//bottom
				bottom = 1;
			}
			if((l * 20 + 20 == k.y) && (i * 20 + 20 > k.x) && (i *20 < k.x + 40)) {//top
				tops = 1;
			}  
		}
	}			
}

	if(event.keyCode == 119 && tops != 1) {//top
		if(k.y > 0) {
			k.y-=5;
		}
	}
	if(event.keyCode == 115 && bottom != 1) {//bottom
		if(k.y < 480) {
			k.y += 5;
		}
	}
	if(event.keyCode == 100 && right != 1) {//right
		if(k.x < 480) {
			k.x += 5;
		}
	}
	if(event.keyCode == 97 && left != 1) {//left
		if(k.x > 0) {
			k.x-=5;
		}
	}
	if(event.keyCode == 101) {
		shoot(k);
	}
	k.draw();
};
setInterval(function(){
  
}, 50);