// get the tasks list element
const tasksList = document.getElementById('tasks-list');

// get the add task button element
const addTaskBtn = document.getElementById('add-task-btn');

// get the add task modal element
const addTaskModal = document.getElementById('add-task-modal');

// get the close button element
const closeButton = document.querySelector('.close');

// get the add task form element
const addTaskForm = document.getElementById('add-task-form');

// add event listener to the add task button
addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'block';
});

// add event listener to the close button
closeButton.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
});

// add event listener to the add task form
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    if (taskTitle && taskDescription) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${taskTitle}</strong>: ${taskDescription}`;
        tasksList.appendChild(li);
        document.getElementById('task-title').value = '';
        document.getElementById('task-description').value = '';
        addTaskModal.style.display = 'none';
    }
});


