export interface TaskType {
  title: string;
  description: string;
  status: "Not Started" | "In Progress" | "Finished";
}

export type EditTaskProps = {
  open: boolean;
  setOpen: Function;
  taskIndex: number;
  taskStatus: string;
};
export interface Board {
  name: string;
  tasks: TaskType[];
}

export interface AppState {
  boards: Board[];
}

export type TaskProps = {
  task: {
    title: string;
    description: string;
    status: StatusTypes;
  };
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
};
export type StatusTypes = "Not Started" | "In Progress" | "Finished";
