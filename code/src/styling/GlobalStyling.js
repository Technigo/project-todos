import styled from 'styled-components';

// Wrappers ----------------------------------------------------------------

export const Wrapper = styled.div`
  margin: 20px 20px;
`;

export const InnerFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OuterFlexWrapper = styled.div`
  margin: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #eae0ff;
  opacity: 0.8;
  z-index: 1;
`;

// -------------------------------

export const TaskWrapper = styled(InnerFlexWrapper)`
  padding: 15px;
  border-radius: 10px;

  border: 2px solid ${(props) => (props.important ? '#4300CA' : 'transparent')};
  background: #fff;
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

export const NewTodoWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 77%;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background: #fff;
  color: #000;
  border: 2px solid #fff;

  @media (min-width: 350px) {
    flex-direction: column;
  }

  & input {
    background: transparent;
  }
`;

// Text ----------------------------------------------------------------
export const InfoText = styled.p`
  font-size: 10px;
  margin-top: 5px;
  text-transform: uppercase;
  opacity: 0.7;
`;

// Buttons ----------------------------------------------------------------
export const Button = styled.button`
  background: none;
  border-radius: 25px;
  padding: 5px;
  height: 30px;
  width: 30px;
  border: none;
  /* border: 1px solid #000; */
  background: #f5f1fc;
  color: #4300ca;

  &:hover {
    cursor: pointer;
  }
`;

export const TaskDragImage = styled.img`
  width: 20px;
`;

export const AddTaskButton = styled(Button)`
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: none;
  background: #4300ca;
  color: #fff;
  width: 90px;
  height: 90px;
  font-size: 40px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

// Footer -------------------------------
export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 50px 0 30px 0;

  & p {
    font-size: 10px;
    margin: 5px;
  }
`;
