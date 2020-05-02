import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/wallpaper.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
`;

export const AppContainer = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 1108px;
    border-radius: 20px;
    -webkit-box-shadow: -4px 4px 41px -16px rgb(207, 207, 209);
    -moz-box-shadow: -4px 4px 41px -16px rgb(207, 207, 209);
    box-shadow: -4px 4px 41px -16px rgb(207, 207, 209);

    @media (max-width: 500px){
    width: 95vw;
  }
`;

export const HeaderContainer = styled.header`
    background-image: url('./images/banner.png');
    background-size: cover;
    background-position-y: bottom;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;

    @media (max-width: 500px){
    min-height: 200px;
  }
`;

export const TasksContainer = styled.section`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
`;

export const TaskContainer = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

