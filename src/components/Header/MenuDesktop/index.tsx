import React from 'react'
import { Navigation } from './styles'

export function MenuDesktop() {
    return (
        <>
            <Navigation className="desktop">
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
        </>
    )
}
