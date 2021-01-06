const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();//date관련 정보가져옴,,date는 클래스
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;

}

function init(){
    setInterval(getTime,1000);//1초마다 getTIme 실행
}
init();