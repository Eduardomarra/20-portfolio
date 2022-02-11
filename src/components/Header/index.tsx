import React from 'react'

import { Wrapper, Content } from './styles'

export function Header() {
    return (
        <Wrapper>
            <Content>
                <h1>Portfólio</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                    <li>
                        <a href="/">Experiência</a>
                    </li>
                    <li>
                        <a href="/">Projetos</a>
                    </li>
                </ul>
            </Content>
        </Wrapper>
    )
}
