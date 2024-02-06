import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  colorBgc: string;
  colorShadowDark: string;
  colorShadowLight: string;
  colorFont: string;
  colorFontLight: string;
  colorContrast: string;
  colorError: string;
}

const GlobalStyle = createGlobalStyle<{
  theme: GlobalProps;
}>`
    :root {
      --color-alfa: ${(props) => props.theme.colorBgc};
      --color-beta: ${(props) => props.theme.colorShadowDark};
      --color-gamma: ${(props) => props.theme.colorShadowLight};
      --color-font: ${(props) => props.theme.colorFont};
      --color-font-light: ${(props) => props.theme.colorFontLight};
      --color-contrast:${(props) => props.theme.colorContrast};
      --color-error:${(props) => props.theme.colorError};
    }

    html {
      font-size: 10px;
      height: 100%;
    }

    body {
      height: 100%;
      font-family: "Roboto", Verdana, sans-serif;
    }

    #root {     
      min-height: 100%;
      font-size: 1.6rem;
      line-height:1.15;

      @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
`;
export default GlobalStyle;
