canvas = document.getElementById("can");
ctx = canvas.getContext("2d");
backgroundimage = "racing.jpg";

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add(){
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadmarsfunction;
    backgroundimgtag.src = backgroundimage;

    roverimgtag = new Image();
    roverimgtag.onload = uploadroverfunction;
	roverimgtag.src = car1_image;
	
	roverimgtag2 = new Image();
    roverimgtag2.onload = uploadroverfunction2;
    roverimgtag2.src = car2_image;
}

function uploadmarsfunction() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadroverfunction() {
    ctx.drawImage(roverimgtag,car1_x,car1_y,car1_width, car1_height);
}

function uploadroverfunction2() {
    ctx.drawImage(roverimgtag2,car2_x,car2_y,car2_width, car2_height);
}

window.addEventListener("keydown", keydownfunction);

function keydownfunction(e)
{
    keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("key w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("key s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("key a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("key d");
		}

		if(car1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
}

function up(){
	if(car1_y>=0){
		car1_y = car1_y- 10;
		console.log("When up arrow is pressed , x position of Car1=" + car1_x  + " | Y position of Car1 " + car1_y);
		uploadmarsfunction();
		uploadroverfunction()
	}
}

function down(){
	if(car1_y<=500){
		car1_y = car1_y+ 10;
		console.log("When down arrow is pressed , x position of Car1" + car1_x  + " | Y position of Car1 " + car1_y);
		uploadmarsfunction();
		uploadroverfunction()
	}
}

function left(){
	if(car1_x>=0){
		car1_x = car1_x - 10;
		console.log("When left arrow is pressed , x position of Car1" + car1_x + " | Y position of Car1" + car1_y);
		uploadmarsfunction();
		uploadroverfunction()
	}
}

function right(){
	if(car1_x<=700){
		car1_x= car1_x + 10;
		console.log("When right arrow is pressed , x position of Car1" + car1_x + " | Y position of Car1" + car1_y);
		uploadmarsfunction();
		uploadroverfunction()
	}
}

function car2_up(){
	if(car2_y>=0){
		car2_y = car2_y- 10;
		console.log("When up arrow is pressed , x position of Car1=" + car2_x  + " | Y position of Car1 " + car2_y);
		uploadmarsfunction();
		uploadroverfunction2()
	}
}

function car2_down(){
	if(car2_y<=500){
		car2_y = car2_y+ 10;
		console.log("When down arrow is pressed , x position of Car1" + car2_x  + " | Y position of Car1 " + car2_y);
		uploadmarsfunction();
		uploadroverfunction2()
	}
}

function car2_left(){
	if(car2_x>=0){
		car2_x = car2_x - 10;
		console.log("When left arrow is pressed , x position of Car1" + car2_x + " | Y position of Car1" + car2_y);
		uploadmarsfunction();
		uploadroverfunction2()
	}
}

function car2_right(){
	if(car2_x<=700){
		car2_x= car2_x + 10;
		console.log("When right arrow is pressed , x position of Car1" + car2_x + " | Y position of Car1" + car2_y);
		uploadmarsfunction();
		uploadroverfunction2()
	}
}