import React from 'react';
import Moment from 'moment';

import { Title } from 'styling/HeaderStyling';

const Header = () => {

    return <Title>{Moment().format("MMM Do YY")}</Title>   
}

export default Header;