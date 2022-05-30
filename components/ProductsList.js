import React from 'react'
import styled from 'styled-components'
import { color, flexbox, border, background, space, typography, layout,position } from 'styled-system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct,openDialog } from '../redux/productsRedux';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';



const Box = styled.div`
${flexbox};
${border};
${color};
${layout};
${space};
${position};
`
const Img = styled.img`
${position};
width:100%;
height:70%;
`
const Text = styled.p`
${border};
${space};
text-align: center;
`

const FlexBox = styled(Box)`
display:flex;
`
const Icons = styled.button`
${space};
${border};
background:white;
font-family:'Montserrat';
`

const ProductsList = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <Box flex='3' >
            <FlexBox flexDirection='column' height='100%' p='10px' >
                <FlexBox alignItems='center'>
                    <FlexBox width='100%' >
                        <Icons border='none'><ArrowBackIcon sx={{ color: 'gray' }} /></Icons>
                        <Icons marginLeft='auto' border='0.5px solid' p='7px' mr='10px' borderColor='gray'>GALLERY</Icons>
                        <Icons border='0.5px solid' borderColor='gray' p='7px'>UNREAL</Icons>
                        <Icons border='none' ><ShareIcon sx={{ color: 'gray' }} /></Icons>
                    </FlexBox>
                </FlexBox>
                <FlexBox flexWrap='wrap'>
                    {
                        products.products.map(product =>
                            <FlexBox key={product.id} flexWrap='wrap' width='300px' height='350px' p='10px' flexDirection='column' onClick={() => dispatch(selectProduct(product))}>
                                <Img src={product.image} position='relative'></Img>
                                <Box  position='absolute'>
                                    <EditOutlinedIcon onClick={() => dispatch(openDialog(product))}></EditOutlinedIcon>
                                </Box>
                                <Box>
                                    <Text>{product.name}</Text>
                                </Box>
                                <Box>
                                    <Text m='0px'>{product.headline}</Text>
                                </Box>
                            </FlexBox>
                        )
                    }
                </FlexBox>
            </FlexBox>
        </Box>
    )
}

export default ProductsList