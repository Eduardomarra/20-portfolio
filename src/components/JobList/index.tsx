import React, { useState } from 'react'

import { Navigation, NavigationItem } from './styles'

export function JobList() {
    const [active, setActive] = useState('empresa1')

    return (
        <>
            <Navigation>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa1'}
                        onClick={() => setActive('empresa1')}
                    >
                        Empresa 1
                    </NavigationItem>
                </li>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa2'}
                        onClick={() => setActive('empresa2')}
                    >
                        Empresa 2
                    </NavigationItem>
                </li>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa3'}
                        onClick={() => setActive('empresa3')}
                    >
                        Empresa 3
                    </NavigationItem>
                </li>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa4'}
                        onClick={() => setActive('empresa4')}
                    >
                        Empresa 4
                    </NavigationItem>
                </li>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa5'}
                        onClick={() => setActive('empresa5')}
                    >
                        Empresa 5
                    </NavigationItem>
                </li>
                <li>
                    <NavigationItem
                        isActive={active === 'empresa6'}
                        onClick={() => setActive('empresa6')}
                    >
                        Empresa 6
                    </NavigationItem>
                </li>
            </Navigation>
        </>
    )
}
