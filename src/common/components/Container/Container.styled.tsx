import styled from "styled-components";

export const Container = styled.div<{
  width?: string;
  position?: string;
}>`
  width: ${({ width }) => width || "100%"};
  position: ${({ position }) => position};

  /* @media screen {
    width: 50%;
  } */
`;
