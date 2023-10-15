import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 120px;
  margin: 2rem;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 6px 6px 10px rgb(var(--color-beta)),
    -4px -4px 6px rgb(var(--color-gamma));
  background-color: rgb(var(--color-alfa));
  color: var(--color-font);
  font-weight: 600;
  text-align: center;

  &:hover,
  &:focus {
    outline: none;
    background-color: rgba(var(--color-font), 0.65);
    color: rgb(var(--color-alfa));
    box-shadow: 2px 2px 4px rgba(var(--color-font), 0.4),
      -4px -4px 8px rgb(var(--color-gamma));
    cursor: pointer;
  }
`;
