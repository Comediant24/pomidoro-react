import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from '../../styles/globalStyles';
import Controls from '../Controls/Controls';
import Header from '../Header/Header';
import Pomodoro from '../Pomodoro/Pomodoro';
import { CURRENT_TIME, BREAK_TIME } from '../../config/config';

function App() {
  const [currentTime, setCurrentTime] = useState(CURRENT_TIME);
  const [timeLeft, setTimeLeft] = useState(currentTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  let intervalRef = useRef(null);

  useEffect(() => setTimeLeft(currentTime * 60), [currentTime]);

  const padTime = (time) => {
    return Math.floor(time).toString().padStart(2, '0');
  };

  const minutes = padTime(timeLeft / 60);

  const seconds = padTime(timeLeft - minutes * 60);

  const toStartTimer = () => {
    if (intervalRef.current !== null) return;
    setIsEdit(false);
    setIsRunning(true);
    intervalRef.current = setInterval(
      () =>
        setTimeLeft((timeLeft) => {
          if (timeLeft >= 1) return timeLeft - 1;
          setTimeout(toResetTime(), 2000);
          return 0;
        }),
      1000
    );
  };
  const resetRunningState = () => {
    setIsRunning(false);
    intervalRef.current = null;
  };

  const toPauseTime = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    resetRunningState();
  };

  const toBreakTime = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(BREAK_TIME * 60);
    setCurrentTime(BREAK_TIME);
    setIsBreak(true);
    resetRunningState();
  };

  const setFocusTime = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(currentTime * 60);
    setCurrentTime(CURRENT_TIME);
    setIsBreak(false);
    resetRunningState();
  };

  const toResetTime = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(currentTime * 60);
    resetRunningState();
  };

  const handleShowEditButton = () => {
    setIsEdit(!isEdit);
  };

  const handleTimeEditSubtract = () => {
    if (currentTime <= 1) return;
    setCurrentTime(currentTime - 1);
  };

  const handleTimeEditAdd = () => {
    if (currentTime >= 60) return;
    setCurrentTime(currentTime + 1);
  };

  return (
    <Wrapper>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Pomodoro
          handleHiddenButtonEdit={isEdit}
          handleTimeEditSubtract={handleTimeEditSubtract}
          handleTimeEditAdd={handleTimeEditAdd}
          minutes={minutes}
          seconds={seconds}
        />
        <Controls
          isRunning={isRunning}
          onStartClick={toStartTimer}
          onResetClick={toResetTime}
          onPauseClick={toPauseTime}
          onBreakClick={toBreakTime}
          setFocusTime={setFocusTime}
          isEdit={isEdit}
          isBreak={isBreak}
          handleShowEditButton={handleShowEditButton}
        />
      </AppContainer>
      <BackgroundMask
        style={{
          clipPath: `circle(${(timeLeft / currentTime / 60) * 142}% at 0 0)`,
        }}
      />
      <Background />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 500px) {
    padding: 20px 10px;
    box-sizing: border-box;
    height: 100%;
    justify-content: space-between;
    gap: 10px;
  }
`;

const BackgroundMask = styled.div`
  background-color: #fc5650;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: clip-path 1s linear 0s;
`;

const Background = styled.div`
  background-color: #13a10e;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;
