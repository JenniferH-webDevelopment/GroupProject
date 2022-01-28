const taskManager = new TaskManager(0);
// taskManager.addTask('test', 'test', 'test', 'test', 'test');
// console.log(taskManager.tasks);

const newTaskForm = document.querySelector('#newTaskForm');
const dateElement = document.querySelector("#date-element");
const modalTaskForm = document.getElementById('taskForm');
let today = new Date();
const [day, month, year] = [today.getDate(), today.getMonth()+1, today.getFullYear()];
console.log(today);
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;

modalTaskForm.addEventListener('shown.bs.modal', function () {
    newTaskNameInput.focus();
});

newTaskForm.addEventListener('submit', (event) => {
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
    this.clearFormFields();

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