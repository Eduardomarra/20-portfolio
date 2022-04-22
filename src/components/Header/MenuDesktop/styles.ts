import styled, { css } from 'styled-components'

export const Navigation = styled.nav`
    ${({ theme }) => css`
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${theme.spacings.medium}*2);

            @media screen and (max-width: 820px) {
                gap: ${theme.spacings.medium};
            }

            li {
                & + li {
                    margin: 0 ${theme.spacings.xsmall};
                }
                a {
                    color: ${theme.colors.grayLight};
                    font-weight: 500;
                    font-size: ${theme.font.sizes.large};
                    line-height: 22px;

                    transition: 0.5s;

                    :hover {
                        color: ${theme.colors.primary};
                    }
                }
            }
        }
    `}
`
