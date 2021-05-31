import { ReactElement } from "react";
import {
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { COLS } from "./utils/constants";

export type IOnDragEnd = (
  result: DropResult,
  provided: ResponderProvided
) => void;
export type IDropChildren = (
  provided: DroppableProvided,
  snapshot: DroppableStateSnapshot
) => ReactElement<HTMLElement>;

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
export type IDropData = {
  fromIndex: number;
  toIndex: number;
  fromDropId: string;
  toDropId: string;
}