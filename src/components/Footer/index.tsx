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
                    <p>
                        Design criado por
                        <a
                            href="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?node-id=39316%3A686"
                            target="_blank"
                            rel="noreferrer"
                        >
                            IuriCode
                        </a>
                    </p>
                </Content>
            </Wrapper>
        </>
    )
}
