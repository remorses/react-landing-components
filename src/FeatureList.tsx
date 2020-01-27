import { Box, Row, Text } from 'hybrid-components'

import React from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 50px 0;
`
const AlignLeft = styled.div`
    display: inline-block;
    text-align: ;
`

const Features = ({ children }) => {
    return (
        <Container>
            <AlignLeft>
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(child, {
                        number: i + 1,
                        key: i
                    })
                )}
            </AlignLeft>
        </Container>
    )
}

const Feature = ({ title, description, icon = <img /> }) => {
    return (
        <Box m='40px' alignItems='flex-start' width='auto'>
            <Row justifyContent='flex-start' alignItems='center' width='auto'>
                <Box width='100px'>
                    {React.cloneElement(icon, { height: '50px' })}
                </Box>
                <Box width='auto'>
                    <Text
                        textAlign='left'
                        fontWeight='bold'
                        fontSize='24px'
                        width='auto'
                    >
                        {title}
                    </Text>
                    <Text
                        textAlign='left'
                        fontSize='16px'
                        opacity={0.7}
                        width='auto'
                        letterSpacing='.04em'
                        lineHeight='1.5em'
                        maxWidth='400px'
                    >
                        {description}
                    </Text>
                </Box>
            </Row>
        </Box>
    )
}

Features.Feature = Feature

export default Features
