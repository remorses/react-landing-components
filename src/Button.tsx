import React from 'react'
import { Box } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'


const getColor = (p) => {
    if (p.invert) {
        return p.theme.color
    }
    const isLight = Color(p.theme.color).isLight()
    return isLight ? '#000' : '#fff'
}

const getBg = (p) => {
    if (p.invert) {
        const isLight = Color(p.theme.color).isLight()
        return isLight ? '#000' : '#fff'
    }
    return p.theme.color
}

interface Props { invert?: boolean }

const ButtonInside = styled.div<Props>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${getBg};
    color: ${getColor};
    transform: translateY(100%);
    transition: transform .1s ease-out;
`

const ButtonContainer = styled.a<Props>`
    color: ${getColor};
    background: ${getBg};
    position: relative;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 24px;
    border-radius: 6px;
    border-width: 0px;
    margin: 20px;
    cursor: pointer;
    overflow: hidden;
    &:active {
        opacity: 0;
    }
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    &:hover {
        box-shadow: 0 0 0 #000;
    }
    &:hover ${ButtonInside} {
        transform: translateY(0px);
    }
`




export default ({ invert=false, children, href='', ...p }) => {
    return (
        <ButtonContainer href={href} invert={invert} {...p} >
            <ButtonInside onClick={() => href} invert={invert}>Let's go</ButtonInside>
            {children}
        </ButtonContainer>
    )
}
