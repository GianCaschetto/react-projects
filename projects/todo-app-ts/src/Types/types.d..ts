export interface ITodo { id: string; title: string; completed: boolean };

export interface TodoProps extends ITodo {
    removeTodo: (id: TodoId) => void;
    completedTodo: (id: TodoId) => void;
}

export type FilterValue = 'all' | 'active' | 'completed';
 
export type TodoId = Pick<ITodo, 'id'>;
export type TodoTitle = Pick<ITodo, 'title'>;
export type TodoCompleted = Pick<ITodo, 'completed'>;

