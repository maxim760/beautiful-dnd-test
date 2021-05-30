export enum COLS {
  "column-1" = "column-1",
  "column-2" = "column-2",
  "column-3" = "column-3",
}
export type ITask = {id: string, content: string} 
export type IColumn = {id: COLS, title: string, taskIds: string[] } 
export type ITasksData = {
  tasks: {
    [key: string]: ITask
  },
  columns: {
    [key in COLS]: IColumn
  },
  columnOrder: COLS[]
}

export const initialData: ITasksData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    [COLS["column-1"]]: {
      id: COLS["column-1"],
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    [COLS["column-2"]]: {
      id: COLS["column-2"],
      title: "In progress",
      taskIds: [],
    },
    [COLS["column-3"]]: {
      id: COLS["column-3"],
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: [COLS["column-1"], COLS["column-2"], COLS["column-3"]],
};

export enum DRAG_TYPES {
  TASK = "TASK"
}
