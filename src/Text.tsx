import React, { FC } from 'react'
import { Text, TextProps } from 'hybrid-components'

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
            opacity={0.8}
            my='10px'
            maxWidth={'800px'}
            textAlign='center'
            {...p}
        />
    )
}
