const newTaskForm = document.querySelector('#newTaskForm');
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');

function validFormFieldInput(name, description, assignedto, duedate) {
    if(name.value.length <= 5) {
        return false;
        alert("Name is not valid");
    } else if(description.value.length <= 5) {
        return false;
        alert("Description is not valid")
    } else if(assignedto.value.length <= 5) {
        return false;
        alert("Assigned to is not valid")
    } else if(duedate < today) {
        return false;
        alert("Due date is not valid")
    } else if(status.value.length == 0){
        return false;
        alert("Status is not valid")
    }else {
        return true;
    }}