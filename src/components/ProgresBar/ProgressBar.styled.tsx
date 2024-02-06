import styled from "styled-components";

export const StyledProgressBar = styled.div<{
  progress: number;
}>`
  display: inline-block;
  width: 100%;
  height: 1rem;
  background-color: var(--color-alfa);
  border-radius: 50px;
  box-shadow: 6px 6px 10px var(--color-beta), -4px -4px 6px var(--color-gamma);
  line-height: 1rem;

  & span {
    border-radius: 50px;
    display: inline-block;
    width: ${(props) => props.progress}%;
    height: 100%;
    background-color: var(--color-contrast);
  }
`;
