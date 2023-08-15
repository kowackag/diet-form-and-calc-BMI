import styled, { css } from "styled-components";

const DefaultStyleSecondStage = styled.div`

  color: rgb(var(--color-font));

  & .form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const StyledSecondStage = styled(DefaultStyleSecondStage)(
  (props) => props.style
);

export default StyledSecondStage;
