import React from 'react'
import { Box, Text, H1, H2 } from 'hybrid-components'
import styled from 'styled-components'
import { space } from 'styled-system'

const Paragraphs = ({ children, right=false }) => {
    return (
        <>
            {children
                .split('\n')
                .filter((x) => x)
                .map((x) => (
                    <Text
                        key={x}
                        maxWidth='400px'
                        // textAlign={right ? 'right' : 'left'}
                        textAlign='left'
                        fontSize='16px'
                        opacity={0.7}
                        my='10px'
                        letterSpacing='.04em'
                        lineHeight='20px'
                    >
                        {x}
                    </Text>
                ))}
        </>
    )
}

const Part = ({children, ...p}) => (
    <Box
        // px='60px'
        alignItems='center'
        // overflow='hidden'
        // width={[1, 1, 0.5, 0.5, 0.5]}
        width='auto'
        {...p}
    >
        <Box 
                justifyContent='space-evenly'
                alignItems='flex-start'
                minHeight='300px'
                width='100%'
        >{children}</Box>
    </Box>
)

export default ({
    bg = 'none',
    image = <img />,
    title,
    description,
    right = false
}) => {
    const a = (
        <Part key='1'>
            <Text textAlign='left' fontWeight='bold' fontSize='32px' maxWidth='400px'>
                {title}
            </Text>
            {/* <Box height='40px' /> */}
            <Paragraphs right={right}>{description}</Paragraphs>
        </Part>
    )
    const b = <Part key='2'>{React.cloneElement(image, {  })}</Part>

    const direction = right ? 'row' : 'row-reverse'
    return (
        <Box bg={bg} alignItems='center' my='40px'>
            <Box
                flexDirection={direction}
                flexWrap='wrap'
                alignItems='center'
                justifyContent='space-evenly'
                width={1}
                maxWidth='1100px'
                my='20px'
            >
                {[a, b]}
            </Box>
        </Box>
    )
}
