import React from "react";

import { Droppable } from "react-beautiful-dnd";
import { IDropChildren } from "../../types";
import { DRAG_TYPES, IColumn, ITask, ITasksData } from "../../utils/constants";
import { Task } from "..";
import { ColumnWrapper, Title, TaskList } from "../UI";

interface ColumnProps {
  column: IColumn;
  tasks: ITask[];
}

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <ColumnWrapper>
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
  );
};
