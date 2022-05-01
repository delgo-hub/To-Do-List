"use strict";
//DOM VARIABLES
const taskInput = document.querySelector(".task-input");
const taskContainer = document.getElementById("tasks-container");
const taskContainerSmaller = document.getElementById("task-container-smaller");
const taskCounterEl = document.querySelector(".task-counter");
const addBtn = document.querySelector(".add-task");
const deleteAllBtn = document.querySelector(".delete-all-btn");

//VARIABLES
let counter = 0;

//EVENTS
addBtn.addEventListener("click", () => {
    //GUARD CLAUSE
    if (taskInput.value === "") return;

    //CREATE HTML ELEMENTS
    const taskLi = document.createElement("li");
    const taskContent = document.createTextNode(taskInput.value);
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("i");

    //SET ATTRIBUTES
    taskLi.setAttribute("class", "task-content");
    checkBox.setAttribute("class", "check-box");
    checkBox.setAttribute("type", "checkbox");
    deleteBtn.setAttribute("class", "fa-solid fa-trash");

    //APPEND ELEMENTS
    taskLi.appendChild(checkBox);
    taskLi.appendChild(taskContent);
    taskLi.appendChild(deleteBtn);
    taskContainerSmaller.appendChild(taskLi);

    //RESET INPUT
    taskInput.value = "";

    //INCREMENT COUNTER
    counter++;
    taskCounterEl.textContent = `${counter} TASKS`;

    //CHECKBOX EVENT
    checkBox.addEventListener("click", () => {
        taskLi.classList.toggle("checked");

        if (taskLi.classList.contains("checked")) {
            counter--;
            taskCounterEl.textContent = `${counter} TASKS`;
        } else {
            counter++;
            taskCounterEl.textContent = `${counter} TASKS`;
        }
    });

    //DELETE BUTTON EVENT
    deleteBtn.addEventListener("click", () => {
        if (taskLi.classList.contains("checked")) {
            taskLi.classList.remove("checked");
            counter++;
        }
        taskContainerSmaller.removeChild(taskLi);
        counter--;
        taskCounterEl.textContent = `${counter} TASKS`;
    });
});

//DELETE ALL TASKS EVENT
deleteAllBtn.addEventListener("click", () => {
    taskContainerSmaller.replaceChildren();

    //RESET COUNTER
    counter = 0;
    taskCounterEl.textContent = `${counter} TASKS`;
});
