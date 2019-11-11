import React from 'react'
import { Box, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 40px;
`

const BackImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    object-fit: cover;
`

export default ({
    backImg = '',
    backColor = 'lightblue',
    color = 'black',
    children
}) => {
    return (
        <Container style={{color}}>
            {children}
            {backImg && <BackImage src={backImg} alt='' />}
            {backColor && (
                <BackImage as={'div'} style={{ background: backColor }} />
            )}
        </Container>
    )
}
