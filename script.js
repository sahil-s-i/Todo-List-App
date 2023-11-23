const todoList = document.getElementById("todoList");
const submit = document.getElementById("submit");
const deleteBtn = document.getElementById("deleteBtn");

// Event listener for adding a new todo
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const titlec = title.value;
    const descc = desc.value;
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    const newTodo = {
        title: titlec,
        desc: descc,
        completed: false,
        date: new Date().toLocaleString(),
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    // Render the todos
    renderTodos();

    title.value = "";
    desc.value = "";
});

// Event listener for deleting all todos
deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todos");
    todoList.innerHTML = "";
});

//     todoList.innerHTML;

// Function to render the todos
function renderTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const todoCard = document.createElement("div");
        todoCard.setAttribute("class", "todolist");
        todoCard.innerHTML = `
            <h1 class="todo_head">${index + 1} : ${todo.title}</h1>
            <p class="todo_desc">${todo.desc}</p>
            <p class="todo_date">Date: ${todo.date}</p>
            <button onclick="deleteTodo(${index})" class="btn btn-danger" id="dlt_btn">Delete</button>
        `;
        todoList.appendChild(todoCard);
    });
}

// Function to mark a todo as completed
function completeTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos[index].completed = true;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Initial rendering of todos
renderTodos();
