import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 1.6rem 2.4rem;
  min-width: 120px;
  margin: 2rem;
  border: none;
  border-radius: 4px;
  box-shadow: 6px 6px 10px rgb(var(--color-beta)),
    -4px -4px 6px rgb(var(--color-gamma));
  background-color: rgb(77 90 229);
  color: rgb(var(--color-alfa));
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    outline: none;
    background-color: rgb(50, 62, 191);
    cursor: pointer;
  }
`;
