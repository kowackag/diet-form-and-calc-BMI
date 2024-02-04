import styled from "styled-components";

export const FlexContainer = styled.div<{
  width?: string;
  jc?: string;
  alignItems?: string;
  direction?: string;
  position?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ jc }) => jc || "space-between"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  position: ${({ position }) => position };
  width: ${({ width }) => width || "100%"};
`;