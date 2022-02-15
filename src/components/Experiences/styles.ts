import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        max-width: 100vw;
        height: 90vh;
        background: ${theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: calc(${theme.spacings.xxlarge}*2);
        margin: 0 auto;
    `}
`

export const NavExperiences = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            text-transform: uppercase;
            color: ${theme.colors.light};
            margin-bottom: ${theme.spacings.xlarge};
        }
        li {
            padding: ${theme.spacings.xsmall} ${theme.spacings.large};
            position: relative;

            &::before {
                content: '';
                width: 3px;
                height: 5.4rem;
                background: ${theme.colors.darken};
                display: block;
                position: absolute;
                left: 0;
                top: 0;
            }
            a {
                font-weight: 300;
                font-size: ${theme.font.sizes.large};
                line-height: 2.2rem;
                color: ${theme.colors.light};
            }
        }
        li.active {
            background: ${theme.colors.darken};
            &::before {
                content: '';
                background: ${theme.colors.primary};
            }
        }
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
            max-width: 60rem;
            font-weight: 300;
            font-size: ${theme.font.sizes.large};
            line-height: 2.8rem;
            color: ${theme.colors.grayLight};
        }
    `}
`
