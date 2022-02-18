import React from 'react'

import { JobList } from '../JobList'

import {
    Wrapper,
    Content,
    NavExperiences,
    JobDescription,
    TitleExperience
} from './styles'

export function Experiences() {
    return (
        <>
            <Wrapper>
                <Content>
                    <TitleExperience>
                        <h1>Experiência</h1>
                    </TitleExperience>
                    <NavExperiences>
                        <JobList />
                        <JobDescription>
                            <h1>
                                Desenvolvedor Front-End
                                <span>Nov 2021 - Atual</span>
                            </h1>
                            <h3>Digital House</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque eu purus risus. Ut
                                rutrum sollicitudin purus in accumsan. Proin at
                                mattis metus. Nullam sit amet mauris
                                condimentum, volutpat augue in, mattis urna.
                            </p>
                        </JobDescription>
                    </NavExperiences>
                </Content>
            </Wrapper>
        </>
    )
}
