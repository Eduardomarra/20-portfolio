import styled, { css, keyframes } from 'styled-components'

export const Navigation = styled.nav`
    ${({ theme }) => css`
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: ${theme.spacings.small};

            li {
                margin-left: ${theme.spacings.small};
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

        & ::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: ${theme.colors.darken};
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            animation: ${animationLine} 2s forwards;
        }

        @media screen and (max-width: 700px) {
            li {
                margin-left: ${theme.spacings.xsmall};
            }
        }
    `}
`

const animationLine = keyframes`
    from {
        width: 0%;
        background-color: #00D2DF;
    }
    to {
        width: 100%;
        background-color: #151515;
    }
`
