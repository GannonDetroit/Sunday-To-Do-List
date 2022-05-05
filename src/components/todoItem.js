import React from "react";

// an item in the todo list of the app.
const TodoItem = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  return (
    // display the text of the todo

    // a button that when clicked deletes the todo from the todo list.

    <div>
      <li>{text}</li>
      <button onClick={deleteHandler}>Delete</button>

      {/* // feel free to delete this temporary line, but you'll want
     //to keep the divs. */}
    </div>
  );
};

export default TodoItem;
