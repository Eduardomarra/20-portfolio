import React from 'react'

import { Projeto } from './styles'

import project from '../../assets/project.jpg'
import linkProject from '../../assets/linkProject.svg'

type ProjectListProps = {
    id: number
    title: string
    description: string
    stack: string
}

export function ProjectList({ title, description, stack }: ProjectListProps) {
    return (
        <>
            <Projeto>
                <div className="imgProject">
                    <img src={project} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h5>{stack}</h5>
                <div className="linkProject">
                    <a href="/">
                        <img src={linkProject} />
                        <span>Visualizar</span>
                    </a>
                </div>
            </Projeto>
        </>
    )
}
