import React from 'react'
import { Box,  } from 'hybrid-components'

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    * { box-sizing: border-box; }
  
    color: black;
    
    body { 
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`

export * from './Text'

export const Button = styled.a`
color: white;
background: blue;
padding: 5px 20px;
font-weight: bold;
font-size: 24px;
border-radius: 6px;
border-width: 0px;
margin: 20px;
cursor: pointer;
& :focus {
    opacity: 0;
    background: white;
}
& :hover {
    opacity: 0;
    background: white;
}
`

export const Logo = styled.img`
margin: 40px;
`

export { default as Hero } from './Hero'
export { default as Section } from './Section'
export { default as Steps } from './Steps'
export { default as Feature } from './Feature'
