import styled from "styled-components/macro";

export const HeaderContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 20px 0;
  @media (min-width: 764px) {
    max-width: 800px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: 20px;
    box-shadow: 5px 5px 5px #efefef;
  }
`;
export const TitleContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  margin: 10px;
  font-size: 30px;
  width: 100%;
  margin: 0;
  font-weight: 900;
  color: Blue;
  background-color: white;
  border-radius: 15px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 100%;
  background-color: blue;
`;

export const CategoryTitle = styled.h1`
  margin: 20px 10px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 15px;
`;

export const FilterButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 2px 2px 10px 2px black;
  color: black;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 10px;
`;
