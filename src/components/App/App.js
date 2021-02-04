import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyles';
import Controls from '../Controls/Controls';
import Header from '../Header/Header';
import Pomodoro from '../Pomodoro/Pomodoro';

function App() {
  return (
    <Wrapper>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Pomodoro />
        <Controls />
      </AppContainer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #fc5650;
  height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;
