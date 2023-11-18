import { TodoTitle } from "../Types/types.";
import CreateTodo from "./CreateTodo";

export default function Header(
  { onAddedTodo }: { onAddedTodo: (title: TodoTitle) => void },
) {
  return (
    <header className="header">
      <CreateTodo onAddedTodo={onAddedTodo} />
    </header>
  );
}
