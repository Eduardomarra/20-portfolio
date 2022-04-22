import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 5;
        top: 0;
        right: 0;
        left: 0;
        background: ${theme.colors.dark};
        animation: ${header} 1s forwards;
    `}
`

export const Content = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: ${theme.grid.container};
        position: relative;
        height: 9rem;
        transition: all 0.3s;
        margin: 0 calc(${theme.spacings.xsmall} / 2);

        .menu {
        }
        @media screen and (min-width: 760px) {
            .desktop {
                display: flex;
            }
            .mobile {
                display: none;
            }
        }

        @media screen and (max-width: 759px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .desktop {
                display: none;
            }
            .mobile {
                display: block;
            }
        }

        @media screen and (max-width: 500px) {
            width: 95vw;
        }

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

            @media screen and (max-width: 759px) {
                content: none;
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
const header = keyframes`
    from {
        opacity: 0;
        top: -50rem;
    }
    to {
        opacity: 1;
        top: 0;
    }
`
