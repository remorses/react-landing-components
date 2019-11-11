import React, {  } from 'react'
import { Box } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

interface Theme {
    color: string
    bg: string
}

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    * { box-sizing: border-box; }
    
    body {
        color: ${(p) => p.theme.color || 'black'};
        background: ${(p) => p.theme.bg || 'white'};
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`

export const Provider = ({ color = 'black', bg='white', children }) => {
    const theme = {
        color,
        bg
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export * from './Text'


export const Logo = styled.img`
    margin: 20px;
`

export { default as Hero } from './Hero'
export { default as Button } from './Button'
export { default as Code } from './Code'
export { default as Section } from './Section'
export { default as Steps } from './Steps'
export { default as Feature } from './Feature'
