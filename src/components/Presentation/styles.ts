import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.dark};
        height: 100vh;
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
        animation: ${about} 1s forwards;
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
const about = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100rem);
    }
    to {
        opacity: 1;
        transform: translateX(0rem);
    }
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

const vetor = keyframes`
    from {
        opacity: 0;
        right: -100rem;
    }
    to {
        opacity: 1;
        right: 0;
    }
`

export const Vetor = styled.div`
    position: absolute;
    right: 0;
    transition: animation 5s;
    opacity: 0;
    animation: ${vetor} 0.5s 0.5s forwards;

    @media screen and (max-width: 820px) {
        display: none;
    }

    img {
        height: 95%;
    }
`
