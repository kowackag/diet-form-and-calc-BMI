import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 35px;
  box-shadow: 8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
  background-color: rgb(var(--color-alfa));
  color: rgb(var(--color-font));

  @media (min-width: 768px) {
    max-width: 748px;
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: rgb(var(--color-contrast));
`;
