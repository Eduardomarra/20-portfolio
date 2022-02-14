import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.dark};
        height: calc(100vh - 11rem);
        width: 100vw;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        overflow: hidden;
    `}
`

export const Main = styled.main`
    ${({ theme }) => css`
        width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`

export const WhoIAm = styled.div`
    ${({ theme }) => css`
        span {
            color: ${theme.colors.light};
            font-size: ${theme.font.sizes.xlarge};
            font-weight: 600;
            line-height: 2.9rem;
            text-transform: uppercase;
        }

        h1 {
            color: ${theme.colors.primary};
            font-weight: 600;
            font-size: ${theme.font.sizes.huge};
            line-height: 7.7rem;
            text-transform: uppercase;
            padding: ${theme.spacings.small} 0;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-top: ${theme.spacings.xxlarge};

            a {
                max-width: 250px;
                min-width: 160px;
                background: transparent;

                border: 2px solid;
                border-image: ${theme.gradientColors.pink} 1;
                border-radius: 5px;

                margin: 0 ${theme.spacings.small};
                padding: ${theme.spacings.xsmall} ${theme.spacings.small};

                transition: transform 0.5s;

                display: inline-block;

                :nth-child(1) {
                    border-image: ${theme.gradientColors.purple} 1;
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

export const Vetor = styled.div`
    position: absolute;
    right: 0;

    img {
        height: 95%;
    }
`
