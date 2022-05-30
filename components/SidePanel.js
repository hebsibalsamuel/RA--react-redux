import React from 'react'
import styled from 'styled-components'
import { color, flexbox, border, layout,space } from 'styled-system'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { selectRange } from '../redux/productsRedux';


const Box = styled.div`
${flexbox};
${border};
${color};
${layout};
${space};
`
const FlexBox = styled(Box)`
display:flex;
`
const Button = styled.button`
    padding: 5px;
    border: none;
    background: none;
    margin-right: 5px;
    font-family:'Montserrat';
    font-weight: 600;
    font-size: 12px;
`
const Title = styled.h2`
font-size: 20px;
`
const SubTitle = styled.h3`
font-size: 12px;
margin-top: 65px;
`

const Text = styled.p`
font-size: 12px;
`

const SidePanel = () => {
    const selectedProduct = useSelector(state => state.products.selectedProduct)
    const isPremium = useSelector(state => state.products.isPremium)
    const dispatch = useDispatch()


    return (
        <Box flex='1'  borderLeft='0.5px solid gray' borderColor = 'gray' >
            <FlexBox flexDirection='column' height='100%'>
                <FlexBox height='10%' borderBottom='0.5px solid gray' borderColor = 'gray' alignItems='center' justifyContent='end'>
                    <Button>Help</Button>
                    <Button>Settings</Button>
                    <Button>
                        <AccountCircleOutlinedIcon/>
                    </Button>
                </FlexBox>
                <Box height='90%' p= '12px'>
                    <Title> Fixtures</Title>
                    <SubTitle>PACKAGE</SubTitle>                    
                    <FlexBox p ='0px 10px 0px 10px' border=' 0.5px solid' borderColor = 'gray' justifyContent='space-between' mt='10px'
                    >
                        <Text>Premium</Text>
                        <Text>{`$ 0`}</Text>
                    </FlexBox>
                    <FlexBox p ='0px 10px 0px 10px' border=' 0.5px solid' borderColor = 'gray' justifyContent='space-between' mt='10px'>
                        <Text>Luxury</Text>
                        <Text>{`$ ${selectedProduct.luxury}`}</Text>
                    </FlexBox>

                </Box>
            </FlexBox>
        </Box>
    )
}

export default SidePanel