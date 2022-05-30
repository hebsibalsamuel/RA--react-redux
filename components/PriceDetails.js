import React from 'react'
import styled from 'styled-components'
import { color, flexbox, border, space, typography } from 'styled-system'
import { useSelector } from 'react-redux';


const Box = styled.div`
${flexbox};
${border};
${color};
display:flex;
justify-content:space-around;
text-align: end;
`
const BasePrice = styled.div`
${flexbox};
${border};
${color};
margin-right: 10px;
`
const Upgrades = styled.div`
${flexbox};
margin-right: 10px;
`
const Total = styled.div`
${flexbox};
margin-right: 10px;
font-weight: 700;
`
const Title = styled.p`
font-size: 10px;
margin:0;
margin-bottom: 5px;
margin-top: 10px;
`
const Amount = styled.p`
font-size: 12px;
margin:0;
`
const Currency = styled.p`
 margin:0;
 font-size: 7px;
`

const Text = styled.p`
${border};
${space};
`


const PriceDetails = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const isPremium = useSelector(state => state.products.isPremium)
  const total = selectedProduct.premium + selectedProduct.luxury;
  return (
    <>
      <Box flex='1' bg='black' color='white'>
        <BasePrice flex='1'>
          <Title>Base Price</Title>
          <Amount>{`$ ${selectedProduct.premium}`}</Amount>
          <Currency>CAD</Currency>
        </BasePrice>
        <Upgrades flex='1'>
          <Title>Upgrades</Title>
          {
            isPremium ? <Amount>{`$ 0`}</Amount>
              : <Amount>{`$ ${selectedProduct.luxury}`}</Amount>
          }
          <Currency>CAD</Currency>
        </Upgrades>
        <Total flex='1' >
          <Title>Total</Title>
          {
            isPremium ? <Amount>{`$ ${selectedProduct.premium}`}</Amount>
              : <Amount>{`$ ${total}`}</Amount>
          }          
          <Currency>CAD</Currency>
        </Total>

      </Box>
    </>
  )
}

export default PriceDetails