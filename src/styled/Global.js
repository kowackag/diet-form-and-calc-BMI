import {createGlobalStyle} from 'styled-components';
import robotoRegularWoff from "./../fonts/roboto-regular-webfont.woff";
import robotoRegularWoff2 from "./../fonts/roboto-regular-webfont.woff2";
import robotoBoldWoff from "./../fonts/roboto-bold-webfont.woff";
import robotoBoldWoff2 from "./../fonts/roboto-bold-webfont.woff2";
import robotoItalicWoff2 from "./../fonts/roboto-italic-webfont.woff2";
import robotoItalicWoff from "./../fonts/roboto-italic-webfont.woff";

const GlobbalStyle = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 700;
        src:
        url(${robotoBoldWoff2}) format('woff2'),
        url(${robotoBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        src:
        url(${robotoItalicWoff2}) format('woff2'),
        url(${robotoItalicWoff}) format('woff');
    }

    html {
        font-size: 11px;
    }

    body {
        font-family: Roboto, Verdana, sans-serif;
        font-size: 1.6rem;
        line-height:1.5;
    }

`

export default GlobbalStyle;