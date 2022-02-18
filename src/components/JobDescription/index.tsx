import React from 'react'
import { JobData } from '../JobList'

import { Description, Heading, Company, Wrapper } from './styles'

type DescriptionProps = {
    isActive: boolean
} & JobData

export function JobDescription({
    role,
    dateFrom,
    dateEnd,
    current,
    company,
    description,
    isActive = false
}: DescriptionProps) {
    return (
        <>
            <Wrapper isActive={isActive}>
                <Heading>
                    <h1>{role}</h1>
                    <span>
                        {dateFrom} - {current ? 'Atual' : dateEnd}
                    </span>
                </Heading>
                <Company> {company}</Company>
                <Description>{description}</Description>
            </Wrapper>
        </>
    )
}
