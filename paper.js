class paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
		this.wallThickness=20;
		
		//this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.paperWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
		this.image = loadImage ("paper.png");

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.paperHeight/2,this.paperWidth, this.paperHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
            pop()