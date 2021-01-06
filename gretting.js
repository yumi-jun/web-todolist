const form=document.querySelector(".js-form"),//첫번째 것을 가져오고 queruSelectorAll은 모든것 
input=form.querySelector("input"),//input값 저장
greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser"
,SHOWING_CN="showing";//showing은 보여준다는 리모콘
function handelsubmit(event){
    event.preventDefault();//submit할때의 값이 다른곳으로 가는것을 막음
    const currentValue=input.value;
    paintGreeting(currentValue);//제출시 어떻게 맞이할건지
    saveName(currentValue);
}
function saveName(text){//인터넷 브라우저에 저장
    localStorage.setItem(USER_LS,text);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handelsubmit);

}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);//이걸하는 이유는 뭘까..
    //greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){//localstorage정보를 가져옴
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();

    }else{
        paintGreeting(currentUser);
    }
}
function init(){

    loadName();
}
init();