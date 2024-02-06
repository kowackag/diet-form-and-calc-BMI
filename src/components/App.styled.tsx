import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 40px;
  color: var(--color-font);

  @media (min-width: 768px) {
    max-width: 748px;
    width: 90%;
    box-shadow: 8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
    background-color: var(--color-alfa);
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: var(--color-contrast);
`;
