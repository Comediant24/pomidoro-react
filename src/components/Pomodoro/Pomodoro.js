import React from 'react';
import styled from 'styled-components';

const Pomodoro = () => {
  return (
    <PomodoroWrapper>
      <Timer>25:00</Timer>
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
