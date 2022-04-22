import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        height: 100vh;
        background: ${theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(${theme.spacings.large} * 2) 0;

        @media screen and (max-width: 500px) {
            height: auto;
        }
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        width: ${theme.grid.container};
    `}
`
export const TitleExperience = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            text-transform: uppercase;
            color: ${theme.colors.light};
            margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xlarge} 0;

            @media screen and (max-width: 820px) {
                font-weight: 500;
                font-size: ${theme.font.sizes.large};
                line-height: 2.4rem;
            }
        }
    `}
`

export const NavExperiences = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: calc(${theme.spacings.large} * 2);
    `}
`
