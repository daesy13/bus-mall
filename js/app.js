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
  // this.clicks = clicks;
  Pictures.allPictures.push(this);
  // this.timeShown = timeShown;
}

Pictures.allPictures = []; //save all img into a list
var totalClicks = 0; //saves total num of clicks

function chooseThree (numLenght) {
  while(threePics.length < 3){
    var randomItem = Pictures.allPictures[randomNumber(numLenght)]
    if (threePics.includes(randomItem) == false) {
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