import styled from "styled-components";

export const StyledSearch = styled.div`
  font-size: 1.2rem;
  position: relative;
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
  color: rgb(var(--color-font));
  color: rgba(var(--color-font), 0.8);
  font-size: 1.4rem;
  border-radius: 4px;
  box-shadow: inset 4px 4px 6px rgb(var(--color-beta)),
    inset -4px -4px 6px rgb(var(--color-gamma));
  background-color: rgb(var(--color-alfa));
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
  border-bottom: 1px solid rgb(var(--color-beta));
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
  background-color: rgb(var(--color-alfa));
  box-shadow: 3px 3px 3px rgb(var(--color-beta)),
    inset -3px -3px 3px rgb(var(--color-gamma));
`;
