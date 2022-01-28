const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
    <li class="list-group-item">
    <div class="widget-content p-0">
        <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
                <div class="custom-checkbox custom-control">
                    <input class="input" type="checkbox">
                    <label class="label">&nbsp;</label>
                </div>
            </div>
            <div class="widget-content-left">
                <div class="widget-heading">${name}</div>
                <div class="widget-description">${description}</div>
                <div class="widget-subheading"><i>${assignedTo}</i></div>
                <div class="widget-subheading"><i>${dueDate}</i></div>
            </div>
            <div class="widget-content-right">
                <div class="badge bg-success">Completed</div>
                <button class="border-0 btn-transition btn btn-outline-success"
                    data-bs-toggle="modal" data-bs-target="#taskForm">
                    <i class="fa fa-pencil"></i>
                </button>
            </div>
        </div>
    </div>
</li>
`;
return html;
};
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
};
// Create the render method
const render = () {
    let tasksHtmlList = [];
    // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];
      // Create a date variable, storing a new Date(), passing in the current task's dueDate to the Date constructor.
      const date = new Date(task.dueDate);
      // Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );
      // push the taskHtml into the tasksHtmlList array.
      tasksHtmlList.push(taskHtml);
    }

    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = tasksHtml;
  }
}