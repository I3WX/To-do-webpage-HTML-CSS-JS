document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById("searchBtn");
    const inputContainer = document.getElementById("inputContainer");
    const workList = document.getElementById("workList");
    const searchForm = document.querySelector('.search');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    searchBtn.addEventListener('click', () => {
        addTask();
    });

    function addTask() {
        let task = inputContainer.value.trim();
        if (!task) {
            // alert("Add task");
        } else {
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.innerHTML = task;
            li.appendChild(span);
            workList.appendChild(li);
            saveData();
        }
        inputContainer.value = "";
    }

    workList.addEventListener('click', function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem("data", workList.innerHTML);
    }

    (function loadData() {
        workList.innerHTML = localStorage.getItem("data") || "";
    })();
});