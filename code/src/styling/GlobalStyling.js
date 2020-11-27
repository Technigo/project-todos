import styled from 'styled-components';

// Wrappers ----------------------------------------------------------------

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #eae0ff;
  opacity: 0.8;
  z-index: 1;
`;

export const TaskWrapper = styled(InnerFlexWrapper)`
  max-width: 600px;
  margin: 15px 20px;
  padding: 15px;

  // Set border to purple if task is prioritized
  border: 2px solid ${(props) => (props.important ? '#4300CA' : 'transparent')};
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  & input:hover {
    cursor: pointer;
  }

  & label:hover {
    cursor: pointer;
  }
`;

// Text ----------------------------------------------------------------
export const InfoText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  text-transform: uppercase;
  opacity: 0.7;
`;

// Buttons ----------------------------------------------------------------
export const Button = styled.button`
  height: 30px;
  width: 30px;
  padding: 5px;
  border-radius: 25px;
  border: none;
  background: #f5f1fc;
  color: #4300ca;

  &:hover {
    cursor: pointer;
    background: #4300ca;
    color: #fff;
  }
`;

export const AddTaskButton = styled(Button)`
  width: 90px;
  height: 90px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background: #4300ca;
  color: #fff;
  font-size: 40px;
  z-index: 2;
`;
