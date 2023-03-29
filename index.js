
 
 //sizing variables
   var w = window.innerWidth,
       h = window.innerHeight,
       resolution = 8.5,
       resolutionH = 11,
       dimDif = resolution / resolutionH,
       sizeH = h,
       sizeW = h * dimDif;



///////////////////////////////



var pallete = ["#F45C45", "#EC7FB5",
       "#66BDEA", "#D8EFEB", "#267A54",
       "#FAE107", "#BFE55A"];

let randCol;


function setup() {
background(255)
createCanvas(w, h);
CreateCircles()
pickpick()

// background(pallete[randCol])
}

function CreateCircles(){
let number = Math.random() + 3

for (var i = 0; i < number; i++){
// filter(INVERT)
// blendMode(DIFFERENCE)


var count = Math.random()* 75
var xx = width/(count+1)+13
if (xx>85){
  blendMode(SCREEN)
  }
var yy = random(0.7)


noStroke()
randCol=random(pallete.length);  
randCol=floor(randCol);
fill(pallete[randCol]);



for(var u = -2; u < count+2; u++) {
for (var j = -2; j < count+2; j++ ){

var s = xx*(0.5+noise(j*yy+34, u*yy+34)*0.5)
var x = xx+j*xx+xx*noise(j*yy, u*yy)
var y = xx+u*xx+xx*noise(j*yy+100, u*yy+100)*0.5

ellipse(x, y, s, s) 
}
}
}
}
function pickpick(amount){
loadPixels();
const d = pixelDensity();
const pixelsCount = 4 * (width * d) * (height * d);
for (let i = 0; i < pixelsCount; i += 4) {
const grainAmount = random(-30, 30);
pixels[i] = pixels[i] + grainAmount;
pixels[i+1] = pixels[i+1] + grainAmount;
pixels[i+2] = pixels[i+2] + grainAmount;
}
updatePixels();
}

//    //apply
//    function setup() {
//        createCanvas(sizeW, sizeH);
//        background('blue');
//    }

//    function draw() {
//        noStroke();
//        noLoop();

//    }