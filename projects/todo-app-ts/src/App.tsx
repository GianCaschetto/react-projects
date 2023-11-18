import { useState } from "react";
import { Todos } from "./Components/Todos";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { FilterValue, ITodo, TodoId, TodoTitle } from "./Types/types.";
import FooterPage from "./Components/FooterPage";

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filterSelected, setFilterSelected] = useState<
    FilterValue
  >("all");

  const handleRemove = (id: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: TodoId, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: string) => {
    setFilterSelected(filter);
  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo: ITodo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleSave = (title: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleUpdateTitle = (
    { id, title }: { id: string; title: string },
  ): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <>
      <div className="todoapp">
        <h1>Gian Todo App</h1>
        <Header onAddedTodo={handleSave} />
        <Todos
          todos={todos}
          removeTodo={handleRemove}
          setTitle={handleUpdateTitle}
          completedTodo={handleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          clearCompleted={handleRemoveCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <FooterPage />
    </>
  );
}

export default App;
