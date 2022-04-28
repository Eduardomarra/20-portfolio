import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.darken};
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
        padding: 3rem 0;
    `}
`
export const Titulo = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            text-transform: uppercase;
            color: ${theme.colors.light};
            margin: 3rem 0;
        }
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${theme.spacings.xsmall};

        @media screen and (max-width: 820px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 700px;
            margin: 0 calc(${theme.spacings.xsmall} / 2);
        }
        @media screen and (max-width: 500px) {
            display: grid;
            grid-template-columns: auto;
            margin: 0 1rem;
        }
    `}
`
