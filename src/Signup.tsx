import { Box, Row } from 'hybrid-components'
import { Form, useField } from 'react-final-form'

import { Button } from '.'
import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
`

const StyledInput = styled.input`
    font-size: 18px;
    padding: 10px 20px;
    background: white;
    border: 1px solid ${(p) => '#ddd'};
    border-radius: 8px 0px 0px 8px;
    min-width: 270px;
    min-height: 100%;
    ::placeholder {
        color: #777;
    }
`

const TextInput = ({ name, ...rest }) => {
    const { input, meta } = useField(name)

    return (
        <>
            <StyledInput {...input} {...rest} />
        </>
    )
}

export default ({
    mailchimpAudienceId = 'e774d6f31e',
    mailchimpApiKey = 'cf0e202869f9ff6ab2003837746aa33a-us20',
    placeholder = 'email address',
    label = 'Signup',
    buttonText = 'Signup'
}) => {
    async function signup({ email_address }) {
        try {
            if (!email_address) {
                throw Error('no email')
            }
            await fetch(
                `https://us20.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Basic ' + btoa('anystring:' + mailchimpApiKey)
                    },
                    body: JSON.stringify({
                        email_address,
                        status: 'subscribed'
                        // merge_fields: {}
                    })
                }
            )
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <Box alignItems='center' width='auto'>
            <Form
                onSubmit={signup}
                render={({ handleSubmit }) => {
                    return (
                        <>
                            <Label>{label}</Label>
                            <Row alignItems='stretch'>
                                <TextInput
                                    type='email'
                                    name='email_address'
                                    placeholder={placeholder}
                                    required
                                />
                                <Button
                                    style={{ margin: 0 }}
                                    onClick={handleSubmit}
                                    as='button'
                                >
                                    {buttonText}
                                </Button>
                            </Row>
                        </>
                    )
                }}
            />
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
