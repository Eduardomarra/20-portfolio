import React from 'react'
import { Apresentation } from './components/Apresentation'
import { Profile } from './components/Experiences'
import { Header } from './components/Header'
import { Container } from './styles/container'

function App() {
    return (
        <>
            <Container>
                <Header />
                <Apresentation />
            </Container>
            <Container>
                <Profile />
            </Container>
        </>
    )
}

export default App
