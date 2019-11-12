import {
    Hero,
    Section,
    Steps,
    Feature,
    Logo,
    Button,
    Provider,
    Code,
    FeatureList,
    Head,
    SubHead,
    NavBar,
    Footer
} from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image, Text, Box, Row } from 'hybrid-components'
import { Archive, Airplay, Aperture } from 'styled-icons/feather'

const codeStr = `
schema: |
    type User {
        _id: ObjectId
        username: String
        email: String
    }
    type BlogPost {
        _id: ObjectId
        author_id: ObjectId
        title: String
        content: String
    }

types:
    User:
        collection: users
    BlogPost:
        collection: posts

relations:
    - field: posts
      from: User
      to: BlogPost
      relation_type: to_many
      where:
          author_id: $\{{ parent['_id'] }}
`

const codeSchema = `
schema: |
    type User {
        _id: ObjectId
        username: String
        email: String
    }
    type BlogPost {
        _id: ObjectId
        author_id: ObjectId
        title: String
        content: String
    }
...
`

const codeTypes = `
types:
    User:
        collection: users
    BlogPost:
        collection: posts
`

const codeRelations = `
relations:
    - field: posts
      from: User
      to: BlogPost
      relation_type: to_many
      where:
          author_id: $\{{ parent['_id'] }}
`

const App = () => {
    return (
        <Provider
            color='rgb(15,52,74)'
            bg='#eee'
            gradients={['#ffeae8', '#f1efff']}
        >
            <NavBar color='white'>
                <a href='/docs'>Docs</a>
                <a href='https://github.com/remorses/mongoke'>Github</a>
            </NavBar>
            <Hero>
                <Logo
                    width={['100%', null, '800px']}
                    src={require('./mongoke.svg')}
                />
                <Head fontSize='60px'>Mongoke</Head>
                <SubHead>instant Graphql on MongoDb</SubHead>
                <Button href='/docs'>Read The Docs</Button>
            </Hero>
            <Section>
                <Head>
                    Generate a state of the art graphql service from a one file
                    configuration
                </Head>
                <Row flexWrap='wrap' justifyContent='center'>
                    <Code
                        
                        language='yaml'
                        code={codeStr}
                    />
                    <Code
                        light
                        
                        language='yaml'
                        code={codeStr}
                    />
                </Row>
            </Section>
            <Section>
                <Head>All the graphql best pratices built in</Head>
                {/* <SubHead>
                </SubHead> */}
                <FeatureList>
                    <FeatureList.Feature
                        icon={<Archive width='90px' />}
                        title='Powerful queries for all your data'
                        description='The generated queries follow the mongodb query model, you can do gt, lt, eq, ...'
                    />
                    <FeatureList.Feature
                        icon={<Airplay width='90px' />}
                        title='Relay style pagination'
                        description='Pagination is implemented following the relay style, cursors are available for every field'
                    />
                    <FeatureList.Feature
                        icon={<Airplay width='90px' />}
                        title='Apollo Federation compliant'
                        description='You can compose other services together without any effort'
                    />
                    <FeatureList.Feature
                        icon={<Airplay width='90px' />}
                        title='Easy deploy via Docker'
                        description='Lightweight image using docker, generates the service on every deploy in couple of seconds'
                    />
                </FeatureList>
            </Section>
            <Section>
                <Head>How it Works</Head>
                <Steps>
                    <Steps.Step
                        icon={<Archive width='90px' />}
                        title='Write the yaml config'
                        description='prima cosa'
                    />
                    <Steps.Step
                        icon={<Airplay width='90px' />}
                        title='Connect to Database'
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
                    title='Model your db types'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code language='yaml' code={codeSchema} />
                    }
                />
                <Feature
                    right
                    title='Add authorization and connect to database'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Code language='yaml' code={codeTypes} />}
                />
                <Feature
                    
                    title='Add relations'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Code   language='yaml' code={codeRelations} />}
                />
            </Section>
            <Footer
                columns={{
                    Docs: (
                        <>
                            <a>Getting Started</a>
                            <a>Flexing</a>
                        </>
                    ),
                    Socials: (
                        <>
                            <a>Twitter</a>
                            <a>Github</a>
                        </>
                    )
                }}
            />
        </Provider>
    )
}

export default App
// render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
