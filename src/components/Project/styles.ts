import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.darken};
        max-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* align-items: center;
    justify-content: space-between; */
        flex-wrap: wrap;
        gap: ${theme.spacings.xsmall};
        margin: ${theme.spacings.xxlarge} 0;

        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            text-transform: uppercase;
            color: ${theme.colors.light};
            align-self: flex-start;
            margin-bottom: -3rem;
        }
    `}
`
