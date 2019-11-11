import React, { FC } from 'react'
import { Box, H1, H2, Text } from 'hybrid-components'
import styled from 'styled-components'
import { BoxProps, TextProps } from 'hybrid-components/src/types'

export const Head: FC<TextProps> = (p) => {
    return (
        <Text
            fontSize='34px'
            fontWeight={600}
            my='10px'
            maxWidth={'800px'}
            textAlign='center'
            {...p}
        />
    )
}
export const SubHead: FC<TextProps> = (p) => {
    return (
        <Text
            fontSize='34px'
            fontWeight='normal'
            opacity={.8}
            my='10px'
            maxWidth={'800px'}
            textAlign='center'
            {...p}
        />
    )
}
