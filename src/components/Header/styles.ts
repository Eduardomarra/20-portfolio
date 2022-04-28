import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.dark};
        animation: ${header} 1s forwards;
    `}
`

export const Content = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: ${theme.grid.container};
        position: relative;
        height: 9rem;
        transition: all 0.3s;
        margin: 0 1rem;

        @media screen and (min-width: 760px) {
            .desktop {
                display: flex;
            }
            .mobile {
                display: none;
            }
        }

        @media screen and (max-width: 759px) {
            .desktop {
                display: none;
            }
            .mobile {
                display: block;
            }
        }
    `}
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
