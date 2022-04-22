import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { Button } from '../Button'

import vetor from '../../assets/vetor.svg'

import { Wrapper, Content, About, Vetor, ButtonWrapper } from './styles'

export function Apresentation() {
    return (
        <Wrapper id="presentation">
            <Content id="home">
                <About>
                    <span>Olá, eu sou</span>
                    <h1>Eduardo Marra</h1>
                    <span>Desenvolvedor Front-End</span>

                    <ButtonWrapper>
                        <Button
                            gradientStyle="purple"
                            href="https://www.linkedin.com/in/eduardomarra/"
                            target="_blank"
                        >
                            <FiLinkedin /> Linkedin
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/eduardomarra/"
                            target="_blank"
                        >
                            <FiGithub /> GitHub
                        </Button>
                    </ButtonWrapper>
                </About>
                <Vetor>
                    <img src={vetor} />
                </Vetor>
            </Content>
        </Wrapper>
    )
}
