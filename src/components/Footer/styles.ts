import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
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
        @media screen and (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            margin: 0 0.8px;
            width: 100vw;
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
