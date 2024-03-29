import styled from "styled-components";

export const StyledSearch = styled.div<{
  valid: boolean;
}>`
  font-size: 1.2rem;
  position: relative;
  border: 2px solid;
  border-radius: 4px;
  border-color: ${({ valid }) =>
    valid ? "transparent" : "var(--color-error)"};
`;

export const SearchInput = styled.select`
  position: relative;
  display: inline-block;
  padding: 1rem 1rem;
  width: 100%;
  flex-grow: 2;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--color-font-light);
  font-size: 1.4rem;
  border-radius: 4px;
  box-shadow: inset 4px 4px 6px var(--color-beta),
    inset -4px -4px 6px var(--color-gamma);
  background-color: var(--color-alfa);
  cursor: context-menu;
`;

export const Label = styled.label`
  &::after,
  &::before {
    content: "\/";
    font-weight: bold;
    position: absolute;
    display: block;
    content: "";
    border: 25px solid transparent; /*Adjust chevron size*/
  }
`;

export const ListItem = styled.option<{
  value: string;
}>`
  display: inline-block;
  padding: 2rem;
  border-bottom: 1px solid var(--color-beta);
  cursor: pointer;
`;

export const List = styled.ul<{
  active: boolean;
}>`
  margin: 0.2rem 0;
  display: ${({ active }) => !active && "none"};
  position: absolute;
  list-style: none;
  width: 100%;
  z-index: 3;
  background-color: var(--color-alfa);
  box-shadow: 3px 3px 3px var(--color-beta),
    inset -3px -3px 3px var(--color-gamma);
`;
