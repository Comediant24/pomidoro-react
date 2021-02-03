import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

function App() {
  return (
    <Wrapper>
      <AppContainer>
        <Header />
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
