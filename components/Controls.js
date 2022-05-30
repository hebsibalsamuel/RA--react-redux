import React from 'react'
import styled from 'styled-components'
import { color, flexbox, border, background, space, typography } from 'styled-system'

const Box = styled.div`
${flexbox};
${border};
${color};
display:flex;
align-items: center;
justify-content: space-around;
`
const Back = styled.div``

const Next = styled.div``

const Button = styled.button`
  ${color};
  ${border}; 
  ${background}; 
  ${space};
  ${typography};
  
`

const Controls = () => {
    return (
        <>
            <Box flex='1' bg='black' color='white'>
                <Back>
                    <Button background='black' border='none' color='white' fontFamily='Montserrat'>{`<  BACK`}</Button>
                </Back>
                <Next>
                    <Button border='none' p='15px 50px 15px 50px' fontFamily='Montserrat' fontWeight='600'>NEXT</Button>
                </Next>
            </Box>
        </>
    )
}

export default Controls