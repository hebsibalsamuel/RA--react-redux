import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import styled from 'styled-components'
import { color, flexbox, border, background, space, typography, position, layout } from 'styled-system'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { closeDialog, selectRange } from '../redux/productsRedux';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Box = styled.div`
${flexbox};
${border};
${color};
${position};
${layout};
${background};
${space};

`

const FlexBox = styled(Box)`
display:flex;
`
const Text = styled.p`
${border};
${space};
${typography};
`
const Content = styled.span`
${typography};
`
const Img = styled.img`
object-fit:contain;
${layout};
`

const List = styled.ul`
padding:0px;
margin:0px;
list-style-type: none;
`

const ListItems = styled.li`
margin-bottom: 10px;
`



const ProductDialog = () => {
    const selectedProduct = useSelector(state => state.products.selectedProduct)
    const range = useSelector(state => state.products.isPremium)
    const dispatch = useDispatch()


    return (
        <>
            <FlexBox position="fixed" top='0' left='0' width='100%' height='90vh' backgroundColor='rgba(0,0,0,0.2)' zIndex='2' alignItems='center' justifyContent='center'>
                <FlexBox minWidth='50%' maxWidth='70%' minHeight='50%' maxHeight='80%' background='white' margin='0px 10px 0px 10px' overflow='auto'>
                    <FlexBox flex='2' flexDirection='column'>
                        <Text fontWeight='600'>BATHROOM FAUCET</Text>
                        <Text fontWeight='600' fontSize='14px'>Premium</Text>
                        <FlexBox onClick={() => dispatch(selectRange())}>
                            {
                                range ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />

                            }

                            <Img src={selectedProduct.image} width='90%' height='207px' ></Img>
                        </FlexBox>
                        <Text fontWeight='600' fontSize='14px'>Luxury</Text>
                        <FlexBox onClick={() => dispatch(selectRange())}>
                            {
                                !range ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />

                            }
                            <Img src={selectedProduct.luxuryImage} width='90%' height='207px'></Img>
                        </FlexBox>

                    </FlexBox>
                    <FlexBox flex='3' flexDirection='column' borderLeft='0.5px solid' borderColor='gray' pl='20px' height='100%'>
                        <FlexBox justifyContent='space-between' width='100%' alignItems='center'>
                            <Text fontSize='16px' fontWeight='600'>
                                {selectedProduct.name}
                            </Text>
                            <Text fontSize='16px' fontWeight='600' ml='auto'>
                                {range? `$0 Included` : `$ ${selectedProduct.luxury } Included`}
                            </Text>
                            <CloseOutlinedIcon onClick ={() => dispatch(closeDialog(selectedProduct))}
                            ></CloseOutlinedIcon>
                        </FlexBox>
                        <Box>
                            <Text fontSize='14px'>
                                {selectedProduct.headline}
                            </Text>
                        </Box>
                        <Box>
                            <List>
                                {
                                    Object.keys(selectedProduct.features).map(feature =>
                                        <ListItems key={feature}>
                                            <FlexBox justifyContent='space-between' width='80%'>
                                                <Content fontSize='12px'>{feature} </Content>
                                                <Content fontSize='12px'>{selectedProduct.features[feature]}</Content>
                                            </FlexBox>

                                        </ListItems>)

                                }

                            </List>
                        </Box>
                        <Text borderTop='0.5px solid' borderColor='gray' paddingTop='40px' fontSize='12px'>
                            {selectedProduct.description}
                        </Text>
                        <Img src={selectedProduct.demoImage} width='100%'></Img>
                    </FlexBox>
                </FlexBox>
            </FlexBox>

        </>
    )
}

export default ProductDialog