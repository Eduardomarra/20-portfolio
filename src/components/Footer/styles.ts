import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.darken};
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 820px) {
            width: 700px;
        }
        p {
            font-weight: normal;
            font-size: ${theme.font.sizes.medium};
            line-height: 1.9rem;
            color: ${theme.colors.light};

            & + p {
                display: flex;
                align-items: center;

                a {
                    margin-left: 1rem;
                    color: ${theme.colors.primary};
                    cursor: pointer;
                }
            }
        }
    `}
`
