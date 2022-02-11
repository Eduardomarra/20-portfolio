import styled from 'styled-components'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
    background: ${theme.colors.dark};
    height: calc(100vh - 11rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Main = styled.main`
    width: ${theme.grid.container};
    margin: 0 auto;

    span {
        color: ${theme.colors.light};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: 600;
        line-height: 2.9rem;
        text-transform: uppercase;
    }

    h1 {
        color: ${theme.colors.primary};
        font-weight: 600;
        font-size: ${theme.font.sizes.huge};
        line-height: 7.7rem;
        text-transform: uppercase;
        padding: ${theme.spacings.small} 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        margin-top: ${theme.spacings.xxlarge};

        a {
            p {
                color: ${theme.colors.light};
                text-decoration: none;
                line-height: 1.9rem;
                text-align: center;
                display: inline-block;
            }

            background: transparent;

            border-radius: 10px;
            border: 2px solid;
            border-image: ${theme.gradientColors.pink} 1;

            margin: 0 ${theme.spacings.small};
            padding: ${theme.spacings.xsmall} ${theme.spacings.small};

            transition: transform 0.5s;

            :nth-child(1) {
                border-image: ${theme.gradientColors.purple} 1;
            }

            :hover {
                transform: scale(1.2);
            }

            img {
                margin-right: ${theme.spacings.xsmall};
            }
        }
    }
`
