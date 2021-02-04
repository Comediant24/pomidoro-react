import React from 'react';
import styled from 'styled-components';

const Button = ({ onButtonClick, className, title }) => {
  return (
    <ButtonWrapper onClick={onButtonClick} className={className}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button``;
