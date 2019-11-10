import { Hero, GlobalStyle, Section, Steps, Feature } from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image } from 'hybrid-components'
import { Head, SubHead } from '../src/Text'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero>
                <img
                    width={300}
                    src='https://fasttext.cc/img/fasttext-logo-color-web.png'
                />
                <Head>HEAD</Head>
                <SubHead>Sotto head</SubHead>
            </Hero>
            <Section>
                <Head>How it Works</Head>
                <Steps>
                    <Steps.Step title='uno' description='prima cosa' />
                    <Steps.Step title='due' description='sec cosa' />
                    <Steps.Step title='tre' description='ultima cosa' />
                </Steps>
            </Section>
            <Section>
                <Head>Features</Head>
                <Feature
                    title='model'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg'
                />
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
