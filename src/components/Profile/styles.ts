import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100vw;
        gap: calc(${theme.spacings.xlarge} * 2);
        background: ${theme.colors.darken};
        padding: calc(${theme.spacings.large} * 2) 0;
        overflow: hidden;

        @media screen and (max-width: 800px) {
            flex-direction: column;
            gap: ${theme.spacings.xlarge};
        }
    `}
`

export const ImageProfile = styled.div`
    ${({ theme }) => css`
        @media screen and (max-width: 759px) {
            width: 200px;
            height: 200px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        img {
            border-left: 3px solid ${theme.colors.primary};
            border-radius: 5px;
        }
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        @media screen and (max-width: 759px) {
            margin: 0 calc(${theme.spacings.xsmall} / 2);
        }
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

            @media screen and (max-width: 759px) {
                h1 {
                    font-size: ${theme.font.sizes.large};
                    line-height: 2.2rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    margin-top: 2rem;
                }
                h3 {
                    font-size: ${theme.font.sizes.medium};
                    line-height: 1.8rem;
                    margin-bottom: 2rem;
                }
                p {
                    font-size: ${theme.font.sizes.small};
                    line-height: 2.5rem;
                    max-width: 540px;
                }
            }
        }

        .social-media ul {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: ${theme.spacings.xxlarge};
            margin: ${theme.spacings.xlarge} 0;

            a {
                img {
                    transition: transform 0.5s;
                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
        }
    `}
`

export const ButtonWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacings.xlarge};
    `}
`
