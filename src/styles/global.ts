import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }
        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
        }
        button {
            cursor: pointer;
            background: none;
            border: none;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }
    `}
`
export default GlobalStyles
