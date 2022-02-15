import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.darken};
        max-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* align-items: center;
        justify-content: space-between; */
        flex-wrap: wrap;
        gap: ${theme.spacings.xsmall};
        margin: ${theme.spacings.xxlarge} 0;

        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            text-transform: uppercase;
            color: ${theme.colors.light};
            align-self: flex-start;
            margin-bottom: -3rem;
        }
    `}
`

export const Projeto = styled.div`
    ${({ theme }) => css`
        div.imgProject {
            max-width: 53rem;
            max-height: 20rem;
            margin-bottom: ${theme.spacings.large};

            img {
                width: 100%;
                height: 100%;
                border-left: 3px solid ${theme.colors.primary};
                border-radius: 5px;
            }
        }
        h2 {
            font-size: ${theme.font.sizes.xlarge};
            font-weight: 500;
            line-height: 2.9rem;
            color: ${theme.colors.light};
            margin-bottom: ${theme.spacings.medium};
        }
        p {
            width: 100%;
            height: ${theme.spacings.large};

            font-weight: 300;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.6rem;
            color: ${theme.colors.grayLight};
            margin-bottom: ${theme.spacings.medium};
        }
        h5 {
            font-weight: 500;
            font-size: calc(${theme.font.sizes.xlarge} / 2);
            line-height: 2.4rem;
            color: ${theme.colors.primary};
            margin-bottom: ${theme.spacings.medium};
        }
        div.linkProject {
            margin-bottom: ${theme.spacings.xlarge};
            a {
                max-width: 250px;
                min-width: 160px;
                background: transparent;

                border: 2px solid;
                border-image: ${theme.gradientColors.purple} 10;
                border-radius: 5px;

                padding: 0.8rem ${theme.spacings.small};

                transition: transform 0.5s;

                display: inline-block;

                :hover {
                    transform: scale(1.1);
                }

                img {
                    margin-right: ${theme.spacings.xsmall};
                    height: 20px;
                }

                span {
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
