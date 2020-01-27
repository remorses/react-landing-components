import React from 'react'
import { Box, } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 0;
    padding-bottom: 0;
`

export default ({
    children
}) => {
    return (
        <Container >
            {children}
        </Container>
    )
}
