import React from 'react'
import { Box, Text, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'
import { space } from 'styled-system'

const Container = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 40px;
    padding-bottom: 0;
    overflow: hide;
`
const Part = (p) => (
    <Box p='60px' minHeight='300px' alignItems='center' overflow='hidden' width={[1, 1, 0.5, 0.5, 0.5]} {...p} />
)

const Paragraphs = ({ children }) => {
    return (
        <>
            {children.split('\n').map((x) => (
                <Text
                    key={x}
                    textAlign='left'
                    fontSize='16px'
                    opacity={0.7}
                    my='20px'
                    letterSpacing='.08em'
                    lineHeight='20px'
                >
                    {x}
                </Text>
            ))}
        </>
    )
}

export default ({ image = <img />, title, description, right = false }) => {
    const a = (
        <Part>
            <Text textAlign='center' fontWeight='bold' fontSize='32px'>
                {title}
            </Text>
            {/* <Box height='40px' /> */}
            <Paragraphs>{description}</Paragraphs>
        </Part>
    )
    const b = <Part>{React.cloneElement(image, {width: '300px'})}</Part>
    const content = [b, a]
    const direction = right ? 'row' : 'row-reverse'
    return (
        <Box
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            width={1}
            maxWidth='900px'
            flexDirection={direction}
        >
            {content}
        </Box>
    )
}
