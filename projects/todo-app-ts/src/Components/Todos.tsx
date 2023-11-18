import { ITodo, TodoId } from "../Types/types";
import { Todo } from "./Todo";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

export function Todos(
  { todos, removeTodo, completedTodo, setTitle }: {
    todos: ITodo[];
    removeTodo: (id: TodoId) => void;
    completedTodo: (id: TodoId, completed: boolean) => void;
    setTitle: ({ id, title }: { id: TodoId; title: string }) => void;
  },
) {
  const [isEditing, setIsEditing] = useState("");
  const [parent] = useAutoAnimate(); /* optional config */
  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id);
          }}
          className={`
          ${todo.completed ? "completed" : ""}
          ${isEditing === todo.id ? "editing" : ""}
        `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            removeTodo={removeTodo}
            completedTodo={completedTodo}
            setTitle={setTitle}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
          />
        </li>
      ))}
    </ul>
  );
}
