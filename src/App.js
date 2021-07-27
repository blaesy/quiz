import './App.css';
import styled from 'styled-components';
import Quiz from './Quiz';
import { yellow, orange, pink, red, blue } from './colors';

const Wrapper = styled.div`
height: 100vh;
width: 100%;
background: ${blue};

display: flex;
justify-content: center;
align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Quiz />
    </Wrapper>
  );
}

export default App;
