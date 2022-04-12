import React from 'react';
import moment from 'moment';
import { Text } from '@chakra-ui/react';

export const Date = () => {
    return (
        <Text color="RGBA(255, 255, 255, 0.97)" fontSize='xs'>
            {moment().calendar()}
        </Text>
    )
}

export default Date
