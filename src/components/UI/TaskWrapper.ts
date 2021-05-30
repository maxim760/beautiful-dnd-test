import styled from "styled-components";

type Props = {
  isDragging: boolean;
};

export const TaskWrapper = styled.div<Props>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;
