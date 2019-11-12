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
                <Button href={DOCS_LINK}>Quick Start</Button>
            </Hero>
            <Line/>
            <Section>
                <Head>
                    Serve your MongoDb via Graphql with a one file configuration
                </Head>
                <Steps>
                    <Steps.Step
                        icon={<FileText width='90px' />}
                        title='Write the yaml config'
                        description=''
                    />
                    <Steps.Step
                        icon={<Database width='90px' />}
                        title='Connect to Database'
                        description=''
                    />
                    <Steps.Step
                        icon={<UploadCloud width='90px' />}
                        title='Deploy with Docker'
                        description=''
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
                        icon={<Shield width='90px' />}
                        title='Authorization with Jwt'
                        description='You decide what field a user has access to, based on the jwt payload and the document requested'
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
                </FeatureList>
            </Section>
            
            <Section>
                <Head>Features</Head>
                <Feature
                    title='Model your db types'
                    description={`
                    The configuration describe the db types and connects these to associated collections
                    The types should represent the objects in the database as close as possible
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code language='yaml' code={codeSchema} />
                    }
                />
                <Feature
                    right
                    title='Authorization with your jwt'
                    description={`
                    You can add python expressions that evaluates to true if you want an user access a resources. The expression is evaluated with the jwt payload data and document data.
                    The expression are written in Python and evaluated from top down until one evaluates to true
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Row><Code language='yaml' code={codeTypes} /></Row>}
                />
                <Feature
                    
                    title='Relations between types'
                    description={`
                    Relations are described in the configuration via a query object that will be sent to mongodb, this can evaluate expressions based on the parent component.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Code   language='yaml' code={codeRelations} />}
                />
                <Feature
                    right
                    title='Compose your database graphql with other services'
                    description={`
                    Thanks to Apollo federation the mongoke generated service is composable with other graphql services, you can handle mutations and more specific logic in differnt services.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<img width='300px' src={require('./network.png')} style={{opacity: .9}} />}
                />

            </Section>
            <Footer
                columns={{
                    Docs: (
                        <>
                            <a href={DOCS_LINK}>Quick start</a>
                        </>
                    ),
                    Socials: (
                        <>
                            <a href={TWITTER_LINK}>Twitter</a>
                            <a href={GITHUB_LINK}>Github</a>
                        </>
                    )
                }}
            />
        </Provider>
    )
}

export default App
// render(<App />, document.getElementById('root'))