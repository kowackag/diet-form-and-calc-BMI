import styled from "styled-components";

export const StyledCheckbox = styled.div<{
  checked: boolean;
}>`
  position: relative;
  display: block;
  margin: 2.2rem 0 0.4rem;
  min-width: 5rem;
  height: 2rem;
  background: var(--color-gamma);
  border-radius: 2rem;
  box-shadow: inset 2px 2px 3px var(--color-beta),
    inset -2px -2px 3px var(--color-gamma);

  &::after {
    content: "TAK";
    color: var(--color-contrast);
    position: absolute;
    padding-right: 2px;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  &::before {
    content: "NIE";
    color: var(--color-font-light);
    position: absolute;
    padding-left: 2px;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  & label {
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: var(--color-alfa);
    border-radius: 50px;
    transition: all 0.4s ease;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 3px var(--color-beta), -2px -2px 3px var(--color-beta);
  }

  & input[type="checkbox"] {
    visibility: hidden;
  }
  & input:checked + label {
    left: 2.5rem;
  }
`;
