import React from 'react';
import styled from 'styled-components';

const Pomodoro = ({ minutes, seconds }) => {
  return (
    <PomodoroWrapper>
      <Timer>{`${minutes}:${seconds}`}</Timer>
    </PomodoroWrapper>
  );
};

export default Pomodoro;

const PomodoroWrapper = styled.section``;

const Timer = styled.div`
  color: white;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
`;
