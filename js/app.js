'use strict';

var imageSectionElem = document.getElementById('three-container');
var image1 = document.getElementById('pic1');
var image2 = document.getElementById('pic2');
var image3 = document.getElementById('pic3');
var threePics = [] // stores 3 random pics from function "chooseThree"

// Global Random Function
// Will give me num from 0 to num-1
function randomNumber (num) {
  var randNum = Math.floor(Math.random() * (num)); // Math.random() * (20 - 0 + 1)
  return Math.floor(randNum);
}

// Create CONSTRUCTOR
var Pictures = function(name, urlSource) {
  this.name = name;
  this.url = urlSource;
  this.clicks = 0;
  Pictures.allPictures.push(this);
  this.timeShown = 0;
}

Pictures.allPictures = []; //save all img into a list


function chooseThree (numLength) {
  while(threePics.length < 3){
    var randomItem = Pictures.allPictures[randomNumber(numLength)]
    if (threePics.includes(randomItem) === false) {
      threePics.push(randomItem);
    }
  }
  return threePics;
}

var renderingPictures = function(){
  // console.log('threePics[0][url]:', threePics[0][url])
  pic1.src = threePics[0].url;
  pic2.src = threePics[1].url;
  pic3.src = threePics[2].url;
  pic1.alt = threePics[0].name;
  pic2.alt = threePics[1].name;
  pic3.alt = threePics[2].name;
}

new Pictures('bag', '../img/assets/bag.jpg');
new Pictures('banana', '../img/assets/banana.jpg');
new Pictures('bathroom', '../img/assets/bathroom.jpg');
new Pictures('boots', '../img/assets/boots.jpg');
new Pictures('breakfast', '../img/assets/breakfast.jpg');
new Pictures('bugglegum', '../img/assets/bubblegum.jpg');
new Pictures('chair', '../img/assets/chair.jpg');
new Pictures('cthulhu', '../img/assets/cthulhu.jpg');
new Pictures('dog-duck', '../img/assets/dog-duck.jpg');
new Pictures('dragon', '../img/assets/dragon.jpg');
new Pictures('pen', '../img/assets/pen.jpg');
new Pictures('pet-sweep', '../img/assets/pet-sweep.jpg');
new Pictures('scissors.jpg', '../img/assets/scissors.jpg');
new Pictures('shark', '../img/assets/shark.jpg');
new Pictures('sweep', '../img/assets/sweep.png');
new Pictures('tauntaun', '../img/assets/tauntaun.jpg');
new Pictures('unicorn.jpg', '../img/assets/unicorn.jpg');
new Pictures('usb', '../img/assets/usb.gif');
new Pictures('water-can', '../img/assets/water-can.jpg');
new Pictures('wine-glass', '../img/assets/wine-glass.jpg');


chooseThree(Pictures.allPictures.length);
// console.log('Pictures(): ', Pictures());
console.log('Pictures.allPictures: ', Pictures.allPictures);
console.log('chooseThree(Pictures.allPictures.length): ', chooseThree(Pictures.allPictures.length));
renderingPictures();

// ********Event Handler***********

var clickedItem = function eventHandler(event) {
  console.log('this: ', this);
  console.log('threePics[0]', threePics[0]);
  console.log('event.target: ', event.target.id);

  if(event.target.id === "pic1"){
    threePics[0].clicks++;
    chooseThree(Pictures.allPictures.length);
    console.log('chooseThree(Pictures.allPictures.length): ', chooseThree(Pictures.allPictures.length))
    // event.preventDefault();
  }
  else if(event.target.id === "pic2"){
    threePics[1].clicks++;
    // event.preventDefault();
  }
  else if(event.target.id === "pic3"){
    threePics[2].clicks++ ;
  }
  
  // if (threePics[].clicks <= 3) {
  //   threePics[].clicks++ 
  // }
}

var timesShown = function shownItems(){
  for (var i = 0; i < threePics.length; i++){
    threePics[i].timeShown++;
  }
}


console.log('this.timeShown', this.timeShown);

var clickedPic1 = image1.addEventListener("click", clickedItem);
var clickedPic2 = image2.addEventListener("click", clickedItem);
var clickedPic3 = image3.addEventListener("click", clickedItem);

// image1.addEventListener("click", clickedItem);
// image2.addEventListener("click", clickedItem);
// image3.addEventListener("click", clickedItem);

var newRandom = function createNewRandom(){
  if (clickedPic1 || clickedPic2 || clickedPic3){

   }
    chooseThree(Pictures.allPictures.length)
}

// newRandom();
timesShown();
// chooseThree(Pictures.allPictures.length);
newRandom();
