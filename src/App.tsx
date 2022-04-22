import React from 'react'
import { Apresentation } from './components/Presentation'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { Experiences } from './components/Experiences'
import { Project } from './components/Project'
import { FormContact } from './components/FormContact'
import { ToTop } from './components/ArrowUp'
import { Footer } from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <Apresentation />
            <Profile />
            <Experiences />
            <Project />
            <FormContact />
            <Footer />
            <ToTop />
        </>
    )
}

export default App
