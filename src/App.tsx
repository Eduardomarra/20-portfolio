import React from 'react'
import { Apresentation } from './components/Presentation'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { Experiences } from './components/Experiences'
import { Project } from './components/Project'
import { Footer } from './components/Footer'
import { FormContact } from './components/FormContact'

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
        </>
    )
}

export default App
