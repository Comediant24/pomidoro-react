import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Pomodoro ⌛🍅⌛</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header``;

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
`;
