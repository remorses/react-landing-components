import React from 'react'
import { Box, H1, H2, Text, Row } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    margin: 50px 0;
`

const Steps = ({ children }) => {
    return (
        <Container>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    number: i + 1,
                    key: i
                })
            )}
        </Container>
    )
}

const Step = ({ number = 0, title, description, icon = <img/> }) => {
    return (
        <Box  width='250px' m='20px'>
                <Text width='40px' fontWeight='bold' fontSize='24px'>
                    .{number}
                </Text>
            <Row justifyContent='center'>
                {React.cloneElement(icon, {height: '100px'})}
            </Row>
            <Text textAlign='center' fontWeight='normal' fontSize='24px' opacity={.9}>
                {title}
            </Text>
            <Text textAlign='center'  fontSize='16px' opacity={0.7}>
                {description}
            </Text>
        </Box>
    )
}

Steps.Step = Step

export default Steps
