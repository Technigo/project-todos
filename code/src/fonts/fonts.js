import { createGlobalStyle } from 'styled-components'

import FauneRegularWoff from './faune-regular.woff'
import FauneRegularWoff2 from './faune-regular.woff2'
import IbmPlexMonoWoff from './ibm-plex-mono.woff'
import IbmPlexMonoWoff2 from './ibm-plex-mono.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Faune';
        src: local('Faune'), local('Faune'),
        url(${FauneRegularWoff2}) format('woff2'),
        url(${FauneRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ibm Plex Mono';
        src: local('Ibm-plex-mono'), local('Ibm-plex-mono'),
        url(${IbmPlexMonoWoff2}) format('woff2'),
        url(${IbmPlexMonoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;