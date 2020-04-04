let dogs = [];
let randomIndex;
let animating = false;
let imgloader = [];
let imgcounter = 0;
let startRandomizerButton;
let cnv;
let nameInputs = [];
let addMoreButton;
let firstTime = true;
// let counter = 0;

function preload() {
  for (let i = 0; i <= 8; i++) {
    imgloader[i] = loadImage(`https://raw.githubusercontent.com/Kakitsan/art101/master/Avator/assets/img_${i}.jpg`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(200);
  text("click to randomize", 50, 50);
  imageMode(CENTER);
  frameRate(8);
  console.log(imgloader);
  textStyle(BOLD);
  textAlign(CENTER);
  // button = createButton("Click to randomize");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);
  // button.class("randomizerButton");
  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for(let i = 0; i < 3; i++){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

  // setInterval(changeBackground, 1000);
  // setTimeout(changeBackground, 1000);
}

function draw() {
  if (animating == true) {
    clear();
    image(imgloader[imgcounter], width / 2, height / 2);
    if (imgcounter < imgloader.length - 1) {
      imgcounter++;
    } else {
      imgcounter = 0;
    }
    // noStroke();
    // fill(random(0, 255), random(0, 255), random(0, 255));
    // ellipse(random(width), random(height), random(50, 200));

  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// }else{
//
// }
// }
function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex], width / 3, height - 380);
    image(random(imgloader), width / 2, height / 2);
    // text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }

}

function buttonPressed() {
  if(firstTime){
  for(i = 0; i < nameInputs.length; i++){
    dogs.push(nameInputs[i].value());

  }
  firstTime = false;
}
  animating = true;
  setTimeout(randomizer, 2000);


  // if (dogs[0]){
  //   background(random(200,255));
  //   randomIndex = int(random(dogs.length));
  //   text(dogs[randomIndex].name, 50, 50);
  //   dogs.splice(randomIndex, 1);
  // }
  //   else {
  //     background(random(200, 255));
  //   text("nothing left!", 50, 50);
  //   }
}
