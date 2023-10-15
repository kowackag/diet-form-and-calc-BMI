import styled from "styled-components";

export const RadioInfo = styled.p`
  max-width: 90%;
  font-size: 1rem;
  color: rgba(var(--color-font), 0.5);
`;

export const StyledRadio = styled.label<{
  active: boolean;
}>`
  display: inline-block;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  padding: 1rem 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
  box-shadow: 6px 6px 10px rgb(var(--color-beta)),
    -6px -6px 8px rgb(var(--color-gamma));
  background-color: rgb(var(--color-alfa));
  color: var(--color-font);
  font-size: 1.4rem;

  &::after {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 6%;
    transform: translateY(-50%);
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgb(var(--color-beta));
    content: "";
    background-color: ${(props) =>
      props.active && "rgb(var(--color-contrast))"};
    border: ${(props) => props.active && `4px solid rgb(var(--color-alfa))`};
    box-shadow: ${(props) =>
      props.active && `0px 0px 4px rgb(var(--color-contrast))`};
  }

  &:hover {
    cursor: pointer;
  }

  & input[type="radio"] {
    display: none;
  }
`;

