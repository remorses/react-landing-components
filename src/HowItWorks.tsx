import { Box, Row, Text } from 'hybrid-components'

import React from 'react'

export interface Step {
    title: string
    description?: string
    icon: any
}

const Arrow = () => {
    return (
        <svg width='100px' height='60px' viewBox='0 0 80 16' version='1.1'>
            <title>up-arrow</title>
            <desc>Created with Sketch.</desc>
            <g
                id='Page-1'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
            >
                <g
                    id='Desktop-HD'
                    transform='translate(-487.000000, -1257.000000)'
                    fill='#000000'
                >
                    <g
                        id='up-arrow'
                        transform='translate(526.737684, 1265.873961) rotate(88.000000) translate(-526.737684, -1265.873961) translate(519.237684, 1226.373961)'
                    >
                        <path
                            d='M14.963759,13.3467253 C13.9472391,8.4615876 11.3333308,4.27432671 8.13855399,0.505563851 C7.41223107,-0.331888327 5.9600598,-0.0525095364 5.37919129,0.784942641 C2.76528299,5.25135426 0.587026073,10.136492 0.00615756193,15.3005523 C-0.139059566,16.8358813 2.3296316,16.9756847 2.62006586,15.5799311 C3.63658575,11.8113963 5.08875703,8.18220881 6.97657969,4.6930528 C7.70266533,5.67008034 8.42898825,6.78668325 9.00985676,7.90328615 C7.99333687,6.92625861 5.66962554,7.3449847 5.66962554,9.15946442 C5.52440841,31.9102486 0.15137469,55.3586815 4.36267139,77.830543 C4.65310565,79.6450227 7.84788246,79.2262966 7.70266533,77.4118169 C5.81484267,54.5214574 9.44550814,32.050052 9.59072527,9.15946442 C9.59072527,9.01988905 9.59072527,8.88031369 9.59072527,8.88031369 C10.462028,10.555218 11.0426593,12.2301224 11.4785479,14.1841775 C11.7692195,16.4173833 15.3994104,15.5799311 14.963759,13.3467253 Z'
                            id='Path'
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

const HowItWorks = ({ steps = [] }: { steps: Step[] }) => {
    return (
        <Row
            justifyContent='center'
            width='auto'
            flexWrap='wrap'
            alignItems='flex-start'
        >
            {steps.map((data, i) => {
                return (
                    <Row
                        width='auto'
                        alignItems='center'
                        justifyContent='center'
                        flex='1 1'
                    >
                        {i !== 0 && (
                            <Box width='auto' display={['none', 'block']}>
                                <Arrow />
                            </Box>
                        )}
                        <Box
                            key={data.title}
                            alignItems='center'
                            my='60px'
                            mx='40px'
                        >
                            <Text
                                width='auto'
                                textAlign='center'
                                // fontWeight='bolder'
                                fontSize='24px'
                                my='10px'
                            >
                                {data.title}
                            </Text>
                            {data.icon}
                        </Box>
                    </Row>
                )
            })}
        </Row>
    )
}

export default HowItWorks
