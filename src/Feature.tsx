import React from 'react'
import { Box, Text, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'
import { space } from 'styled-system'



const Paragraphs = ({ children }) => {
    return (
        <>
            {children.split('\n').filter(x => x).map((x) => (
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

const Part = (p) => (
    <Box px='60px' justifyContent='space-evenly' minHeight='300px' alignItems='center' overflow='hidden' width={[1, 1, 0.5, 0.5, 0.5]} {...p} />
)

export default ({ bg='none', image = <img />, title, description, right = false }) => {
    const a = (
        <Part>
            <Text textAlign='center' fontWeight='bold' fontSize='32px'>
                {title}
            </Text>
            {/* <Box height='40px' /> */}
            <Paragraphs>{description}</Paragraphs>
        </Part>
    )
    const b = <Part>{React.cloneElement(image, {width: '300px', })}</Part>
    
    const direction = right ? 'row' : 'row-reverse'
    return (
        <Box bg={bg} alignItems='center' my='40px'>
        <Box
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            width={1}
            maxWidth='900px'
            flexDirection={direction}
            my='20px'
        >
            {[a, b]}
        </Box>
        </Box>
    )
}
