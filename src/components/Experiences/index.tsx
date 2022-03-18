import React from 'react'

import { JobList } from '../JobList'

import { Wrapper, Content, NavExperiences, TitleExperience } from './styles'

export function Experiences() {
    return (
        <>
            <Wrapper id="experiencia">
                <Content>
                    <TitleExperience>
                        <h1>Experiência</h1>
                    </TitleExperience>
                    <NavExperiences>
                        <JobList />
                    </NavExperiences>
                </Content>
            </Wrapper>
        </>
    )
}
