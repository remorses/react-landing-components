import { Hero, Section, Steps, Feature, Logo, Button, Provider, Code } from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image, Text, Box } from 'hybrid-components'
import { Head, SubHead } from '../src/Text'
import { Archive, Airplay, Aperture } from 'styled-icons/feather'


const codeStr = `
cosa:
    x: Str
`


const App = () => {
    return (
        <Provider color='rgb(15,52,74)' bg='#eee'>
            <Hero color='white' bg='black'>
                <Logo width={800} src={require('./mongoke.svg')} />
                <Head>Mongoke</Head>
                <SubHead>instant Graphql on MongoDb</SubHead>
                <Button invert>Let's go</Button>
            </Hero>
            <Section>
                <Head>How it Works</Head>
                <Steps>
                    <Steps.Step
                        icon={<Archive width='90px' />}
                        title='Write your db schema'
                        description='prima cosa'
                    />
                    <Steps.Step
                        icon={<Airplay width='90px' />}
                        title='Connect to your MongoDb'
                        description='sec cosa'
                    />
                    <Steps.Step
                        icon={<Aperture width='90px' />}
                        title='Deploy with Docker'
                        description='ultima cosa'
                    />
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
                    image={
                        <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                    }
                />
                <Feature
                    right
                    title='model'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Airplay />}
                />
            </Section>
            <Section>
                <Head>
                    Simple comfiguration
                    <Code language='yaml' code={codeStr}/>
                    
                </Head>
            </Section>
        </Provider>
    )
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
