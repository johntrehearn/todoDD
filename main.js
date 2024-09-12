const __form = document.getElementById('form');
const __btnAdd = document.getElementById('btn-add');
const __newTask = document.getElementById('newtask');
const __todosList = document.getElementById('todos');

const __todosJson = JSON.parse(localStorage.getItem('todos_items'));

if (__todosJson) {
    __todosJson.forEach(todo => {
        addTask(todo);
    });
}

document.body.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key == 'Enter') {
        addTask();
    }
});

__btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});

function addTask(todo) {
    console.log("TASK IS ADDED");
    let todoText = __newTask.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const element = document.createElement('li');
        const span = document.createElement('span');
        const buttonUpdate = document.createElement('button');
        const buttonDelete = document.createElement('button');

        if (todo && todo.completed) {
            element.classList.add('completed');
        }

        span.innerText = todoText;

        element.appendChild(span);

        buttonDelete.innerHTML = '<em class="fa fa-trash"></em>';
        buttonDelete.className = 'btn btn-lg btn-danger';

        buttonDelete.addEventListener('click', () => {
            element.remove();
            update();
        });

        element.appendChild(buttonDelete);

        buttonUpdate.innerHTML = '<em class="fa fa-check"></em>';
        buttonUpdate.className = 'btn btn-lg btn-primary';

        buttonUpdate.addEventListener('click', () => {
            element.classList.toggle('completed');
            update();
        });

        element.appendChild(buttonUpdate);

        __todosList.appendChild(element);

        __newTask.value = '';

        update();
    }

    function update() {
        const __elements = document.querySelectorAll('li');

        const __todos = [];

        __elements.forEach(element => {
            __todos.push({
                text: element.querySelector('span').innerText,
                completed: element.classList.contains('completed')
            });
        });

        localStorage.setItem('todos_items', JSON.stringify(__todos));
    }
}