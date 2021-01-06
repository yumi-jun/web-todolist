const body = document.querySelector("body");
const date=new Date();
const hour=date.getHours();
const IMG_NUMBER = 9;

function paintImagenight(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");//bgimage클래스 추가
  body.prepend(image);//body에 image 자식요소 추가
}
function paintImagesun(imgNumber) {
    const image = new Image();
    image.src = `imagesday/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");//bgimage클래스 추가
    body.prepend(image);//body에 image 자식요소 추가
  }

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  if(hour>18||hour<=3){
    paintImagenight(randomNumber);
  }else {
      paintImagesun(randomNumber);
  }
  console.log(hour);
}

init();