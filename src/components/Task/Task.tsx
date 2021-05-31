import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../../types";
import { TaskWrapper } from "../UI";

interface TaskProps {
  task: ITask;
  index: number;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index} >
      {(provided, snapshot) => (
        <TaskWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskWrapper>
      )}
    </Draggable>
  );
};
