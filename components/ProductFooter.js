import React from 'react'
import Controls from './Controls'
import Navbar from './Navbar'
import PriceDetails from './PriceDetails'
import styled from 'styled-components'
import {  flexbox ,layout,color,position   } from 'styled-system'




const FlexContainer = styled.div`
display:flex;
gap:1px;
${flexbox};
${color};
${position};
${layout}
`

const ProductFooter = () => {
    return (
        <>
            <FlexContainer width='100%' height='10vh' position='fixed' bottom='0'>
                <Navbar></Navbar>
                <PriceDetails></PriceDetails>
                <Controls></Controls>
            </FlexContainer>
        </>
    )
}

export default ProductFooter