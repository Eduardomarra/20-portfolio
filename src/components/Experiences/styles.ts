import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        max-width: 100vw;
        background: ${theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(${theme.spacings.large} * 3) 0;
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
            margin-bottom: ${theme.spacings.xlarge};
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

export const JobDescription = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            color: ${theme.colors.light};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: ${theme.spacings.small};

            span {
                font-size: ${theme.font.sizes.medium};
            }
        }
        h3 {
            font-weight: 500;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.primary};
            margin-bottom: ${theme.spacings.small};
        }
        p {
            font-weight: 300;
            font-size: ${theme.font.sizes.large};
            line-height: 2.8rem;
            color: ${theme.colors.grayLight};
        }
    `}
`
