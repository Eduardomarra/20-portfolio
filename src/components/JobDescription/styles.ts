import styled, { css } from 'styled-components'

export const Description = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            color: ${theme.colors.light};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: ${theme.spacings.small};

            span {
                font-size: ${theme.font.sizes.medium};
            }
        }
        h3 {
            font-weight: 500;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.primary};
            margin-bottom: ${theme.spacings.small};
        }
        p {
            font-weight: 300;
            font-size: ${theme.font.sizes.large};
            line-height: 2.8rem;
            color: ${theme.colors.grayLight};
        }
    `}
`
