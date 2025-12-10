let myFont;
let colorpicker=document.getElementById('colorpicker');
function preload() {
  myFont = loadFont("../font/AdobeArabic-BoldItalic.otf");
}
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}
function draw() {
  background(colorpicker.value); 
  textAlign(CENTER);
  textSize(90);
  textFont(myFont);
  text("BON DIA",width/2,height/2);
}