/*const taskManager = new TaskManager(0);
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
const taskHtml = createTaskHtml(testName, testDescription, testAssignedTo, testDueDate);
console.log(taskHtml);
modalTaskForm.addEventListener('shown.bs.modal', function () {
    newTaskNameInput.focus();
});
const newTaskForm = document.querySelector('#newTaskForm');
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
    // https://www.w3schools.com/jsref/met_form_reset.asp
    clearFormFields();
    taskManager.render();
    //hide modal form
    $('#taskForm').modal('hide');

});

function clearFormFields() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}*/

const taskManager = new TaskManager(0);
//Finding and Displaying the Date
const dateElement = document.querySelector("#date-element");
let today = new Date();
const [day, month, year] = [today.getDate(), today.getMonth()+1, today.getFullYear()];
console.log(today);
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;


// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener("submit", (event) => {
//implement a JavaScript function named validFormFieldInput(data)

    let newTaskNameInput = document.querySelector('#newTaskNameInput');
    console.log("name:  " + newTaskNameInput.value);
    let newTaskDescription = document.querySelector('#newTaskDescription');
    console.log("description:  " + newTaskDescription.value);
    let newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    console.log("assigned to:  " + newTaskAssignedTo.value);
    let newTaskDueDate = document.querySelector('#newTaskDueDate');
    console.log("due date:  " + newTaskDueDate.value);
    let newTaskStatus = document.querySelector('#newTaskStatus');
    console.log("status:  " + newTaskStatus.value);
    let validationFail = 0;
    
     // Prevent default action
     event.preventDefault();


     // Call this to clear all the form fields after the submission
    /*const clearFormFields = () => {
      validatenewTaskNameInput.value = "";
      validatenewTaskDescription.value = "";
      validatenewTaskAssignedTo.value = "";
      validatenewTaskStatus.value = "In Progress";
      validatenewTaskDueDate.value = "";
      validateName.classList.remove("is-valid");
      validateDescription.classList.remove("is-valid");
      validateAssignedTo.classList.remove("is-valid");
      validateStatus.classList.remove("is-valid");
      validateDueDate.classList.remove("is-valid");
  };

  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);*/

// Form validation for Task Field 
    if (newTaskNameInput.value.length > 5) {
        newTaskNameInput.classList.add("is-valid");
        newTaskNameInput.classList.remove("is-invalid");
        } else {
            newTaskNameInput.classList.add("is-invalid");
            newTaskNameInput.classList.remove("is-valid");
            validationFail++;
        }

    if (newTaskDescription.value.length > 5) {
        newTaskDescription.classList.add("is-valid");
        newTaskDescription.classList.remove("is-invalid");
        } else {
            newTaskDescription.classList.add("is-invalid");
            newTaskDescription.classList.remove("is-valid");
            validationFail++;
        }
    
    if (newTaskAssignedTo.value.length > 5) {
        newTaskAssignedTo.classList.add("is-valid");
        newTaskAssignedTo.classList.remove("is-invalid");
        } else {
            newTaskAssignedTo.classList.add("is-invalid");
            newTaskAssignedTo.classList.remove("is-valid");
            validationFail++;
        }
 
    if (newTaskDueDate.value.length != 0) {
        newTaskDueDate.classList.add("is-valid");
        newTaskDueDate.classList.remove("is-invalid");
        } else {
            newTaskDueDate.classList.add("is-invalid");
            newTaskDueDate.classList.remove("is-valid");
            validationFail++;
        }
    if (newTaskStatus.value.length != 0) {
            newTaskStatus.classList.add("is-valid");
            newTaskStatus.classList.remove("is-invalid");
        } else {
            newTaskStatus.classList.add("is-invalid");
            newTaskStatus.classList.remove("is-valid");
            validationFail++;
        }

    if (validationFail > 0) {
        validationFail = 0;
        
    } else {
        // Push the valid input into our tasks array
        taskManager.addTask(
          newTaskNameInput.value,
          newTaskDescription.value,
          newTaskAssignedTo.value,
          newTaskDueDate.value,
          newTaskStatus.value,
        );
        taskManager.render();
        
        }    
   

});

/*const taskHtml = createTaskHtml("Suja", "Planning to visit Coles", "Selva", 12/08/2022);
console.log(taskHtml);
alert("hi");*/



