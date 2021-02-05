import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Pomodoro = ({
  handleTimeEditSubtract,
  handleTimeEditAdd,
  handleHiddenButtonEdit,
  minutes,
  seconds,
}) => {
  return (
    <PomodoroWrapper>
      {handleHiddenButtonEdit && (
        <EditButtonWrapper>
          <EditButton onButtonClick={handleTimeEditAdd} title="+" />
          <EditButton onButtonClick={handleTimeEditSubtract} title="-" />
        </EditButtonWrapper>
      )}
      <Timer>{`${minutes}:${seconds}`}</Timer>
    </PomodoroWrapper>
  );
};

export default Pomodoro;

const PomodoroWrapper = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const EditButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EditButton = styled(Button)`
  background-color: transparent;
  font-size: 50px;
  padding: 0;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Timer = styled.div`
  color: white;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
`;
