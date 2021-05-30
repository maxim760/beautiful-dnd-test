import { ReactElement } from "react";
import {
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

export type IOnDragEnd = (
  result: DropResult,
  provided: ResponderProvided
) => void;
export type IDropChildren = (
  provided: DroppableProvided,
  snapshot: DroppableStateSnapshot
) => ReactElement<HTMLElement>;
