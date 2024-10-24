const container = document.querySelector(".container");
const task = document.querySelector("#task");
const addbutton = document.querySelector("#addbutton");
const tasksdiv = document.querySelector(".taskscontainer");

addbutton.addEventListener("click", addingtask);
// task.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//        addingtask();
//     }
// })

function addingtask(){
    if(task.value === ""){
        alert("Please enter any Task!!!.");
    }
    else{
        addTask();
    }
}

function addTask () {
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskPara = document.createElement("p");
    const updatebutton = document.createElement("button");
    const deletebutton = document.createElement("button");
    const donebutton = document.createElement("button");

    taskPara.innerText = task.value;
    taskbox.setAttribute("class","tasks");
    checkbox.setAttribute("type", "checkbox");
    taskPara.setAttribute("class", "taskPara");
    updatebutton.setAttribute("class","updatebutton");
    deletebutton.setAttribute("class","deletebutton");
    donebutton.setAttribute("class","donebutton");
    checkbox.setAttribute("class","check");
    updatebutton.innerText = "Update";
    deletebutton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" class="delete"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
    donebutton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path></svg>';

    taskbox.prepend(checkbox, taskPara, updatebutton, deletebutton, donebutton);
    tasksdiv.prepend(taskbox);

    deletebutton.addEventListener("click", () => {
        if(checkbox.checked == true){
        taskbox.remove();
        }
        else{
            if(window.confirm("This task isn't completed yet, do you still want to delete it?")){
                taskbox.remove();
        }}
    });

    donebutton.addEventListener("click", () => {
        taskPara.style.textDecoration = "line-through";
        checkbox.checked = true;
    });

    updatebutton.addEventListener("click", () => {
        task.value = taskPara.innerText;
        addbutton.innerText = "Update";
        updatebutton.style.display = "none";
        addbutton.removeEventListener("click", addingtask);
        addbutton.addEventListener("click", updatetask);
    });

    function updatetask () {
        if(task.value === ""){
            alert("You Cannot Update Task Like Empty!!!.");
        }
        else{
            taskPara.innerText = task.value;
        }
        updatebutton.style.display = "block";
        addbutton.innerText = "Add";
        task.value = "";
        addbutton.removeEventListener("click", updatetask);
        addbutton.addEventListener("click", addingtask);
    }
    
    task.value = "";
}
