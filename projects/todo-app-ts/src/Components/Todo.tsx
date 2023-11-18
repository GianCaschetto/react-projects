import { TodoId, TodoTitle } from "../Types/types.";
import { useEffect, useRef, useState } from "react";
export function Todo(
  {
    id,
    title,
    completed,
    removeTodo,
    completedTodo,
    setTitle,
    isEditing,
    setIsEditing,
  }: {
    id: TodoId;
    title: TodoTitle;
    completed: boolean;
    removeTodo: (id: TodoId) => void;
    completedTodo: (id: TodoId, completed: boolean) => void;
    setTitle: ({ id, title }: { id: TodoId; title: string }) => void;
    isEditing: string;
    setIsEditing: (id: string) => void;
  },
) {
  const [editedTitle, setEditedTitle] = useState(title);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setEditedTitle(editedTitle.trim());

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle });
      }

      if (editedTitle === "") removeTodo(id);

      setIsEditing("");
    }

    if (e.key === "Escape") {
      setEditedTitle(title);
      setIsEditing("");
    }
  };

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  return (
    <>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={(event) => {
            completedTodo(id, event?.target.checked);
          }}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => removeTodo(id)} />
      </div>
      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing("");
        }}
        ref={inputEditTitle}
      />
    </>
  );
}
