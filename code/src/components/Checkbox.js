/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'

const Styled = styled.main`
body {
    background:rgba(32, 43, 51, 1);
}
.label{
    display:block;

}    
h1{
    color:white;
}
.holder {
    width:400px;
    margin:0 auto;
}
.main {
    position:relative;
    display:block;
    width:100%;
    height:60px;
    background:#E0DCDC;
    overflow:hidden;
}
.main:not(:last-child){
    border-bottom:2px solid white;
}
.check {
    width:50px;
    height:50px;
    position:absolute;
    opacity:0;
}
.label span {
    position:absolute;
    margin-top:15px;
}
.path1{
    stroke-dasharray:400;
    stroke-dashoffset:400;
    transition:.5s all;
}
.path2{
    stroke-dasharray:1800;
    stroke-dashoffset:1800;
    transition:.5s all;
}
.check:checked + label svg g path {
    stroke-dashoffset:0;
}

label{
    position:absolute;
    left:0;
    margin-top:20px
}

span{
    margin-top:-50px;
    margin-left:50px
}
 
`

export const Checkbox = () => {
  return (
    <Styled className="main">
      <div> checkboxhidden</div>
    </Styled>
  )
}
