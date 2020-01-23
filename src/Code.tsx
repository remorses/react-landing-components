import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import themeDark from 'prism-react-renderer/themes/palenight'
import themeLight from 'prism-react-renderer/themes/duotoneLight'

import styled from 'styled-components'
import { Box } from 'hybrid-components'
import { BoxProps } from 'hybrid-components'

export const Pre: FC<any> = styled.pre`
    text-align: left;
    display: inline-block;
    margin: 1em 0;
    padding: 0.5em;
    padding-right: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    letter-spacing: -.04em;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, .1);
    font-family: 'Source Code Pro', monospace;
    font-style: normal;
    font-weight: 400;

    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }
`

export const LineNo: FC<any> = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`

const Code = (p: {light?: boolean, language: Language; code: string } & BoxProps) => {
    return (
        <Box
            width='auto'
            style={{ fontSize: '16px', }}
            m='40px'
            {...p}
        >
            <Highlight {...defaultProps} theme={!p.light ? themeDark : themeLight} {...p}>
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps
                }) => (
                    <Pre  className={className} style={style}>
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
