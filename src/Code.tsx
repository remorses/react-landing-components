import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

import styled from 'styled-components'
import { Box } from 'hybrid-components'

export const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;

    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }
`

export const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`

const Code = (p: { language: Language; code: string }) => {
    return (
        <Box overflow='hidden' borderRadius='10px' style={{ fontSize: '16px' }}>
            <Highlight {...defaultProps} theme={theme} {...p}>
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps
                }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </Pre>
                )}
            </Highlight>
        </Box>
    )
}

export default Code
