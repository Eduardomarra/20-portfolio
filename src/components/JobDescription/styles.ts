import styled, { css, keyframes } from 'styled-components'

const aminaDescription = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    50% {
        opacity: 1;
        transform: translateY(50px);
    }
    100% {
        transform: translateY(0);
    }
`

type WrapperProps = {
    isActive: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ isActive }) => css`
        display: block;
        animation: ${aminaDescription} 0.8s ease-in-out;

        ${!isActive &&
        css`
            display: none;
        `}
    `}
`

export const Heading = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${theme.spacings.large};
        h1,
        span {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 2.9rem;
            color: ${theme.colors.light};
        }
        span {
            font-size: ${theme.font.sizes.medium};
        }

        @media screen and (max-width: 820px) {
            margin-bottom: ${theme.spacings.small};
            h1 {
                font-weight: 500;
                font-size: ${theme.font.sizes.large};
                line-height: 2.4rem;
            }
            span {
                font-size: 1.2rem;
            }
        }
    `}
`

export const Company = styled.p`
    ${({ theme }) => css`
        font-weight: 500;
        font-size: ${theme.font.sizes.medium};
        line-height: 2.4rem;
        color: ${theme.colors.primary};
        margin-bottom: ${theme.spacings.small};

        @media screen and (max-width: 820px) {
            font-size: 1.4rem;
        }
    `}
`

export const Description = styled.p`
    ${({ theme }) => css`
        font-weight: 300;
        font-size: ${theme.font.sizes.large};
        line-height: 2.8rem;
        color: ${theme.colors.grayLight};

        @media screen and (max-width: 820px) {
            font-size: ${theme.font.sizes.small};
        }
    `}
`
