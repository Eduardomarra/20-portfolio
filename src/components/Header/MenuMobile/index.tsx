import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Content, NavigationMobile } from './styles'

export function MenuMobile() {
    const [isOpen, setIsOpen] = useState('links')

    function handleClick() {
        setIsOpen(isOpen === 'links' ? 'links active' : 'links')
    }

    return (
        <>
            <Content>
                <FiMenu className="mobile" onClick={handleClick} />
                <NavigationMobile className="mobile">
                    <ul className={isOpen}>
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
                </NavigationMobile>
            </Content>
        </>
    )
}
