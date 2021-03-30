var brushColor;

function setup() {
  createCanvas(800,400);
  background(255,255,255);
  brushColor=color(50);
  console.log(brushColor);
}

function draw() { 
  //background(255,255,255);
  if(mouseIsPressed){
    if(mouseX<=50){
     if(mouseY<=50){
       brushColor=color("red");
     }else if(mouseY<=100){
              brushColor=color("green");
     }else if(mouseY<=150){
             brushColor=color("purple");
     }else if(mouseY<=200){
             brushColor=color("blue");
     }else if(mouseY<=250){
             brushColor=color("yellow");
     }else if(mouseY<=300){
             brushColor=color(235,52,137);
     }else if(mouseY<=350){
             brushColor=color("orange");
     }else if(mouseY<=400){
             brushColor=color("lightblue");
   }
 }
stroke(brushColor);
line(mouseX,mouseY,pmouseX,pmouseY);
  }

  /*text(mouseX+","+mouseY,mouseX,mouseY);*/
   
  strokeWeight(5);
  stroke("black");
  fill("red");
  rect(0,0,50,50);

  fill("green");
  rect(0,50,50,50);

  fill("purple");
  rect(0,100,50,50);

  fill("blue");
  rect(0,150,50,50);

  fill("yellow");
  rect(0,200,50,50);
  
  fill(235, 52, 137);
  rect(0,250,50,50);

  fill("orange");
  rect(0,300,50,50);

  fill("lightblue");
  rect(0,350,50,50);
  
}