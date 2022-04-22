import React from 'react'

import { Content, Wrapper } from './styles'

import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

import { Logo } from './Logo'

export function Header() {
    return (
        <>
            <Wrapper>
                <Content>
                    <Logo />
                    <div className="menu">
                        <MenuDesktop />
                        <MenuMobile />
                    </div>
                </Content>
            </Wrapper>
        </>
    )
}
