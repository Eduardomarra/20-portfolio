import React from 'react'

import { Wrapper, Content } from './styles'

export function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <Wrapper>
                <Content>
                    <p>@ {year} - Eduardo Marra</p>
                </Content>
            </Wrapper>
        </>
    )
}
