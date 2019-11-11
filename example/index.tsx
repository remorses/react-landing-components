import {
    Hero,
    GlobalStyle,
    Section,
    Steps,
    Feature,
    Logo,
    Button
} from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image } from 'hybrid-components'
import { Head, SubHead } from '../src/Text'
import { Archive, Airplay, Aperture } from 'styled-icons/feather'

import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero>
                <Logo
                    width={300}
                    src='https://fasttext.cc/img/fasttext-logo-color-web.png'
                />
                <Head>Unique source of truth for all your types</Head>
                <SubHead>Unique source of truth for all your types</SubHead>
                <Button>docs</Button>
            </Hero>
            <Section>
                <Head>How it Works</Head>
                <Steps>
                    <Steps.Step
                        icon={<Archive width='90px' />}
                        title='uno'
                        description='prima cosa'
                    />
                    <Steps.Step
                        icon={<Airplay width='90px' />}
                        title='due'
                        description='sec cosa'
                    />
                    <Steps.Step
                        icon={<Aperture width='90px' />}
                        title='tre'
                        description='ultima cosa'
                    />
                </Steps>
            </Section>
            <Section>
                <Head>Features</Head>
                <Feature
                    title='model'
                    bg='yellow'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={<img  src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg'/>}
                />
                <Feature
                    right
                    
                    title='model'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Airplay/>}
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
