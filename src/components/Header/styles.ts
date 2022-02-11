import styled from 'styled-components'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.dark};
    height: 11rem;
    width: 100vw;
`

export const Content = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: ${theme.grid.container};

    h1 {
        color: ${theme.colors.primary};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: 500;
        line-height: 2.9rem;
    }

    ul {
        display: flex;
        align-items: center;

        li {
            list-style: none;
            padding: 0 ${theme.spacings.xsmall};

            a {
                color: ${theme.colors.grayLight};
                font-weight: 500;
                font-size: ${theme.font.sizes.large};
                line-height: 22px;
                text-decoration: none;

                padding: ${theme.spacings.xsmall};
            }
        }

        & li:last-child {
            padding-right: 0;
        }
    }
`
