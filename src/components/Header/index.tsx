import React from 'react'

import { Content, Menu, Wrapper } from './styles'

import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

import { Logo } from './Logo'

export function Header() {
    return (
        <>
            <Wrapper>
                <Content>
                    <Logo />
                    <Menu className="menu">
                        <MenuDesktop />
                        <MenuMobile />
                    </Menu>
                </Content>
            </Wrapper>
        </>
    )
}
