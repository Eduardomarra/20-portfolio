import React from 'react'
import { ProjectList } from '../ProjectList'
import projectJson from '../Json/Project.json'

import { Wrapper, Content, Titulo } from './styles'

export type ProjectListProps = {
    id: number
    title: string
    description: string
    stack: string
}

export function Project() {
    return (
        <>
            <Wrapper id="projetos">
                <Titulo>
                    <h1>Projetos</h1>
                </Titulo>
                <Content>
                    {projectJson.map((project: ProjectListProps) => (
                        <ProjectList key={project.id} {...project} />
                    ))}
                </Content>
            </Wrapper>
        </>
    )
}
