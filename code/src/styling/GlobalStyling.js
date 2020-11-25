import styled from 'styled-components';

export const CategoryImage = styled.img`
  width: 100px;
`;

// Wrappers ----------------------------------------------------------------
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 20px;
`;

export const MainWrapper = styled.div`
  margin: 20px 20px;
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  border: 1px solid ${(props) => (props.important ? 'red' : '#000')};

  /* border: 1px solid #000; */
  margin: 15px 0;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  & input:hover {
    cursor: pointer;
  }

  & label:hover {
    cursor: pointer;
  }
`;

export const NewTodoWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  background: #fff;
  padding: 20px;
  // transform: translateY(-200px);
  // transition: transform .5s ease;
`;

export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 50px 0 30px 0;

  & p {
    font-size: 10px;
    margin: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  border-radius: 25px;
  padding: 5px;
  height: 30px;
  width: 30px;
  border: none;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
  }
`;

export const TaskDragImage = styled.img`
  width: 20px;
`;

export const AddTaskButton = styled(Button)`
  position: fixed;
  top: 80%;
  right: 20px;
  border: none;
  background: #f5f0ea;
  color: #000;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
