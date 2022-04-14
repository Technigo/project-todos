import React from 'react';
import styled from 'styled-components'

const StyledHeader=styled.div`
h1{text-align:center;}

`

export const Header=()=>{
return(
    <StyledHeader>
<div>
<h1>TODAYS TODOS</h1>
</div>
</StyledHeader>
)
}