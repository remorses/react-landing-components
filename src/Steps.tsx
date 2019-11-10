import React from 'react'
import { Box, H1, H2, Text } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 50px 0;
`

const Steps = ({ children }) => {
    return (
        <Container>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    number: i
                })
            )}
        </Container>
    )
}

const Step = ({number=0, title, description, icon='', }) => {
    return (
        <Box width='200px' m='40px'>
            <Text  fontWeight='bold' fontSize='24px'>{number}</Text>
            <Text textAlign='center' fontWeight='bold' fontSize='24px' >{title}</Text>
            <Text textAlign='center' fontSize='16px' opacity={.7}>{description}</Text>
        </Box>
    )
}

Steps.Step = Step

export default Steps
