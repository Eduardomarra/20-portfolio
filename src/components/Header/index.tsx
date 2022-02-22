import React from 'react'

import { Wrapper, Content, Logo, Navigation } from './styles'

export function Header() {
    return (
        <Wrapper id="home">
            <Content>
                <Logo>
                    <a>Portfólio</a>
                </Logo>
                <Navigation>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#sobreMim">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#experiencia">Experiência</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </Navigation>
            </Content>
        </Wrapper>
    )
}
