import React from 'react'
import { Wrapper, Main } from './styles'

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

export function Apresentation() {
    return (
        <Wrapper>
            <Main>
                <span>Olá, eu sou</span>
                <h1>Eduado Marra</h1>
                <span>Desenvolvedor Front-End</span>

                <div>
                    <a href="/">
                        <img src={linkedin} />
                        <p>linkedin</p>
                    </a>
                    <a href="/">
                        <img src={github} />
                        <p>GitHub</p>
                    </a>
                </div>
            </Main>
        </Wrapper>
    )
}
