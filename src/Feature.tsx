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

const Part = (p) => (
    <Box
        px='60px'
        justifyContent='space-evenly'
        minHeight='300px'
        alignItems='center'
        // overflow='hidden'
        width={[1, 1, 0.5, 0.5, 0.5]}
        {...p}
    />
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
            <Text textAlign='left' fontWeight='bold' fontSize='32px'>
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
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                width={1}
                maxWidth='1100px'
                flexDirection={direction}
                my='20px'
            >
                {[a, b]}
            </Box>
        </Box>
    )
}
