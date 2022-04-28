import styled, { css } from 'styled-components'

export const Content = styled.nav`
    ${({ theme }) => css`
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
        position: relative;

        & svg {
            color: ${theme.colors.light};
            width: 3rem;
            height: 3rem;
        }
    `}
`

export const NavigationMobile = styled.nav`
    ${({ theme }) => css`
        position: absolute;
        top: 6rem;
        bottom: 0;
        left: -32rem;
        right: -1rem;
        background: ${theme.colors.dark};
        z-index: 99;
        .links {
            display: none;
        }
        .links.active {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            background: ${theme.colors.darken};
            padding: ${theme.spacings.medium} 0;

            li {
                margin: ${theme.spacings.small} 0;
                a {
                    color: ${theme.colors.light};
                    padding: ${theme.spacings.small} 0;

                    &:focus {
                        color: ${theme.colors.primary};
                    }
                }
            }
        }
    `}
`
