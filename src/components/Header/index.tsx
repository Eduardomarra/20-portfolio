import React from 'react'

import { Wrapper, Content } from './styles'

export function Header() {
    return (
        <Wrapper>
            <Content>
                <div>
                    <a>Portfólio</a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Sobre mim</a>
                        </li>
                        <li>
                            <a href="/">Experiência</a>
                        </li>
                        <li>
                            <a href="/">Projetos</a>
                        </li>
                    </ul>
                </nav>
            </Content>
        </Wrapper>
    )
}
