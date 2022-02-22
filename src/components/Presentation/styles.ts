import styled, { css } from 'styled-components'

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
    `}
`

export const Content = styled.main`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
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

export const Vetor = styled.div`
    position: absolute;
    right: 0;

    img {
        height: 95%;
    }
`
