
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

  render() {
    const tasksHtmlList = [];

    for(let i=0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

      taskHtml.push(tasksHtml);
    }
    const tasksHtml = tasksHtml.join('\n');

    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;
  }
}


