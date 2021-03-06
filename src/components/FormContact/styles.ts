import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 400px) {
        }
    `}
`
export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        padding: ${theme.spacings.xlarge} 0;

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            width: 95vw;
        }
        @media screen and (max-width: 500px) {
            width: 95vw;
            padding: 0 0.5rem;
        }
        @media screen and (max-width: 400px) {
            padding: 0 0.5rem;
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
        grid-template-columns: auto;

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
                opacity: 0.5;
            }

            &:focus::placeholder {
                opacity: 0;
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
                opacity: 0.5;
            }
            &:focus::placeholder {
                opacity: 0;
            }
        }

        @media screen and (max-width: 500px) {
            input {
                padding: calc(${theme.spacings.xsmall} / 2);
                font-size: ${theme.font.sizes.small};

                &::placeholder {
                    font-size: ${theme.font.sizes.small};
                }
            }

            textarea {
                padding: calc(${theme.spacings.xsmall} / 2);
                font-size: ${theme.font.sizes.small};

                &::placeholder {
                    font-size: ${theme.font.sizes.small};
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

        &:hover {
            filter: brightness(0.9);
        }

        @media screen and (max-width: 500px) {
            margin-bottom: 2rem;
        }
    `}
`
