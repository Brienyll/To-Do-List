var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your list is empty');
     } else {
        console.log('My Todos:');
        for (var i =0; i < this.todos.length; i++) {
          console.log(this.todos[i].todoText);
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
