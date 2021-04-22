import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Sidebar = () => {
    const categoryArr = [
        {name: "travel", symbol:""},
        {name: "chores", symbol:""}, 
        {name:"recipes", symbol:""},
        {name:"shopping", symbol:""},
        {name:"work", symbol:""},
        {name:"other", symbol:""}
      ];

    return ( <Categories>
        {categoryArr.map(category =>
            <Button>{category}</Button>)}
    </Categories>)
}

const Categories = styled.div`
position: fixed;
left: 0;
top: 50%;
width: 20px;
height: 100vh;
display: flex;
flex-direction: column;
`

const Button = styled.button `
`