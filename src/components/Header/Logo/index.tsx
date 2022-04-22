import React from 'react'

import logo from '../../../assets/logo.svg'

import { LogoImg } from './styles'

export function Logo() {
    return (
        <>
            <LogoImg>
                <img src={logo} alt="Logo Eduardo Marra" />
            </LogoImg>
        </>
    )
}
