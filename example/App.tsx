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
    Footer,
    Line
} from '../src'
import React from 'react'
import { render } from 'react-dom'
import { H1, Image, Text, Box, Row } from 'hybrid-components'
import { Archive, Airplay, Aperture, ArrowRight, FileText, UploadCloud, Database, Lock, List, Activity, Grid, PackageIcon, Shield } from 'styled-icons/feather'
import {} from 'styled-icons/'

const DOCS_LINK = '/docs'
const GITHUB_LINK = 'https://github.com/remorses/mongoke'

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

const codeGraphql = `
{
    user(where: { username: { eq: "Mike" } }) {
        _id
        username
        email
        posts {
            nodes {
                title
            }
        }
    }

    blogPosts(first: 10, after: "Post 1", cursorField: title) {
        nodes {
            title
            content
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}
`

const App = () => {
    return (
        <Provider
            color='rgb(15,52,74)'
            bg='#eee'
            gradients={['#ffeae8', '#f1efff']}
        >
            <NavBar color='white'>
                <a href={DOCS_LINK}>Docs</a>
                <a href={GITHUB_LINK}>Github</a>
            </NavBar>
            <Hero>
                <Logo
                    width={['100%', null, '800px']}
                    src={require('./mongoke.svg')}
                />
                <Head fontSize='60px'>Mongoke</Head>
                <SubHead>instant Graphql on MongoDb</SubHead>
                <Button href={DOCS_LINK}>Read The Docs</Button>
            </Hero>
            <Line/>
            <Section>
                <Head>
                    Generate a state of the art graphql service from a one file
                    configuration
                </Head>
                <Steps>
                    <Steps.Step
                        icon={<FileText width='90px' />}
                        title='Write the yaml config'
                        description='prima cosa'
                    />
                    <Steps.Step
                        icon={<Database width='90px' />}
                        title='Connect to Database'
                        description='sec cosa'
                    />
                    <Steps.Step
                        icon={<UploadCloud width='90px' />}
                        title='Deploy with Docker'
                        description='ultima cosa'
                    />
                </Steps>

                <Row flexWrap='wrap' justifyContent='center' alignItems='center'>
                    <Code
                        
                        language='yaml'
                        code={codeStr}
                    />
                    <ArrowRight width='60px' opacity={.3}/>
                    <Code
                        light
                        language='yaml'
                        code={codeGraphql}
                    />
                </Row>
            </Section>
            <Section>
                <Head>All the graphql best pratices built in</Head>
                {/* <SubHead>
                </SubHead> */}
                <FeatureList>
                    <FeatureList.Feature
                        icon={<Database width='90px' />}
                        title='Powerful queries for all your data'
                        description='The generated queries follow the mongodb query model, you can do gt, lt, eq, ...'
                    />
                    <FeatureList.Feature
                        icon={<List width='90px' />}
                        title='Relay style pagination'
                        description='Pagination is implemented following the relay style, cursors are available for every field'
                    />
                    <FeatureList.Feature
                        icon={<Grid width='90px' />}
                        title='Apollo Federation compliant'
                        description='You can compose other services together without any effort'
                    />
                    <FeatureList.Feature
                        icon={<PackageIcon width='90px' />}
                        title='Easy deploy via Docker'
                        description='Lightweight image using docker, generates the service on every deploy in couple of seconds'
                    />
                    <FeatureList.Feature
                        icon={<Shield width='90px' />}
                        title='Authorization with Jwt'
                        description='Lightweight image using docker, generates the service on every deploy in couple of seconds'
                    />
                </FeatureList>
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
                    image={<Row><Code language='yaml' code={codeTypes} /></Row>}
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
                <Feature
                    right
                    title='Compose your database graphql with other services'
                    description={`
                    Thanks to Apollo federation the mongoke generated service is composable with other graphql services, to handle mutations and more specific logic
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<img width='300px' src={require('./network.png')} style={{opacity: .9}} />}
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
