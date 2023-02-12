import React from 'react';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const AnimatedText = () => {
  return (
    <Bounce>
      <h1>Hello Adelphi</h1>
    </Bounce>
  );
}

export default AnimatedText;
