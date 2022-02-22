import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`
export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        padding: ${theme.spacings.xlarge} 0;

        @media screen and (max-width: 820px) {
            width: 700px;
        }
    `}
`
export const Title = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xxlarge};
        color: ${theme.colors.light};
        font-weight: 500;
        line-height: 3.5rem;
        margin-bottom: ${theme.spacings.large};
    `}
`
export const Form = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;

        input {
            display: block;
            padding: ${theme.spacings.xsmall};
            background: ${theme.colors.light};
            border: none;
            color: ${theme.colors.darken};
            font-size: ${theme.font.sizes.large};
            outline: none;
            margin-bottom: ${theme.spacings.xsmall};
            &::placeholder {
                font-size: ${theme.font.sizes.large};
                color: ${theme.colors.darken};
            }
        }

        textarea {
            padding: ${theme.spacings.xsmall};
            background: ${theme.colors.light};
            border: none;
            color: ${theme.colors.darken};
            font-family: 'Inter';
            font-size: ${theme.font.sizes.large};
            outline: none;
            resize: none;
            margin-bottom: ${theme.spacings.xsmall};

            &::placeholder {
                font-size: ${theme.font.sizes.large};
                color: ${theme.colors.darken};
                font-family: 'Inter';
            }
        }
    `}
`

export const ButtonSubmit = styled.button`
    ${({ theme }) => css`
        width: 100%;
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.light};
        background: ${theme.gradientColors.purple};
        padding: ${theme.spacings.xsmall};
    `}
`
