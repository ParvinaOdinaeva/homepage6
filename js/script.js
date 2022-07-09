{
  const taskTable = [];

  const removeTask = (taskIndex) => {
    taskTable.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    taskTable[taskIndex].done = !taskTable[taskIndex].done;
    render();
  };

  const addNewTask = (newTaskContent) => {
    taskTable.push({ content: newTaskContent });
    render();
  };

  const bindRemoveEvents = () => { 
    const removeButtons = document.querySelectorAll(".js-remove"); 
    
    removeButtons.forEach((removeButton, taskIndex) => {
      removeButton.addEventListener("click", () => {
        removeTask(taskIndex);
      });
    });
  };

  const bindToggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");
    toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(taskIndex);
      });
    });
  };

  const render = () => {
    let tasksListHTMLContent = "";
    for (const task of taskTable) {
      tasksListHTMLContent +=
        `<li class="tasks__item js-task">
      <button class="tasks__button task__button--toggleDone js-toggleDone">${task.done ? "✔" : ""}</button>
      <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">${task.content}</span>
      <button class="tasks__button task__button--remove js-remove">🗑</button>
      </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;
    bindRemoveEvents();
    bindToggleDoneEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }
    newTaskElement.focus();
  };

  const init = () => {
    render();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };
  init();
}