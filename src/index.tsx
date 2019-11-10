import React from 'react'
import { Box } from 'hybrid-components'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

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

export { default as Hero } from './Hero'
export { default as Section } from './Section'
export { default as Steps } from './Steps'
export { default as Feature } from './Feature'
