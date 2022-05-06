const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
  <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
            </div>
          <div class="d-flex w-100 mt-2 justify-content-between">
                <small>${assignedTo}</small>
                <small>${dueDate}</small>
          </div>
          <p>${description}</p>
          <div class="d-flex w-100 justify-content-end">
            <button class="done-button">
              Mark As Done
            </button>
  </li>`;
                                                          

class TaskManager {
  constructor(currentId = 0){
    this.tasks = [];
    this.currentId = currentId;
  } 

  addTask(name, description, assignedTo, dueDate) {
     const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,  
      status: 'TODO'
    };
  
    this.tasks.push(task);
  }

  getTaskById(taskId) {
      let foundTask;
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        if (task.id === taskId) {
          foundTask = task;
        }
      }
  
      return foundTask;
    }
  
  render() {
    const tasksHtmlList = [];

    for(let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

      tasksHtmlList.push(taskHtml);
    }
    
    const tasksHtml = tasksHtmlList.join('\n');

    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;
  } 
}


