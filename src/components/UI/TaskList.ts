import styled from "styled-components";

type Props = {
  isDraggingOver: boolean
}

export const TaskList = styled.div<Props>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${({isDraggingOver}) => isDraggingOver ? 'skyblue' : 'white'};
  flex-grow: 1;
  min-height: 100px;
`
