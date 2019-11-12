import React, { useContext } from 'react'
import { Box, H1, H2, Row } from 'hybrid-components'
import styled, { ThemeContext } from 'styled-components'

const Styler = styled.div`
    display: inline-block;
    width: auto;
    & a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        margin: 10px 40px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`

export default ({ children, color = '' }) => {
    const theme = useContext(ThemeContext)
    const style = {
        color: color || theme.color,
        background: theme.color
    }
    return (
        <Box
            height='60px'
            alignItems='flex-end'
            justifyContent='center'
            style={style}
        >
            <Styler>
                <Row mx='40px' width='auto' justifyContent='flex-end'>{children}</Row>
            </Styler>
        </Box>
    )
}
