
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
  
    return this.tasks.push(task);
  }
}


