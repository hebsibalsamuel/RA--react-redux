import styled from 'styled-components'
import { color, flexbox, typography,border,space } from 'styled-system'
import ProductDialog from '../components/ProductDialog'
import ProductFooter from '../components/ProductFooter'
import ProductsList from '../components/ProductsList'
import SidePanel from '../components/SidePanel'
import React, { useEffect } from 'react';
import useFetchFixtures from '../hooks/useFetchData';
import { useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../redux/productsRedux'



const Box = styled.div`
  ${color};
  ${flexbox};
  ${typography};
  `
const Text = styled.p`
${border};
${space};
${typography};
`

const FlexBox = styled(Box)`
display:flex;
`


const Products = () => {
  const { data, loading } = useFetchFixtures();
  const dispatch = useDispatch()
  const openDialog = useSelector(state => state.products.openDialog)
  useEffect(()=>{
    if (data && data.fixtures && data.fixtures.length>=1) 
      dispatch(addProduct(data.fixtures))
  },[data,loading,dispatch])

  if (loading) {
    return (<Text fontFamily="primary" fontSize='30px' fontWeight='600' textAlign='center' paddingTop='20vh'>
      Loading...
    </Text>)
  }
  return (
    <>
      <Box fontFamily='Montserrat'>
        <FlexBox>
          <ProductsList></ProductsList>
          <SidePanel></SidePanel>
        </FlexBox>
        <ProductFooter></ProductFooter>
      </Box>
     { openDialog && <ProductDialog></ProductDialog>}
    </>   
  )
}
export default Products