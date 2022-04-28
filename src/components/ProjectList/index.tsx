import React from 'react'

import { Projeto, Image, Description } from './styles'

import project from '../../assets/project.jpg'
import { Button } from '../Button'
import { FiLink } from 'react-icons/fi'

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
                <Image>
                    <img src={project} />
                </Image>
                <Description>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h5>{stack}</h5>
                    <Button
                        gradientStyle="purple"
                        href="https://www.linkedin.com/in/eduardomarra/"
                        target="_blank"
                    >
                        <FiLink /> Visualizar
                    </Button>
                </Description>
            </Projeto>
        </>
    )
}
