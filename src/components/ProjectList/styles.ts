import styled, { css } from 'styled-components'

export const Projeto = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

export const Image = styled.div`
    ${({ theme }) => css`
        max-width: 53rem;
        max-height: 20rem;
        margin-bottom: ${theme.spacings.large};

        img {
            width: 100%;
            height: 100%;
            border-left: 3px solid ${theme.colors.primary};
            border-radius: 5px;
        }

        @media screen and (max-width: 500px) {
            max-width: 32rem;
            max-height: 20rem;
            margin-bottom: ${theme.spacings.small};

            img {
                width: 100%;
                height: 100%;
                border-left: 3px solid ${theme.colors.primary};
                border-radius: 5px;
            }
        }
    `}
`

export const Description = styled.div`
    ${({ theme }) => css`
        margin-bottom: 2rem;
        h2 {
            font-size: ${theme.font.sizes.xlarge};
            font-weight: 500;
            line-height: 2.9rem;
            color: ${theme.colors.light};
            margin-bottom: ${theme.spacings.small};
        }
        p {
            width: 100%;
            font-weight: 300;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.6rem;
            color: ${theme.colors.grayLight};
            margin-bottom: ${theme.spacings.small};
        }
        h5 {
            font-weight: 500;
            font-size: calc(${theme.font.sizes.xlarge} / 2);
            line-height: 2.4rem;
            color: ${theme.colors.primary};
            margin-bottom: ${theme.spacings.small};
        }

        @media screen and (max-width: 700px) {
            h2 {
                font-size: ${theme.font.sizes.large};
                line-height: 2.2rem;
            }
            p {
                font-size: ${theme.font.sizes.small};
                line-height: 2rem;
                margin-bottom: ${theme.spacings.xsmall};
                width: 30rem;
            }
            h5 {
                font-size: 1.2rem;
                line-height: 1.8rem;
            }
        }
    `}
`
