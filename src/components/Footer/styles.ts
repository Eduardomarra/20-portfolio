import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.dark};
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        p {
            font-weight: normal;
            font-size: ${theme.font.sizes.medium};
            line-height: 1.9rem;
            color: ${theme.colors.light};
        }
    `}
`
