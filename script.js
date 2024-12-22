const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;  // Do nothing if the input is empty

  // Create the new task item
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    ${taskText} 
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(taskItem);

  // Add event listener for delete button
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.remove();
  });

  // Add event listener for marking task as completed
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Clear input after adding task
  taskInput.value = '';
}

// Add task when "Add Task" button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task when Enter key is pressed in input field
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
