import styled from "styled-components";

export const StyledBmiBox = styled.section`
  color: ${(props) => props.theme.colorContrast};
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
