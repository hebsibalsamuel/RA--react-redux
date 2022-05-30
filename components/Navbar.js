import React from 'react'
import styled from 'styled-components'
import { color, flexbox, border,typography } from 'styled-system'


const Box = styled.div`
${flexbox};
${border};
${color};
${typography};
`
const List = styled.ul`
margin:0px;
padding:0px;
list-style-type:none;
display: flex;
align-items: center;
height:100%;
`
const ListItems = styled.li`
margin-left: 20px;
cursor:pointer;
`


const Navbar = () => {
    return (
        <>
            <Box flex='2' bg='black' fontSize='12px' color='white'>
                <List>
                    <ListItems>
                        FLOOR PLAN
                    </ListItems>
                    <ListItems>
                        EXTERIOR
                    </ListItems>
                    <ListItems>
                        INTERIOR
                    </ListItems>
                    <ListItems>
                        FIXTURES
                    </ListItems>               

                </List>
            </Box>
        </>
    )
}

export default Navbar