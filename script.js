"use strict";

const clear=document.getElementById("refresh");
const add=document.getElementById("add");
const list=document.querySelector(".list");
const addtask=document.getElementById("task");

const CHECK="fa-check-circle"; //for completed tasks
const UNCHECK="fa-circle-thin"; //for incomplete tasks



//clear all tasks
clear.addEventListener("click",function(){
    location.reload();
})
//fetches today's date
const today=new Date();

let options={ weekday:'short',month:'short',day:'numeric'};
document.getElementById("date").innerHTML=today.toLocaleString("en",options);

//function to show the completion status of tasks
function status(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    
    
}
//function to remove an element
function remove(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

//function to add an element
function addTask(task){

const item=`<li class="task_item">
<i class="fa fa-circle-thin fa-2x" for="complete"></i>
<span class="text">${task}</span>
<i class="fa fa-trash-o fa-2x" id="delete" for="delete"></i>
</li>`
let position="beforeend";
list.insertAdjacentHTML(position,item);

}
//function to check if user has entered any task or not
function check(){
    const task=addtask.value;
    if(task!=""){
        addTask(task);
        addtask.value="";
    }
    else if(task==="") {
        alert("Please enter a task!");
      
    }  
}
add.addEventListener("click", check);
list.addEventListener("click", function(event){
    let element=event.target;
    const purpose=element.attributes.for.value;
    if(purpose=="complete"){
        status(element);
    }
    else if(purpose=="delete"){
        remove(element);
    }
});
