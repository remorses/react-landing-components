import React, { FC } from 'react'
import { Box } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { layout, space } from 'styled-system'
import { BoxProps } from 'hybrid-components/src/types'

interface Theme {
    color: string
    bg: string
    gradients: string[]
}

const Styler = styled.div<{ theme: Theme }>`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Source%20Code%20Pro');

    color: ${(p) => p.theme.color || 'black'};
    background: ${(p) => p.theme.bg || 'white'};
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    ${(p) =>
        p.theme.gradients.length
            ? 'background-image: repeating-linear-gradient(' +
              [...p.theme.gradients, p.theme.gradients[0]].join(', ') +
              ');'
            : ''}
`

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
}
& * {
        box-sizing: border-box;
    }
`

export const Provider = ({
    color = 'black',
    bg = 'white',
    gradients = [] as string[],
    children
}) => {
    const theme = {
        color,
        bg,
        gradients
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Styler>{children}</Styler>
        </ThemeProvider>
    )
}

export const Line: FC<any> = styled.div`
height: 2px;
background: ${p => p.theme.color};
width: 70%;
margin: 0 auto;
opacity: .1;
`

export * from './Text'

export const Logo: FC<BoxProps & { src: string }> = (p) => {
    return (
        <Box {...p}>
            <img src={p.src} width='100%' />
        </Box>
    )
}

export { default as Hero } from './Hero'
export { default as SignupForm } from './Signup'
export { default as NavBar } from './NavBar'
export { default as Footer } from './Footer'
export { default as FeatureList } from './FeatureList'
export { default as Button } from './Button'
export { default as Code } from './Code'
export { default as Section } from './Section'
export { default as Steps } from './Steps'
export { default as Feature } from './Feature'
