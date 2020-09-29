//Selectors (to copy a line:shift+alt+downArrow)
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//const filterOption = document.querySelector('.filter-todo');

//Event Listeners
  //addclick event to button element: so when I click on this button function addToDo will happen
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//filterOption.addEventListener('click', filterTodo); 


//Functions
  //create the function to add items to list
function addTodo(event){
    //Prevent form from submitting
  event.preventDefault();
    // To Do div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
    //Create list
  const newTodo =document.createElement('li');
  newTodo.innerText= todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
    //Add todo to local storage 
  saveLocalTodos(todoInput.value);


    //Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
    //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todoinput value
  todoInput.value="";
}

  //function to delete a list item
function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if(item.classList[0]=== 'trash-btn'){
    const todo = item.parentElement;
    //Animation items 'falls' away
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
    
  }
  //Check mark
  if(item.classList[0]==='complete-btn'){
    const todo =item.parentElement;
    todo.classList.toggle('completed');
  }
}


function saveLocalTodos(todo){
  //Do I already have todos in there?
  let todos;
  if (localStorage.getItem('todos')=== null) {
    //if I don't have todos yet, will create empty array
    todos = [];
  } else {
    //if we already have todos we will get hem from th localstorage
    todos = JSON.parse(localStorage.getItem('todos'));
    //this will push a new todo in the array
  todos.push(todo);
  //and this will add the array to the local storage
  localStorage.setItem("todos", JSON.stringify(todos));
  }
}

