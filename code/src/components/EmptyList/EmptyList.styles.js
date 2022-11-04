/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const EmptyListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: swivel-horizontal;
    animation-duration: 1s;

    @keyframes swivel-horizontal {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(360deg);
    }
  }


    h2 {
        color: #ede4e0;
    }

`