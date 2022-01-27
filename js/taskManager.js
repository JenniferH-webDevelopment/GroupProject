class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    };

    addTask(name, description, assignedTo, dueDate, status) {
        console.log('Adding new task');
        const task = {
            name : name,
            description : description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
            currentId: this.currentId++,
        };
        this.tasks.push(task);
    };
}