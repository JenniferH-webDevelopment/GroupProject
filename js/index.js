const taskManager = new TaskManager(0);

// Load the tasks from localStorage
taskManager.load();

// Render the loaded tasks to the page
taskManager.render();

const newTaskForm = document.querySelector("#newTaskForm");
const dateElement = document.querySelector("#date-element");
const modalTaskForm = document.getElementById('taskForm');
let today = new Date();
const [day, month, year] = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
console.log(today);
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;
let dueDateField = document.querySelector("#newTaskDueDate");
dueDateField.setAttribute('min', year + '-' + month + '-' + day);

modalTaskForm.addEventListener('shown.bs.modal', function () {
    newTaskNameInput.focus();
});

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // if (!this.validFormFieldInput()) {
    if (!newTaskForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        newTaskForm.classList.add('was-validated');
        return;
    }

    newTaskForm.classList.remove('was-validated');
    // Get all the form values using FormData https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete
    // Reference https://www.learnwithjason.dev/blog/get-form-values-as-json
    const data = new FormData(event.target);
    const formDataValue = Object.fromEntries(data.entries());
    console.log(formDataValue);

    //add new task using Task Manager
    taskManager.addTask(formDataValue);
    // console.log(taskManager.tasks);

    //reset form value
    clearFormFields();

    //save task to local storage
    taskManager.save();

    //render the task
    taskManager.render();

    //hide modal form
    $('#taskForm').modal('hide');
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
    } else if (newTaskAssignedTo.value.length <= 5) {
        return false;
    } else if (newTaskDescription.value.length <= 5) {
        return false;
    } else if (newTaskDueDate.value.length <= 0) {
        return false;
    }

    return true;
}

// Use querySelector to select the Task List and store it in a variable.
const taskList = document.querySelector("#task-list");
// Add an Event Listener to the Task List, listening for the 'click' event.
taskList.addEventListener('click', (event) => { // "event" here is the event parameter
    console.log(event.target.classList);
    if (event.target.classList.contains("done-button")) {
        //Use DOM Traversal, such as the parentElement property of the target (Node.parentElement) to traverse the DOM and find the task's element. (we want to find <li>). Store the <li> in a parentTask variable.
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        // console.log(parentTask);

        const taskId = Number(parentTask.dataset.taskId);
        // console.log(taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);
        // Update the task status to 'DONE'
        task.status = "Done";

        // Save the task to local storage
        taskManager.save();

        // Render the tasks
        taskManager.render();
    }

    // Check if a "Delete" button was clicked
    if (event.target.classList.contains("delete-button")) {
        event.preventDefault();

        let choice = confirm(event.target.getAttribute('data-confirm'));

        if (choice) {
            // Get the parent Task
            const parentTask =
                event.target.parentElement.parentElement.parentElement.parentElement.parentElement;

            // Get the taskId of the parent Task.
            const taskId = Number(parentTask.dataset.taskId);

            // Delete the task
            taskManager.deleteTask(taskId);

            // Save the tasks to localStorage
            taskManager.save();
        }

        // Render the tasks
        taskManager.render();
    }

    // if (event.target.classList.contains("edit-button")) {
    //     //Use DOM Traversal, such as the parentElement property of the target (Node.parentElement) to traverse the DOM and find the task's element. (we want to find <li>). Store the <li> in a parentTask variable.
    //     const parentTask = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    //     const taskId = Number(parentTask.dataset.taskId);

    //     // Get the task from the TaskManager using the taskId
    //     const task = taskManager.getTaskById(taskId);

    //     // Prepop the form fields with value from the task
    //     console.log(parentTask);
    //     let newTaskNameInput = document.querySelector('#newTaskNameInput');
    //     let newTaskDescription = document.querySelector('#newTaskDescription');
    //     let newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    //     let newTaskDueDate = document.querySelector('#newTaskDueDate');
    //     newTaskNameInput.value = task.name;
    //     newTaskDescription.value = task.description;
    //     newTaskAssignedTo.value = task.assignedTo;
    //     newTaskDueDate.value = task.dueDate;
    // }
});