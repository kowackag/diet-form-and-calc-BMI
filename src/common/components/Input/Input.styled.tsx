import styled from "styled-components";

export const InputContainer = styled.div<{
  unit?: string;
  valid: boolean;
}>`
  display: flex;
  border-radius: 4px;
  box-shadow: inset 4px 4px 6px var(--color-beta),
    inset -4px -4px 6px var(--color-gamma);
  background-color: var(--color-alfa);
  font-size: 1.2rem;
  border: 2px solid;
  border-color: ${({ valid }) =>
    valid ? "transparent" : "var(--color-error)"};
  input:-webkit-autofill {
    box-shadow: inset 4px 4px 6px var(--color-beta),
      inset -10px -10px 36px var(--color-gamma);
    -webkit-text-fill-color: var(--color-font) !important;
  }
`;

export const Unit = styled.span`
  display: inline-block;
  padding: 1rem;
  color: var(--color-font-light);
`;

export const StyledInput = styled.input<{
  unit?: string;
}>`
  display: inline-block;
  padding: 1rem;
  width: 90%;
  flex-grow: 2;
  outline: none;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: transparent;
  color: var(--color-font-light);
  border-top-right-radius: ${({ unit }) => !unit && "4px"};
  border-bottom-right-radius: ${({ unit }) => !unit && "4px"};
  font-size: 1.4rem;

  &:focus {
    background-color: var(--color-gamma);
    box-shadow: inset 3px 3px 3px var(--color-beta),
      inset -3px -3px 3px var(--color-gamma);
  }
`;
