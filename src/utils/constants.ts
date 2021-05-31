import { ITasksData } from "../types";

export enum COLS {
  "column-1" = "column-1",
  "column-2" = "column-2",
  "column-3" = "column-3",
}

export const initialData: ITasksData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner1" },
    "task-5": { id: "task-5", content: "Cook dinner2" },
    "task-6": { id: "task-6", content: "Cook dinner3" },
    "task-7": { id: "task-7", content: "Cook dinner4" },
    "task-8": { id: "task-8", content: "Cook dinner5" },
    "task-9": { id: "task-9", content: "Cook dinner6" },
    "task-10": { id: "task-10", content: "Cook dinner46" },
    "task-11": { id: "task-11", content: "Cook dinner66" },
  },
  columns: {
    [COLS["column-1"]]: {
      id: COLS["column-1"],
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4","task-5","task-6","task-7"],
    },
    [COLS["column-2"]]: {
      id: COLS["column-2"],
      title: "In progress",
      taskIds: ["task-8","task-9","task-10"],
    },
    [COLS["column-3"]]: {
      id: COLS["column-3"],
      title: "Done",
      taskIds: ["task-11"],
    },
  },
  columnOrder: [COLS["column-1"], COLS["column-2"], COLS["column-3"]],
};

export enum DRAG_TYPES {
  TASK = "TASK",
  COLUMN = "COLUMN"
}
