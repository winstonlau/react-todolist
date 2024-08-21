import { create } from "zustand";
import { uid } from "react-uid";

export interface Todo {
  text: string;
  id: string;
  isCompleted: boolean;
}
export interface ToDoState {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (todoID: string) => void;
  completeTodo: (todoID: string) => void;
}

export const useStore = create<ToDoState>()((set) => ({
  todos: [],
  addTodo: (todoText: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
          id: uid(`${todoText}-${state.todos.length}`),
          isCompleted: false,
        },
      ],
    })),
  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  completeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: true,
          };
        }

        return todo;
      }),
    })),
}));
