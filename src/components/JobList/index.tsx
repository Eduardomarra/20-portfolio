import React, { useState } from 'react'
import { JobDescription } from '../JobDescription'

import data from '../Json/Data.json'

import { Navigation, NavigationItem } from './styles'

export type JobData = {
    id: number
    role: string
    dateFrom: string
    dateEnd?: string
    current: boolean
    company: string
    description: string
}

export function JobList() {
    const [active, setActive] = useState(1)

    return (
        <>
            <Navigation>
                {data.map((job) => (
                    <li key={job.id}>
                        <NavigationItem
                            isActive={active === job.id}
                            onClick={() => setActive(job.id)}
                        >
                            {job.company}
                        </NavigationItem>
                    </li>
                ))}
            </Navigation>

            {data.map((job: JobData) => (
                <JobDescription
                    key={job.id}
                    isActive={job.id === active}
                    {...job}
                />
            ))}
        </>
    )
}
