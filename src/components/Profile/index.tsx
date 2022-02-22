import React from 'react'
import { Wrapper, Content, ImageProfile, ButtonWrapper } from './styles'

import photoProfile from '../../assets/photoProfile.jpg'
import twitter from '../../assets/twitter.svg'
import twitch from '../../assets/twitch.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'
import { Button } from '../Button'
import { FiMail, FiDownloadCloud } from 'react-icons/fi'

export function Profile() {
    return (
        <>
            <Wrapper>
                <ImageProfile>
                    <img src={photoProfile} />
                </ImageProfile>
                <Content>
                    <div className="profile">
                        <h1>Sobre mim</h1>
                        <h3>Brasília-DF, Brasil</h3>
                        <p>
                            Aqui vai uma breve explicação que não sei o que mais
                            escrever. Aqui vai uma breve explicação que não sei.
                            Aqui vai uma breve explicação que não sei o que mais
                            escrever. Aqui vai uma breve explicação que não sei.
                            Aqui vai uma breve explicação que não sei o que mais
                            escrever. Aqui vai uma breve explicação que não sei.
                        </p>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li>
                                <a href="/">
                                    <img src={twitter} />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={twitch} />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={youtube} />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={facebook} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ButtonWrapper>
                        <Button
                            gradientStyle="purple"
                            href="https://www.linkedin.com/in/eduardomarra/"
                            target="_blank"
                        >
                            <FiDownloadCloud /> Currículo
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/eduardomarra/"
                            target="_blank"
                        >
                            <FiMail /> E-mail
                        </Button>
                    </ButtonWrapper>
                </Content>
            </Wrapper>
        </>
    )
}
