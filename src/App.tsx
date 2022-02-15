import React from 'react'
import { Apresentation } from './components/Presentation'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { Experiences } from './components/Experiences'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <Apresentation />
            <Profile />
            <Experiences />
            <Portfolio />
            <Footer />
        </>
    )
}

export default App
