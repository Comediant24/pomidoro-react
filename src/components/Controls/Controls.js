import React from 'react';
import styled from 'styled-components';

const Controls = () => {
  return (
    <ControlsWrapper>
      <ControlsButton>Start</ControlsButton>
      <ControlsButton>Reset</ControlsButton>
      <ControlsButton>Break</ControlsButton>
      <ControlsButton>Edit</ControlsButton>
    </ControlsWrapper>
  );
};

export default Controls;

const ControlsWrapper = styled.section`
  display: flex;
  gap: 15px;
  margin: auto;
`;

const ControlsButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  font-size: 24px;
`;
