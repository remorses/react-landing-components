import { Box, Row, Text } from 'hybrid-components'
import React, { ReactNode, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import Color from 'color'

const Styler = styled.div`
    display: inline-block;
    width: auto;
    & a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-size: 14px;
        font-weight: normal;
        cursor: pointer;
        opacity: 0.7;
        margin: 10px 0;
        :hover {
            text-decoration: underline;
        }
    }
`

export default ({
    columns = {} as { [k: string]: ReactNode },
    businessName = 'Monster Inc.'
}) => {
    const theme = useContext(ThemeContext)
    const isLight = Color(theme.color).isLight()
    const style = {
        color: 'white',
        background: isLight ? 'black' : theme.color
    }
    return (
        <Box minHeight='200px' alignItems='space-evenly' style={style}>
            <Styler>
                <Row
                    flexWrap='wrap'
                    mx='40px'
                    width='auto'
                    justifyContent='space-evenly'
                >
                    {Object.keys(columns).map((k) => {
                        return (
                            <Box key={k} mx='40px' my='40px' width='auto'>
                                <Text
                                    my='10px'
                                    fontSize='16px'
                                    fontWeight='bold'
                                    width='auto'
                                    textAlign='left'
                                >
                                    {k}
                                </Text>
                                {columns[k]}
                            </Box>
                        )
                    })}
                </Row>
                <Row justifyContent='center' my='10px'>
                    <Text
                        width='auto'
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='14px'
                    >
                        Copyright © 2019 {businessName}{' '}
                    </Text>
                </Row>
            </Styler>
        </Box>
    )
}
