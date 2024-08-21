import React from "react";
import { useStore } from "./ToDoStore";

export default function TodoList() {
  const [todoValue, setTodoValue] = React.useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useStore(
    (state) => state
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add To Do</label>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "unset",
                }}
              >
                {todo.text}{" "}
              </span>
              {!todo.isCompleted ? (
                <button onClick={() => completeTodo(todo.id)}>Done</button>
              ) : null}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
