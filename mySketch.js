//Making this took a lot of effort. To be honest, I hadn't understood all the elements of p5 discussed till now, but I'm confidentlly a step closer. 
let a = 25;
let b = 150;
let skyColor = 0

//Setting up
function setup() {
	createCanvas(1000, 720);
}

//Starting the shape building and coloring process
function draw() {
	background(skyColor);

// Setting parameters for the parachute to land
	if (b + 50 >= 570 && a >= 400 && a <= 600) {
		skyColor = 'rgb(233,120,69)';
		// The sun
		fill('red');
		noStroke();
		circle(500, 620, 400);

		//Something I was trying
		if (b + 50 >= 620) {
			skyColor = 'grey'
			text('🌈', 0, 100);

			//fill
		}

	}

//I knew this was going to be complex, so I used the loop feature to draw a grid


	//Loop1 - white dot grid
	for (let x = 25; x <= width; x += 25) {
		for (let y = 25; y <= height; y += 25) {
			circle(x, y, 4);

		}


		//cloud 1
		square(50, 150, 25);
		square(75, 125, 25);
		square(125, 125, 25);
		square(100, 150, 25);
		//cloud 2
		push();
		translate(200, 200);
		square(0, 0, 25);
		square(25, 25, 25);
		square(50, 00, 25);
		square(75, 25, 25);
		pop()
		//cloud 3
		push();
		translate(300, 50);
		square(0, 0, 25);
		square(25, 25, 25);
		square(50, 00, 25);
		square(75, 25, 25);
		pop()
		//cloud 4
		push();
		translate(475, 125);
		square(25, 25, 25);
		square(0, 50, 25);
		square(50, 50, 25);
		pop();
//cloud 5
		push();
		translate(650, 75);
		square(25, 25, 25);
		square(50, 0, 25);
		square(75, 25, 25);
		square(100, 0, 25);
		pop();

		push();
		translate(850, 150);
		square(25, 25, 25);
		square(0, 50, 25);
		square(50, 50, 25);
		pop();

		//AND HERE COMES THE EXECUTION OF THE PARACHUTE


		// Parachute cords
		push();
		stroke(200); // White color for the cords
		line(a - 50, b, a - 10, b + 50);
		line(a + 50, b, a + 10, b + 50);

		pop();

		push(); // Parachute canopy
		fill(135, 206, 235); // Light blue for the canopy
		arc(a, b, 100, 100, PI, TWO_PI); // Semi-circle canopy
		pop();

		push();
		// Basket
		fill(160, 82, 45); // Brown for the basket
		square(a - 10, b + 50, 20); // Basket

		pop();

		//Here's the water 
		push();
		translate(0, 600);
		//rect(0, 0, 25);
		fill("blue")
		rect(0, 75, 1000, 50)
		pop();

		//Here I'm making the green island
		push();
		translate(400, 600);
		rect(0, 0, 25)
		fill("rgb(54,167,73)")
		rect(0, 0, 200, 100);
		pop();
	}

}
//Parachute movement
function keyPressed() {
	const speed = 50;

	if (keyCode === UP_ARROW) {
		b -= speed;
	} else if (keyCode === DOWN_ARROW) {
		b += speed;
	} else if (keyCode === LEFT_ARROW) {
		a -= speed;
	} else if (keyCode === RIGHT_ARROW) {
		a += speed;
	}
}