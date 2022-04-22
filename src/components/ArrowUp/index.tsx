import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

import { ArrowUp } from './styles'

export function ToTop() {
    return (
        <>
            <ArrowUp>
                <a href="#presentation">
                    <FiArrowUp />
                </a>
            </ArrowUp>
        </>
    )
}
