import styled, { css } from 'styled-components'

export const ArrowUp = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 2rem;
        right: 1rem;
        width: 6rem;
        height: 6rem;
        background: ${theme.gradientColors.purple};
        border-radius: 50%;
        z-index: 99999999;
        & svg {
            color: ${theme.colors.light};
            width: 3rem;
            height: 4rem;
        }

        @media screen and (max-width: 500px) {
            width: 4rem;
            height: 4rem;
        }
    `}
`
