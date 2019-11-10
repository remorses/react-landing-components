import React from 'react'
import { Box, Text, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 40px;
    padding-bottom: 0;
`
const Part = (p) => <Box p='70px' width={[1, 1, 0.5, 0.5, 0.5]} {...p} />

const Paragraphs = ({ children }) => {
    return (
        <>
            {children.split('\n').map((x) => (
                <Text textAlign='left' fontSize='16px' opacity={0.7} my='2px'>
                    {x}
                </Text>
            ))}
        </>
    )
}

export default ({ image, title, description, right = false }) => {
    return (
        <Container flexGrow={1} flexDirection='row-reverse'>
            <Part>
                <Text textAlign='center' fontWeight='bold' fontSize='32px' >
                    {title}
                </Text>
                <Box height='40px' />
                <Paragraphs>{description}</Paragraphs>
            </Part>
            <Part>
                <img width='100%' src={image} />
            </Part>
        </Container>
    )
}
