import React from 'react'
import { Apresentation } from './components/Presentation'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { Experiences } from './components/Experiences'

function App() {
    return (
        <>
            <Header />
            <Apresentation />
            <Profile />
            <Experiences />
        </>
    )
}

export default App
