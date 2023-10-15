import styled from "styled-components";

export const StyledProgressBar = styled.div<{
  progress: number;
}>`
  display: inline-block;
  width: 100%;
  height: 1rem;
  background-color: rgb(var(--color-alfa));
  border-radius: 50px;
  box-shadow: 6px 6px 10px rgb(var(--color-beta)),
    -4px -4px 6px rgb(var(--color-gamma));
  line-height: 1rem;

  & span {
    border-radius: 50px;
    width: ${(props) => props.progress}%;
    background-color: rgba(var(--color-contrast), 0.8);
    display: inline-block;
    height: 100%;
  }
`;
