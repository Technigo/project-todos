import styled from 'styled-components'

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
`;

export const Container = styled.section`
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

export const CategoryDateContainer = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

