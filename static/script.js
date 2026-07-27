/*
let taskId = 0;

function addTask() {

    const input = document.getElementById("addtask");

    const text = input.value.trim();

    if (text === "") return;

    const task = document.createElement("div");

    task.className = "task";
    task.draggable = true;
    task.id = "task-" + taskId++;

    task.addEventListener("dragstart", drag);

    task.innerHTML = `
    <span>${text}</span>
    <button class="delete" onclick="this.parentElement.remove()">×</button>
    `;

    document.getElementById("todo").appendChild(task);

    input.value = "";
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();

    const id = e.dataTransfer.getData("text");

    const task = document.getElementById(id);

    if (e.target.classList.contains("task-list")) {
        e.target.appendChild(task);
        if (e.target.id === "done") 
        {
            task.classList.add("completed");
        } else 
        {
            task.classList.remove("completed");
        }
    }

}

document.getElementById("addtask").addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        addTask();
    }
});
*/

alert("Hello Mummy! -Trouli");

let tasks = [];
let taskId = 0;


function saveTasks() {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    localStorage.setItem("kanbanTaskId", taskId);
}

function loadTasks() {
    const savedTasks = localStorage.getItem("kanbanTasks");
    const savedId = localStorage.getItem("kanbanTaskId");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }

    if (savedId) {
        taskId = parseInt(savedId);
    }

    renderBoard();
}

function renderBoard() {

    document.querySelectorAll(".task-list").forEach(column => {
        column.innerHTML = "";
    });

    tasks.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = "task";

        if (task.column === "done") {
            taskElement.classList.add("completed");
        }

        taskElement.draggable = true;
        taskElement.id = "task-" + task.id;

        taskElement.addEventListener("dragstart", drag);

        taskElement.innerHTML = `
            <span>${task.text}</span>
            <button class="delete" onclick="deleteTask(${task.id})">×</button>
        `;

        document.getElementById(task.column).appendChild(taskElement);
    });

}

function addTask() {

    const input = document.getElementById("addtask");
    const text = input.value.trim();

    if (text === "") return;

    tasks.push({
        id: taskId++,
        text: text,
        column: "todo"
    });

    input.value = "";

    saveTasks();
    renderBoard();
}

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderBoard();
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {

    e.preventDefault();

    const htmlId = e.dataTransfer.getData("text");
    const id = parseInt(htmlId.replace("task-", ""));

    if (!e.target.classList.contains("task-list"))
        return;

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.column = e.target.id;

        saveTasks();
        renderBoard();
    }
}

document.getElementById("addtask").addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        addTask();
    }

});

loadTasks();