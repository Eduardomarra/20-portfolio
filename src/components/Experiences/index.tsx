import React from 'react'

import { JobList } from '../JobList'
import { JobDescription } from '../JobDescription'

import { Wrapper, Content, NavExperiences, TitleExperience } from './styles'

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
                        <JobDescription />
                    </NavExperiences>
                </Content>
            </Wrapper>
        </>
    )
}
