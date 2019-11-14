import React from 'react'
import { Box, Row } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Button } from '.'

const Label = styled.div`
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
`

const Input = styled.input`
    font-size: 18px;
    padding: 10px 20px;
    background: white;
    border: 1px solid ${(p) => '#ddd'};
    border-radius:  8px 0px 0px 8px;
    min-width: 270px;
    min-height: 100%;
    ::placeholder {
        color: #777;
    }
`

const Form = styled.form`
    margin: 0;
    padding: 0;
    width: 100%;
`

export default ({ action = '', placeholder='email address', label = 'Signup', buttonText = 'Signup' }) => {
    return (
        <Box alignItems='center' width='auto'>
            <Form
                action={action}
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                target='_blank'
            >
                <Label>{label}</Label>
                <Row alignItems='stretch'>
                    <Input
                        type='email'
                        name='EMAIL'
                        id='mce-EMAIL'
                        placeholder={placeholder}
                        required
                    />

                    <Button style={{ margin: 0 }} type='submit' as='button'>
                        {buttonText}
                    </Button>
                </Row>
            </Form>
        </Box>
    )
}

const x = (
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
        <input
            type='text'
            name='b_7a2ded8c33767b20e6fe824c0_e774d6f31e'
            tabIndex={-1}
            value=''
        />
    </div>
)
