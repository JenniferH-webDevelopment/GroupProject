const taskManager = new TaskManager(0);
// taskManager.addTask('test', 'test', 'test', 'test', 'test');
// console.log(taskManager.tasks);

const form = document.querySelector("#new-task-form");
const dateElement = document.querySelector("#date-element");
const modalTaskForm = document.getElementById('taskForm');
let today = new Date();
const [day, month, year] = [today.getDate(), today.getMonth()+1, today.getFullYear()];
console.log(today);
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;
// const taskHtml = createTaskHtml(testName, testDescription, testAssignedTo, testDueDate, testStatus);
// console.log(taskHtml);
modalTaskForm.addEventListener('shown.bs.modal', function () {
    newTaskNameInput.focus();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!this.validFormFieldInput()) {
        event.preventDefault();
        event.stopPropagation();
        newTaskForm.classList.add('was-validated');
    }

    // Get all the form values using FormData https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete
    // Reference https://www.learnwithjason.dev/blog/get-form-values-as-json
    const data = new FormData(event.target);
    const formDataValue = Object.fromEntries(data.entries());
    console.log(formDataValue);

    //add new task using Task Manager
    taskManager.addTask(formDataValue);
    console.log(taskManager.tasks);

    //reset form value
    clearFormFields();
    taskManager.render();
    //hide modal form
    $('#taskForm').modal('hide');

});
// Use querySelector to select the Task List and store it in a variable.
const taskList = document.querySelector("#task-list");
// Add an Event Listener to the Task List, listening for the 'click' event.
taskList.addEventListener("click", (event) => {
    // Using the event.target, using an if statement, check if the target's classList contains the class we added to the button, 'done-button'. If the classList contains 'done-button', we know we clicked on the "Done" button from earlier!
    if (event.target.classList.contains("done-button")) {
    //Use DOM Traversal, such as the parentElement property of the target (Node.parentElement) to traverse the DOM and find the task's element. (we want to find <li>). Store the <li> in a parentTask variable.
      const parentTask =
        event.target.parentElement.parentElement.parentElement.parentElement;
      console.log(parentTask);
      // Get the taskId of the parent Task and turn it into a number.
      const taskId = Number(parentTask.dataset.taskId);
      // Get the task from the TaskManager using the taskId
      const task = taskManager.getTaskById(taskId);
      // Update the task status to 'DONE'
      task.status = "Done";

      // Render the tasks
      taskManager.render();
    }
  });


function clearFormFields() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}

function validFormFieldInput() {
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    // console.log("name:  " + newTaskNameInput.value);
    const newTaskDescription = document.querySelector('#newTaskDescription');
    // console.log("description:  " + newTaskDescription.value);
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    // console.log("assigned to:  " + newTaskAssignedTo.value);
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    // console.log("due date:  " + newTaskDueDate.value);

    if (newTaskNameInput.value.length <= 5) {
        return false;
    }

    else if (newTaskAssignedTo.value.length <= 5) {
        return false;
    }

    else if (newTaskDescription.value.length <= 5) {
        return false;
    }

    else if (newTaskDueDate.value.length <= 0) {
        return false;
    }

    return true;
}