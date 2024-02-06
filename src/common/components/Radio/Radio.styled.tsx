import styled from "styled-components";

export const RadioInfo = styled.p`
  max-width: 90%;
  font-size: 1rem;
  color: var(--color-font-light);
`;

export const StyledRadio = styled.label<{
  active: boolean;
}>`
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
  position: relative;
  padding: 1rem;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 6px 6px 10px var(--color-beta), -6px -6px 8px var(--color-gamma);
  background-color: var(--color-alfa);
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
    box-shadow: 0px 0px 8px var(--color-beta);
    content: "";
    background-color: ${(props) => props.active && "var(--color-contrast)"};
    border: ${(props) => props.active && `4px solid var(--color-alfa)`};
    box-shadow: ${(props) =>
      props.active && `0px 0px 4px var(--color-contrast)`};
  }

  &:hover {
    cursor: pointer;
  }

  & input[type="radio"] {
    display: none;
  }
`;
