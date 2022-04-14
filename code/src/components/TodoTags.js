import React from "react";
import styled from 'styled-components';

    const Tags = styled.div `
        margin: 0 0 15px 0;

    `

    const Tag = styled.span`
        background-color: #ffff00;
        margin: 0 4px 0 0;
        padding: 2px 3px;
        font-size: 0.9rem;
        &:hover {
            cursor: pointer;
            background-color: #40e0d0;
        }
    `

const TodoTags = ({ tags }) => {
    
    console.log('tags', tags);

    return (

            <Tags>
                {tags.map((tag, index) => (
                    <Tag key={'tag'+index}>
                        {tag}
                    </Tag>
                ))}
            </Tags>
        
    );
}

export default TodoTags;