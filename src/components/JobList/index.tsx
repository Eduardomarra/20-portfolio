import React, { useState } from 'react'
import { JobDescription } from '../JobDescription'

import jobs from '../Json/Jobs.json'

import { Content, Navigation, NavigationItem } from './styles'

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
        <Content>
            <Navigation>
                {jobs.map((job) => (
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
            <div>
                {jobs.map((job: JobData) => (
                    <JobDescription
                        key={job.id}
                        isActive={job.id === active}
                        {...job}
                    />
                ))}
            </div>
        </Content>
    )
}
