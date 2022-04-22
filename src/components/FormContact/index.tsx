import React from 'react'

import { Wrapper, Content, Title, Form, ButtonSubmit } from './styles'

export function FormContact() {
    return (
        <>
            <Wrapper id="contato">
                <Content>
                    <Title>Entre em contato!</Title>
                    <Form>
                        <input placeholder="Qual seu nome?" />
                        <input placeholder="joão@gmail.com" />
                        <textarea
                            placeholder="Deixe sua mensagem."
                            rows={5}
                            readOnly={false}
                        />
                    </Form>
                    <ButtonSubmit>Encaminhar</ButtonSubmit>
                </Content>
            </Wrapper>
        </>
    )
}
