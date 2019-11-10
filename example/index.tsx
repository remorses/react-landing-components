import { Hero, GlobalStyle, Section } from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image } from 'hybrid-components'
import { Head, SubHead } from '../src/Text'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero>
                <img width={300} src='https://fasttext.cc/img/fasttext-logo-color-web.png'/>
                <Head>HEAD</Head>
                <SubHead>Sotto head</SubHead>
            </Hero>
            <Section>
               <Head>
                   How it Works
               </Head>
            </Section>
        </>
    )
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
