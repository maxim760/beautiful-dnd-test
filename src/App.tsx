import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Column } from "./components";
import { Container, Flex } from "./components/UI";
import { IDropData, IOnDragEnd, ITasksData } from "./types";
import { COLS, DRAG_TYPES, initialData } from "./utils/constants";
import update from "immutability-helper";

type IChangeFn = (arg: { dropData: IDropData; dragId: string }) => void;

export const App = () => {
  const [tasksData, setTasksData] = useState<ITasksData>(initialData);

  const changeTasks: IChangeFn = ({ dropData, dragId }) => {
    const { toIndex, toDropId, fromDropId, fromIndex } = dropData;
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

  const changeColumns: IChangeFn = ({ dropData, dragId }) => {
    const {toIndex, fromIndex} = dropData
    setTasksData((prev) => {
      const withoutDrag = update(prev, {
        columnOrder: {$splice: [[fromIndex, 1]]}
      })
      const newTaskData = update(withoutDrag, {
        columnOrder: {$splice: [[toIndex, 0, dragId as COLS]]}
      })
      return newTaskData
    })
  }

  const onDragEnd: IOnDragEnd = (result) => {
    const { destination, draggableId: dragId, source, type } = result;
    if (!destination) return;
    const { index: fromIndex, droppableId: fromDropId } = source;
    const { index: toIndex, droppableId: toDropId } = destination;
    const dropData = { fromIndex, toIndex, fromDropId, toDropId };
    if (toIndex === fromIndex && toDropId === fromDropId) return;
    if (type === DRAG_TYPES.TASK) {
      changeTasks({ dropData, dragId });
      return;
    }
    if (type === DRAG_TYPES.COLUMN) {
      changeColumns({ dropData, dragId });
      return
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ALL_COLUMN" type={DRAG_TYPES.COLUMN} direction="horizontal">
          {(provided, snapshot) => (
            <Flex
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasksData.columnOrder.map((colId, i) => {
                const column = tasksData.columns[colId];
                const tasks = column.taskIds.map((id) => tasksData.tasks[id]);
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={i}
                  />
                );
              })}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};
