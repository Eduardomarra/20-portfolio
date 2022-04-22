import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100vw;
        gap: calc(${theme.spacings.xxlarge} * 3);
        background: ${theme.colors.darken};
        padding: calc(${theme.spacings.large} * 2) 0;

        @media screen and (max-width: 820px) {
            flex-direction: column;
            gap: ${theme.spacings.xlarge};
        }
    `}
`

export const ImageProfile = styled.div`
    ${({ theme }) => css`
        @media screen and (max-width: 820px) {
            width: 250px;
            height: 250px;
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
        .profile {
            h1 {
                font-weight: 600;
                font-size: ${theme.font.sizes.xlarge};
                line-height: 2.9rem;
                text-transform: uppercase;
                color: ${theme.colors.light};
                margin: 4rem 0;
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
