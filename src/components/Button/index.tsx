import React, { AnchorHTMLAttributes } from 'react'
import { Link } from './styles'

export type ButtonGradientStyle = 'pink' | 'purple'

type ButtonProps = {
    children: React.ReactNode
    gradientStyle?: ButtonGradientStyle
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({
    children,
    gradientStyle = 'pink',
    ...props
}: ButtonProps) {
    return (
        <Link {...props} gradientStyle={gradientStyle}>
            {children}
        </Link>
    )
}
