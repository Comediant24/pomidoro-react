import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import TITLE_BUTTON from '../../config/config';

const Controls = () => {
  return (
    <ControlsWrapper>
      {TITLE_BUTTON.map((title) => (
        <ControlsButton title={title} key={title} />
      ))}
    </ControlsWrapper>
  );
};

export default Controls;

const ControlsWrapper = styled.section`
  display: flex;
  gap: 15px;
  margin: auto;
`;

const ControlsButton = styled(Button)`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  font-size: 24px;
  text-transform: capitalize;
`;
