let todo1 = "Groceries";
let todo2 = "Wash the car";
let todo3 = "Make dinner";



function addTodo(todoTitle) {
  let element = document.createElement ("div");
  element.innerText = todoTitle;
  document.body.appendChild(element);
}
addTodo(todo1);
addTodo(todo2);
addTodo(todo3);



 