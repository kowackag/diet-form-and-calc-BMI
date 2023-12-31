import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  colorBgc: string;
  colorShadowDark: string;
  colorShadowLight: string;
  colorFont: string;
  colorContrast: string;
}

const GlobalStyle = createGlobalStyle<{
  theme: GlobalProps;
}>`
    :root {
      --color-alfa: ${(props) => props.theme.colorBgc};
      --color-beta: ${(props) => props.theme.colorShadowDark};
      --color-gamma: ${(props) => props.theme.colorShadowLight};
      --color-font: ${(props) => props.theme.colorFont};
      --color-contrast:${(props) => props.theme.colorContrast};
    }

    html {
      font-size: 10px;
      height: 100%;
    }

    body {
      height: 100%;
      font-family: "Roboto", Verdana, sans-serif;
      font-size: 1.6rem;
      line-height:1.15;
    }

    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

`;
export default GlobalStyle;
