import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.dark};
        height: calc(100vh - 11rem);
        max-width: 100vw;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        overflow: hidden;

        @media screen and (max-width: 820px) {
            height: auto;
            padding: ${theme.spacings.xxlarge} 0;
        }
    `}
`

export const Content = styled.main`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 820px) {
            width: 700px;
            flex-direction: column;
        }
    `}
`

export const About = styled.div`
    ${({ theme }) => css`
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
    `}
`

export const ButtonWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacings.medium};
        margin-top: ${theme.spacings.xxlarge};
    `}
`

const Animatevetor = keyframes`
    0%{transform: rotate(0) scale(1);}
    100%{transform: translateX(-20rem) scale(1.5);}
`

export const Vetor = styled.div`
    position: absolute;
    right: 0;

    transition: animation 5s;

    @media screen and (max-width: 820px) {
        display: none;
    }

    &:hover {
        animation: ${Animatevetor} 0.5s ease-in forwards;

        @media screen and (max-width: 820px) {
            animation: none;
        }
    }

    img {
        height: 95%;
    }
`
