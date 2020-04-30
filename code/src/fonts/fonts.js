import { createGlobalStyle } from 'styled-components'

import AvenirWoff from './avenir-next-light.woff'
import AvenirWoff2 from './avenir-next-light.woff2'
import AvenirRegularWoff from './avenir-next-regular.woff'
import AvenirRegularWoff2 from './avenir-next-regular.woff2'
import Malina1Woff from './malina1.woff'
import Malina1Woff2 from './malina1.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Malina1';
        src: local('Malina1'), local('Malina1'),
        url(${Malina1Woff2}) format('woff2'),
        url(${Malina1Woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Avenir-Next-Light';
        src: local('Avenir-Next-Light'), local('Avenir-Next-Light'),
        url(${AvenirWoff2}) format('woff2'),
        url(${AvenirWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Avenir-Next-Regular';
        src: local('Avenir-Next-Regular'), local('Avenir-Next-Regular'),
        url(${AvenirRegularWoff2}) format('woff2'),
        url(${AvenirRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
