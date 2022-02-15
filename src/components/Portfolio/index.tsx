import React from 'react'

import { Wrapper, Content, Projeto } from './styles'

import project from '../../assets/project.jpg'
import linkProject from '../../assets/linkProject.svg'

export function Portfolio() {
    return (
        <>
            <Wrapper>
                <Content>
                    <h1>Projetos</h1>
                </Content>
                <Content>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                    <Projeto>
                        <div className="imgProject">
                            <img src={project} />
                        </div>
                        <h2>Nome do projeto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit interdum odio eu varius.
                        </p>
                        <h5>tecnologias usadas no projeto</h5>
                        <div className="linkProject">
                            <a href="/">
                                <img src={linkProject} />
                                <span>Visualizar</span>
                            </a>
                        </div>
                    </Projeto>
                </Content>
            </Wrapper>
        </>
    )
}
