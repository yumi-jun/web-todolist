const todoform=document.querySelector(".js-todoForm"),
todoinput=todoform.querySelector("input"),
todoList=document.querySelector(".js-todoList");

const TODOS_LS='toDos';

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//string 형태로 바꿔줌
}

function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    todoList.removeChild(li);//li의 자식요소 text지움
    console.log(toDos);
    const cleanTodos=toDos.filter(function filterFn(dkdk){//li는 string
         return dkdk.id!==parseInt(li.id);//dkdk가 현재 진행하고있는,,즉 delete당한 얘, dkdk아이디랑 다른 친구들 찾아야함
    });
   
    toDos=cleanTodos;
    console.log(cleanTodos);
    saveToDos();
}
let idnum=1;
function paintTodo(text){
    const li=document.createElement("li");//html에 li 생성
    const delBtn=document.createElement("button");
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);
    const span= document.createElement("span");//- div와 비슷하게 사용되나 인라인 엘리먼트임
    const newId=idnum;
    idnum++;
    span.innerText=text;
    li.appendChild(span);//li의 father 엘리먼트 요소에 span집어넣음
    li.appendChild(delBtn);
    li.id=newId;
    todoList.appendChild(li);
    const todoObj={
        text: text,//문자
        id: newId//번호
    };
    toDos.push(todoObj);
    saveToDos();//localstorage에서는 data저장xxstring형태로 저장 object형태를 string으로 바꿔야함
}

function handelsubmit(event){
    event.preventDefault();
    const currentValue=todoinput.value;
    paintTodo(currentValue);
    todoinput.value="";//
}
function loadTodos(){//새로고침해도 값들이 저장되어있음
    const loadtoDos=localStorage.getItem(TODOS_LS);
    if(loadtoDos!=null){
        const parseToDos=JSON.parse(loadtoDos);//문자열을 객체로 반환
        parseToDos.forEach( //forEach함수는 함수를 실행, array애 담긴 함수를 한번씩 실행
            function(아무글자){
                paintTodo(아무글자.text);
        }
    )
}
}
function init(){
    loadTodos();
    todoform.addEventListener("submit",handelsubmit);
}
init();