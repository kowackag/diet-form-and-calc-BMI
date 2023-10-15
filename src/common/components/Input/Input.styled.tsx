import styled from "styled-components";

export const InputContainer = styled.div<{
  unit?: string;
}>`
  display: flex;
  border-radius: 0.8rem;
  box-shadow: inset 4px 4px 6px rgb(var(--color-beta)),
    inset -4px -4px 6px rgb(var(--color-gamma));
  background-color: rgb(var(--color-alfa));
  font-size: 1.2rem;

  input:-webkit-autofill {
    box-shadow: inset 4px 4px 6px rgb(var(--color-beta)),
      inset -10px -10px 36px rgb(var(--color-gamma));
    -webkit-text-fill-color: rgb(var(--color-font)) !important;
  }
`;

export const Unit = styled.span`
  display: inline-block;
  padding: 1rem 1rem;
  color: rgba(var(--color-font), 0.8);
`;

export const StyledInput = styled.input<{
  unit: string;
}>`
  display: inline-block;
  padding: 1rem 1rem;
  width: 90%;
  flex-grow: 2;
  outline: none;
  border: none;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  background-color: transparent;
  color: rgba(var(--color-font), 0.8);
  border-top-right-radius: ${({ unit }) => !unit && ".8rem"};
  border-bottom-right-radius: ${({ unit }) => !unit && ".8rem"};
  font-size: 1.4rem;

  &:focus {
    background-color: rgb(var(--color-gamma));
    box-shadow: inset 3px 3px 3px rgb(var(--color-beta)),
      inset -3px -3px 3px rgb(var(--color-gamma));
  }
`;
