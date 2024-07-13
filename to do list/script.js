function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.onchange = function() {
        li.classList.toggle('completed');
    };

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

async function fetchTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const tasks = await response.json();

    tasks.forEach(task => {
        addFetchedTask(task.title, task.completed);
    });
}

function addFetchedTask(taskText, completed) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = completed;
    checkbox.onchange = function() {
        li.classList.toggle('completed');
    };

    if (completed) {
        li.classList.add('completed');
    }

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
