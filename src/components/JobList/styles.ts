import styled, { css } from 'styled-components'

export const Navigation = styled.ul``

type NavigationItemProps = {
    isActive: boolean
}

export const NavigationItem = styled.button<NavigationItemProps>`
    ${({ theme, isActive }) => css`
        display: block;
        font-weight: 300;
        font-size: ${theme.font.sizes.large};
        line-height: 2.2rem;
        color: ${theme.colors.light};
        text-align: left;
        width: 100%;
        padding: ${theme.spacings.xsmall} ${theme.spacings.large};
        position: relative;

        &::before {
            content: '';
            width: 3px;
            height: 100%;
            background: ${theme.colors.darken};
            display: block;
            position: absolute;
            left: 0;
            top: 0;
        }

        &:hover {
            background: ${theme.colors.darken};

            &::before {
                background: ${theme.colors.primary};
            }
        }

        ${isActive &&
        css`
            background: ${theme.colors.darken};
            &::before {
                background: ${theme.colors.primary};
            }
        `}
    `}
`