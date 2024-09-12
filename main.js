const __form = document.getElementById('form');
const __btnAdd = document.getElementById('btn-add');
const __newTask = document.getElementById('newtask');
const __todosList = document.getElementById('todos');

const __todosJson = JSON.parse(localStorage.getItem('todos_items'));

if(__todosJson){
    __todosJson.forEach(todo => {
        addTask(todo);
    });
}

document.body.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.key == 'Enter'){
        addTask();
    }
});


__btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});


function addTask(todo){
    console.log("TASK IS ADDED")
    let todoText = __newTask.value;

   if(todo){
       todoText = todo.text;
    }

    if(todoText){
        const element = document.createElement('li');

        if (todo && todo.completed){
            element.classList.add('completed');
        }
     
    }

}