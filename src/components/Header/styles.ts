import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        background: ${theme.colors.dark};
    `}
`

export const Content = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: ${theme.grid.container};
        position: relative;
        height: 11rem;

        & ::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: ${theme.colors.darken};
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            animation: ${animationLine} 1s forwards;
        }

        div {
            a {
                color: ${theme.colors.primary};
                font-size: ${theme.font.sizes.xlarge};
                font-weight: 500;
                line-height: 2.9rem;
                cursor: pointer;
            }
        }

        nav {
            ul {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(${theme.spacings.medium}*2);

                li {
                    a {
                        color: ${theme.colors.grayLight};
                        font-weight: 500;
                        font-size: ${theme.font.sizes.large};
                        line-height: 22px;

                        transition: 0.5s;

                        :hover {
                            color: ${theme.colors.primary};
                        }
                    }
                }
            }
        }
    `}
`

const animationLine = keyframes`
    from {
        width: 0%;
        background-color: #00D2DF;
    }
    to {
        width: 100%;
        background-color: #151515;
    }
`
