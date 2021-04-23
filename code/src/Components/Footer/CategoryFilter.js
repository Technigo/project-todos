import React from "react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";

import { todos } from "../../Reducers/todos";

export const CategoryFilter = () => {
    const dispatch = useDispatch();
    const categoryArr = [
        {name: "all", symbol:require("../../Assets/all.svg")},
        {name: "travel", symbol:require("../../Assets/travel.svg")},
        {name: "chores", symbol: require("../../Assets/chores.svg")}, 
        {name: "recipes", symbol:require("../../Assets/recipe.svg")},
        {name: "shopping", symbol:require("../../Assets/shopping.svg")},
        {name: "work", symbol:require("../../Assets/work.svg")},
        {name: "other", symbol:require("../../Assets/other.svg")}
      ];

      const handleClick = (name) => {
        dispatch(todos.actions.categorize({categorizeBy: name }))
      }

    return ( <Categories>
        {categoryArr.map(category =>
            <Button onClick={() => handleClick(category.name)}><Image src={category.symbol} /></Button>)}
    </Categories>)
}

const Categories = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
height: 30px;
`

const Button = styled.button `
padding: 0;
width: 30px;
font-size: 20px;
background: transparent;
border: none;
border-radius: 5px;`

const Image = styled.img `
object-fit: cover;
filter: invert(58%) sepia(5%) saturate(3064%) hue-rotate(145deg) brightness(95%) contrast(95%);
height: 100%;`