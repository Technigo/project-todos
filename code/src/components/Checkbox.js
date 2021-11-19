import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import todos from '../reducers/todos';


const CheckboxWrapper = styled.div`
margin-left: 10%;
display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	max-width: 50px;
	min-width: 20px;
	height: 20px;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-flex: 1;
	    -ms-flex: 1;
	        flex: 1;

            /* background: #eee; */
            display: inline-block;
    margin-right: 20px;
`;
const Input = styled.input`
font-size: 15px;
	-webkit-appearance: none;
	   -moz-appearance: none;
	        appearance: none;
	width: 3.5em;
	height: 1.5em;
	background: #ddd;
	border-radius: 3em;
	position: relative;
	cursor: pointer;
	outline: none;
	-webkit-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;

    :checked{
	background: #0ebeff;
    }
    :after{
	position: absolute;
	content: "";
	width: 1.5em;
	height: 1.5em;
	border-radius: 50%;
	background: #fff;
	-webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
	        box-shadow: 0 0 .25em rgba(0,0,0,.3);
	-webkit-transform: scale(.7);
	        transform: scale(.7);
	left: 0;
	-webkit-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;

  }
  :checked:after{
	left: calc(100% - 1.5em);
  }
`;

const Checkbox = (props) => {
    const dispatch = useDispatch();

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id));
      };

    return (
        <CheckboxWrapper>
            <Input checked={props.isChecked ? "checked" : ""} onChange={() => onToggleTodo(props.todoId)} type="checkbox" />
        </CheckboxWrapper >
    )
}

export default Checkbox;