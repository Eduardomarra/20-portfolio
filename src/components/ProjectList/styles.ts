import styled, { css } from 'styled-components'

export const Projeto = styled.div`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.small};
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
    `}
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
    `}
`
