import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100vw;
        height: 90vh;
        gap: calc(${theme.spacings.xxlarge}*3);
        background: ${theme.colors.darken};
        overflow: hidden;
    `}
`

export const ImageProfile = styled.div`
    ${({ theme }) => css`
        img {
            border-left: 3px solid ${theme.colors.primary};
            border-radius: 5px;
        }
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        .profile {
            h1 {
                font-weight: 600;
                font-size: ${theme.font.sizes.xlarge};
                line-height: 2.9rem;
                text-transform: uppercase;
                color: ${theme.colors.light};
                margin-bottom: 4rem;
            }
            h3 {
                font-weight: 500;
                font-size: ${theme.font.sizes.large};
                line-height: 2.9rem;
                text-transform: uppercase;
                color: ${theme.colors.light};
                margin-bottom: 2rem;
            }
            p {
                font-weight: 300;
                font-size: calc(${theme.font.sizes.large}-0.2rem);
                line-height: 3.2rem;
                color: ${theme.colors.grayLight};
                max-width: 540px;
            }
        }

        .social-media ul {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: ${theme.spacings.xxlarge};
            margin: ${theme.spacings.xlarge} 0;
        }

        .archives {
            a {
                max-width: 250px;
                min-width: 160px;
                background: transparent;
                gap: ${theme.spacings.small};
                text-align: center;

                border: 2px solid;
                border-image: ${theme.gradientColors.pink} 1;
                border-radius: 5px;

                padding: 1rem ${theme.spacings.small};

                transition: transform 0.5s;

                display: inline-block;

                :nth-child(1) {
                    border-image: ${theme.gradientColors.purple} 1;
                    margin-right: ${theme.spacings.xlarge};
                }

                :hover {
                    transform: scale(1.1);
                }

                img {
                    margin-right: ${theme.spacings.xsmall};
                    height: 20px;
                }

                p {
                    color: ${theme.colors.light};
                    text-decoration: none;
                    line-height: ${theme.font.sizes.xlarge};
                    text-align: center;
                    display: inline-block;
                }
            }
        }
    `}
`
