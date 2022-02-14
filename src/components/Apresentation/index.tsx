import React from 'react'
import { Wrapper, Main, WhoIAm, Vetor } from './styles'

import vetor from '../../assets/vetor.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

export function Apresentation() {
    return (
        <Wrapper>
            <Main>
                <WhoIAm>
                    <span>Olá, eu sou</span>
                    <h1>Eduado Marra</h1>
                    <span>Desenvolvedor Front-End</span>

                    <div>
                        <a href="/">
                            <img src={linkedin} />
                            <p>Linkedin</p>
                        </a>
                        <a href="/">
                            <img src={github} />
                            <p>GitHub</p>
                        </a>
                    </div>
                </WhoIAm>
                <Vetor>
                    <img src={vetor} />
                </Vetor>
            </Main>
        </Wrapper>
    )
}
