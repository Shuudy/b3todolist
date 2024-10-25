// Stockage des tâches
let todos = [];

// Afficher la liste des tâches
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
        ${todo.task} 
  <button onclick="editTodo(${todo.id})">Edit</button>
  <button onclick="deleteTodo(${todo.id})">Delete</button>
      `;
        todoList.appendChild(li);
    });
}