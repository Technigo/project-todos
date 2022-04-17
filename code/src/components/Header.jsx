import React from 'react';

import TaskCounter from 'components/TaskCounter';



const Header = () => {
    return (
        <section>
            <h1 className='header'>TO DO LIST</h1>
            < TaskCounter />
        </section>
    );
};

export default Header;
