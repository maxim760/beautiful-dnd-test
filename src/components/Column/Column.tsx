import React from "react";

import { Draggable, Droppable } from "react-beautiful-dnd";
import { IColumn, IDropChildren, ITask } from "../../types";
import { DRAG_TYPES } from "../../utils/constants";
import { Task } from "..";
import { ColumnWrapper, Title, TaskList } from "../UI";

interface ColumnProps {
  column: IColumn;
  tasks: ITask[];
  index: number;
}

export const Column: React.FC<ColumnProps> = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <ColumnWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>{column.title}</Title>
          <Droppable droppableId={column.id} type={DRAG_TYPES.TASK}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, i) => (
                  <Task key={task.id} task={task} index={i} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </ColumnWrapper>
      )}
    </Draggable>
  );
};
