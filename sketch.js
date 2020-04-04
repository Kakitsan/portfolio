// let array = [];
// let backgroundColor = 200;
let noiseoffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(backgroundColor);
  background(220, 50, 133);


  // noFill();
}

function draw() {
  // if (mouseIsPressed){
    strokeWeight(strokeWidth);
    background(220, 50, 133, 5);

    noiseoffset += 0.05;
    strokeWidth = noise(noiseoffset) * 20;

    stroke(map(mouseX, 0, 600, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // backgroundColor-= 4;
    // background(backgroundColor);

    // array.push([mouseX, mouseY]);
    // beginShape();
    // for(let i = 0; i<array.length; i++){
    //   curveVertex(array[i][0], array[i][1]);
    //
    // }
    // endShape();
  // }
}

function keyTyped(){
  if(key === 's'){
    saveCanvas('fileName', 'PNG');
  }
  else if(key === 'd'){

    clear();
    // background(255);
    // beginShape();
    // for(let i = 0; i < array.length - 1; i++){
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();

    // line(array[1][0], array[1][1], array[2][0], array[2][1]);

}
  return false;
}

  // function mouseIsPressed(){
  //   array = [];
  //   backgroundColor = 255;
  //
  //
  // }
