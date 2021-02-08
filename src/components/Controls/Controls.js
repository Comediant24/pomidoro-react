import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { TITLE_BUTTON } from '../../config/config';

const Controls = ({
  isRunning,
  onStartClick,
  onResetClick,
  onPauseClick,
  onBreakClick,
  setFocusTime,
  handleShowEditButton,
  isEdit,
  isBreak,
}) => {
  return (
    <ControlsWrapper>
      {!isRunning && (
        <ControlsButton onButtonClick={onStartClick} title={TITLE_BUTTON[0]} />
      )}
      {isRunning && (
        <ControlsButton onButtonClick={onPauseClick} title={TITLE_BUTTON[1]} />
      )}
      <ControlsButton onButtonClick={onResetClick} title={TITLE_BUTTON[2]} />
      {!isBreak && (
        <ControlsButton onButtonClick={onBreakClick} title={TITLE_BUTTON[5]} />
      )}
      {isBreak && (
        <ControlsButton onButtonClick={setFocusTime} title={TITLE_BUTTON[6]} />
      )}
      <ControlsButton
        onButtonClick={handleShowEditButton}
        title={isEdit ? TITLE_BUTTON[4] : TITLE_BUTTON[3]}
      />
    </ControlsWrapper>
  );
};

export default Controls;

const ControlsWrapper = styled.section`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ControlsButton = styled(Button)`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  font-size: 24px;
  text-transform: capitalize;
  min-width: 100px;
  width: 100%;

  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;
