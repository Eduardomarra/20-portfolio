import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonGradientStyle } from '.'

type linkProps = {
    gradientStyle: ButtonGradientStyle
}

const modifiers = {
    pink: (theme: DefaultTheme) => css`
        background: ${theme.gradientColors.dark} padding-box,
            ${theme.gradientColors.pink} border-box;
    `,

    purple: (theme: DefaultTheme) => css`
        background: ${theme.gradientColors.dark} padding-box,
            ${theme.gradientColors.purple} border-box;
    `
}

export const Link = styled.a<linkProps>`
    ${({ theme, gradientStyle }) => css`
        max-width: 25rem;
        min-width: 16rem;
        color: ${theme.colors.light};
        font-size: ${theme.font.sizes.large};
        text-decoration: none;
        text-align: center;
        padding: 1.2rem ${theme.spacings.small};

        ${modifiers[gradientStyle](theme)};
        border-radius: 0.5rem;
        border: 2px solid transparent;
        transition: all 0.5s;

        &:hover {
            transform: scale(1.1);
        }
    `}
`
