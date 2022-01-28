class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    };

    addTask(formDataValue) {
        console.log('Adding new task');
        const task = {
            name : formDataValue.taskName,
            description : formDataValue.taskDescription,
            assignedTo: formDataValue.taskAssignedTo,
            dueDate: formDataValue.taskDueDate,
            status: 'PENDING',
            currentId: this.currentId++,
        };
        this.tasks.push(task);
    };
}