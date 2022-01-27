const taskManager = new TaskManager();
// console.log(taskManager.tasks);
// taskManager.addTask('test', 'test', 'test', 'test', 'test');
console.log(taskManager.tasks);

const newTaskForm = document.querySelector('#newTaskForm');
const dateElement = document.querySelector('#currentDate');
const modalTaskForm = document.getElementById('taskForm');
var currentDate = new Date();
console.log(currentDate);
// var date = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate();
var date = currentDate.toLocaleDateString();
// console.log(currentDate);
// map current date value to span DOM
document.getElementById('currentDate').innerHTML = date;

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

    //add new task using Task Manager
    taskManager.addTask('test', 'test', 'test', 'test', 'test');
    console.log(taskManager.tasks);
    //reset form value

    //hide modal form
    $('#taskForm').modal('hide');
});

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