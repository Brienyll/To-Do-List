var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    debugger;
    if (this.todos.length === 0) {
      console.log('Your list is empty');
     } else {
        console.log('My Todos:');
        for (var i =0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++){
     if (this.todos[i].completed === true){
       completedTodos++;
     } 
    }
    // Case 1: If everything's true make everything false
      if (completedTodos === totalTodos){
        for (var i = 0; i<totalTodos; i++){
          this.todos[i].completed = false;
        }
      } else {
        for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
        }
      }
  }
};
  
var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    view.displayTodos();
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i=0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      //todoLi.textContent = todoList.todos[i].todoText;
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeletebutton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
};

var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
  console.log(event);
});
var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
  
  //get element that was clicked
  var elementClicked = event.target;
  
  //check if elementClicked is a delete button
  if (elementClicked.className === 'deleteButton'){
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  },
  setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      
      //get element that was clicked
      var elementClicked = event.target;
      
      //check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setupEventLiseners();
