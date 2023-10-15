import styled from "styled-components";

export const Container = styled.div<{
  width?: string;
}>`
  width: ${({ width }) => width || "100%"};
`;
