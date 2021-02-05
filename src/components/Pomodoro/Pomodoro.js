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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 0;
  }
`;

const EditButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    order: 1;
    gap: 30px;
  }
`;

const EditButton = styled(Button)`
  background-color: transparent;
  font-size: 50px;
  padding: 0;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 70px;
    line-height: 1;
  }
`;

const Timer = styled.div`
  color: white;
  font-size: 120px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 98px;
    line-height: 1;
  }
`;
