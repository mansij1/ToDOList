const addbuttonEl=document.getElementById("addbutton");
const inputEl=document.getElementById("InputTask");
const ulEl=document.getElementById("listedtasks");
const markcompEL=document.querySelector(".complete");
const clearEL=document.querySelector(".clear");
const footerEl=document.querySelector("#statusOfTasks");
var totaltask=0;
var comptask=0;

addbuttonEl.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = inputEl.value;
  if (inputValue.trim() !== "") {
      const taskEl = document.createElement("li");
      const rightBtn = document.createElement("button");
      const leftBtn = document.createElement("button");
      rightBtn.id = "right";
      leftBtn.id = "left";
      rightBtn.innerHTML = `<img alt="right tick" src="https://cdn-icons-png.flaticon.com/128/711/711239.png"/>`;
      leftBtn.innerHTML=`<img alt="left tick" src="https://cdn-icons-png.flaticon.com/128/2821/2821377.png"/>`;
      rightBtn.addEventListener("click", function () {
        completedind(taskEl);
      });
      leftBtn.addEventListener("click", function () {
        clearind(taskEl);
      });
      taskEl.appendChild(rightBtn);
      // taskEl.innerHTML += inputValue;
      const textNode = document.createTextNode(inputValue);
      taskEl.appendChild(textNode);
      taskEl.appendChild(leftBtn);
      console.log(taskEl)
      ulEl.appendChild(taskEl);
      inputEl.value = "";
  }
  taskCounter();
});


clearEL.addEventListener("click", function (event) {
    while (ulEl.hasChildNodes()) {
      ulEl.removeChild(ulEl.firstChild);
    }
    comptask=0;
    taskCounter();
  }
  
);

markcompEL.addEventListener("click", function (event) {
  const l=ulEl.children.length;
  comptask=l;
  for(let i=0;i<l;i++){
    ulEl.children[i].style.textDecoration="line-through";
  }
  
  taskCounter();
}

);

function completedind(liElement) {
  console.log(liElement.style.textDecoration);
  if(liElement.style.textDecoration !="line-through"){
  liElement.style.textDecoration = "line-through";
  comptask+=1;
  }
  else{
    liElement.style.textDecoration="none";
    comptask-=1;
  }
  taskCounter();
}
 function clearind(liElement){
  console.log(liElement);
  if(liElement.style.textDecoration =="line-through"){
    comptask-=1
  }
  liElement.remove();
  taskCounter();
 }

 function taskCounter() {
  const l=ulEl.children.length;
  footerEl.innerText=`${comptask} tasks completed out of ${l} total tasks`;
}
