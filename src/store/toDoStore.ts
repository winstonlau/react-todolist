import { create } from "zustand";

type Store = {
    todos: any
    addTodo: () => void
    removeTodo: () => any
}
const useToDoStore = create<Store>(set => ({
    todos: [],
    addTodo: (text) => set((state)) => ({todos: [...state.todos, {text, completed:false, id: Date.now()}]}), 
    removeTodo: (text) => set((state)) => ({todos: [...state.todos, {text, completed:false, id: Date.now()}]}), 
}))