import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "./components";
import { Container, Flex } from "./components/UI";
import { IOnDragEnd } from "./types";
import { COLS, DRAG_TYPES, initialData, ITasksData } from "./utils/constants";
import update from "immutability-helper";

export const App = () => {
  const [tasksData, setTasksData] = useState<ITasksData>(initialData);

  const onDragEnd: IOnDragEnd = (result) => {
    const { destination, draggableId: dragId, source, type } = result;
    if (!destination || type !== DRAG_TYPES.TASK) return;
    const { index: fromIndex, droppableId: fromDropId } = source;
    const { index: toIndex, droppableId: toDropId } = destination;
    if (toIndex === fromIndex && toDropId === fromDropId) return;
    
    setTasksData((prev) => {
      const withoutDrag = update(prev, {
        columns: {
          [fromDropId]: { taskIds: { $splice: [[fromIndex, 1]] } },
        },
      });
      const newTaskData = update(withoutDrag, {
        columns: {
          [toDropId]: { taskIds: { $splice: [[toIndex, 0, dragId]] } },
        },
      });
      return newTaskData;
    });
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex>
          {tasksData.columnOrder.map((colId) => {
            const column = tasksData.columns[colId];
            const tasks = column.taskIds.map((id) => tasksData.tasks[id]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </DragDropContext>
    </Container>
  );
};
