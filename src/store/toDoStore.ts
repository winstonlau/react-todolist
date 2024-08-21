import { create } from "zustand";

export type TodoItem = {
    id: number,
    task: string,
    completed: boolean
}

export interface ToDoItemState{
    items: TodoItem[];
    addItem(item: TodoItem): void;
    removeItem(item: TodoItem): void;
}

const useToDoStore = create<ToDoItemState>((set)=> ({ 
    items: [],
    addItem(item: TodoItem)

})
    items: [],

)