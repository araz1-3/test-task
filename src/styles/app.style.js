import {createGlobalStyle} from "styled-components";
import danaVF from "assets/fonts/dana/DanaVF.woff";
import danaRegular from "assets/fonts/dana/Dana-Regular.woff";
import danaRegular2 from "assets/fonts/dana/Dana-Regular.woff2";
import danaBold from "assets/fonts/dana/Dana-Bold.woff";
import danaBold2 from "assets/fonts/dana/Dana-Bold.woff2";
import danaVF2 from "assets/fonts/dana/DanaVF.woff2";


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'dana VF';
        src: url(${danaVF}) format('woff-variations'),
        url(${danaVF2}) format('woff2-variations'),
        /* will be the standard and works in Safari now */
        url(${danaVF}) format('woff');
        /* for the other supporting browsers */
        font-display: fallback;
    }
    @font-face {
        font-family: dana;
        src: url(${danaRegular}) format('woff'), url(${danaRegular2}) format('woff2');
    }
    @font-face {
            font-family: dana;
            src: url(${danaBold}) format('woff'), url(${danaBold2}) format('woff2');
            font-weight: 700;
    }


    body {
        padding:0;
        margin:0;
        font-size: .875em;
        font-family: dana, tahoma, sans-serif;
        color: #131313;
        .ant-message-info{
            display: flex;
            align-items: center;
        }
    }
    h1{
        font-size: 1.7em;
        font-weight: 500;
        font-variation-settings: "wght" 600;
    }
    h2{
        font-size: 1.5em;
        font-weight: 500;
        font-variation-settings: "wght" 600;
    }
    h3{
        font-size: 1.3em;
        font-weight: 600;
        font-variation-settings: "wght" 600;
    }
    h4{
        font-size: 1.1em;
        font-weight: 500;
        font-variation-settings: "wght" 600;
    }
    h5{
        font-size: 0.8em;
        font-weight: 500;
        font-variation-settings: "wght" 500;
    }
    h6{
        font-size: 0.7em;
        font-weight: 500;
        font-variation-settings: "wght" 500;
    }
    p, h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
    
    @supports (font-variation-settings: normal) {
        body {
          font-family: 'dana VF', tahoma, sans-serif;
        }
    }
`
export default GlobalStyle