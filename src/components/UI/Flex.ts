import styled from "styled-components";

type Props = {
  isDraggingOver?: boolean
}

export const Flex = styled.div<Props>`
  display: flex;
  background-color: ${({isDraggingOver = false}) => isDraggingOver ? "lightblue" : "white"};
`;
