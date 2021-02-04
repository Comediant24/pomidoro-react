import React from 'react';
import styled from 'styled-components';

const Button = ({ className, title }) => {
  return <ButtonWrapper className={className}>{title}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button``;
