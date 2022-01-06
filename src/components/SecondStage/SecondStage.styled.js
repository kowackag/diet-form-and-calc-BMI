import styled from 'styled-components';

const DefaultStyleSecondStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    & .flex-wrapper {
        display: flex;
        justify-content:space-between;
    }
    & .buttons {
        display: flex;
        justify-content:center;
        margin: 2rem;
    }
    color: var(--color-font);
    & h4 {
        font-size:1.2rem;
        margin-bottom:1.5rem;
        // text-align: center
    }
`

const StyledSecondStage = styled(DefaultStyleSecondStage)(props=>props.style)


export default StyledSecondStage