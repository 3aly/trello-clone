// types.ts
export interface Task {
  title: string;
  description: string;
  status: "Not Started" | "In Progress" | "Finished";
}

export interface Board {
  name: string;
  tasks: Task[];
}

export interface AppState {
  boards: Board[];
}
