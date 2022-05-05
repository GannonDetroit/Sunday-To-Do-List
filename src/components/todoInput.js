import React, { useState } from "react";

//the input and submit of the todo app.
const TodoInput = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };
  return (
    // add the text input UI including a submit button that when clicked adds the text to the todo list.

    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitTodoHandler} type="submit">
        Submit
      </button>
      <div className="select"></div>
    </form> // feel free to delete this temporary line, but you'll want to keep the divs.
  );
};

export default TodoInput;
