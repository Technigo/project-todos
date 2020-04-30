import { createGlobalStyle } from 'styled-components'

import BoskWoff from './bosk.woff'
import BoskWoff2 from './bosk.woff2'
import AvenirWoff from './avenir-next-light.woff'
import AvenirWoff2 from './avenir-next-light.woff2'
import AvenirRegularWoff from './avenir-next-regular.woff'
import AvenirRegularWoff2 from './avenir-next-regular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Bosk';
        src: local('Bosk'), local('Bosk'),
        url(${BoskWoff2}) format('woff2'),
        url(${BoskWoff}) format('woff');
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
