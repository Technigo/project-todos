// globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;    
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center;
  }

  button {
    border: solid;
    padding: 2px;
    margin:5px;
  }


.todo{
  border:solid;
  border-color: black;
  margin:20px;
  padding:15px;
  display: flex;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.wrapper,
.card,
.task {
  display: block;
  border: solid;
  border-color: linear-gradient(135deg, rgb(245, 203, 255) 10%, rgb(195, 70, 194) 100%);
  margin: 60px;
  border-radius: 20px;
  background: linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%);
}

section {
  margin-top:20px;
}

.new-task {
  padding:20px;
}
`;

