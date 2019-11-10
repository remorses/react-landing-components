import React from 'react'
import { Box, Text, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 40px;
    padding-bottom: 0;
`

export default ({ image, title, description, right = false }) => {
    return (
        <Container flexDirection='row-reverse'>
            <Box width={0.5}>
                <Text textAlign='center' fontWeight='bold' fontSize='24px'>
                    {title}
                </Text>
                <Text textAlign='left' fontSize='16px' opacity={0.7}>
                    {description}
                </Text>
            </Box>
            <Box width={0.5}>
                <img width='100%' height='100%' src={image}/>
            </Box>
        </Container>
    )
}
