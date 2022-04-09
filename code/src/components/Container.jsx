import React from 'react';

import Input from 'components/Input';
import ToDoList from 'components/ToDoList';


const Container = () => {
    return (
        <section>
            <ToDoList />
            <Input />
        </section>
    )
}

export default Container;
