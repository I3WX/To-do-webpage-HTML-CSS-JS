const searchBtn = document.getElementById("searchBtn")
const inputContainer = document.getElementById("inputContainer")
const workList = document.getElementById("workList")


searchBtn.addEventListener('click',()=>{
    if(!inputContainer.value){
        alert("Add task")
    }
    else{
        let task = inputContainer.value;
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.innerHTML = task
        li.appendChild(span)
        workList.appendChild(li)
    }
    inputContainer.value = "";
    saveData()
})

workList.addEventListener('click' ,function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData (){
    localStorage.setItem("data" , workList.innerHTML)
}

(function loadData (){
    workList.innerHTML = localStorage.getItem("data")
})()