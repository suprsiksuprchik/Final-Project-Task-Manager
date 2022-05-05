const taskManager = new TaskManager(0);

 const newTaskForm = document.querySelector('#newTaskForm');


newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

  taskManager.addTask(name, description, assignedTo, dueDate);  

  taskManager.render();
  
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
});

const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')) {
    const parentTask = event.target.parentElement.parentElement;

    const taskId = Number(parentTask.dataset.taskId);

    const task = taskManager.getTaskById(taskId);

    task.status = 'DONE';

    taskManager.render();

  }
});
