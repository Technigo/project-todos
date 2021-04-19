import { createGlobalStyle } from 'styled-components'

import FauneRegularWoff from './faune-regular.woff'
import FauneRegularWoff2 from './faune-regular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Faune';
        src: local('Faune'), local('Faune'),
        url(${FauneRegularWoff2}) format('woff2'),
        url(${FauneRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;