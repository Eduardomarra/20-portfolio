import React from 'react'

import { Wrapper, Content, NavExperiences, JobDescription } from './styles'

export function Experiences() {
    return (
        <>
            <Wrapper>
                <Content>
                    <NavExperiences>
                        <h1>Experiência</h1>
                        <nav>
                            <ul>
                                <li className="active">
                                    <a href="/">Empresa 1</a>
                                </li>
                                <li>
                                    <a href="/">Empresa 2</a>
                                </li>
                                <li>
                                    <a href="/">Empresa 3</a>
                                </li>
                                <li>
                                    <a href="/">Empresa 4</a>
                                </li>
                                <li>
                                    <a href="/">Empresa 5</a>
                                </li>
                                <li>
                                    <a href="/">Empresa 6</a>
                                </li>
                            </ul>
                        </nav>
                    </NavExperiences>
                    <JobDescription>
                        <h1>
                            Desenvolvedor Front-End
                            <span>Nov 2021 - Atual</span>
                        </h1>
                        <h3>Digital House</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque eu purus risus. Ut rutrum sollicitudin
                            purus in accumsan. Proin at mattis metus. Nullam sit
                            amet mauris condimentum, volutpat augue in, mattis
                            urna.
                        </p>
                    </JobDescription>
                </Content>
            </Wrapper>
        </>
    )
}
