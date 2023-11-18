import { useState } from "react";

interface Props {
  onAddedTodo: (title: string) => void;
}

export default function CreateTodo({ onAddedTodo }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length > 0) {
      onAddedTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What have to be done?"
        autoFocus
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </form>
  );
}
