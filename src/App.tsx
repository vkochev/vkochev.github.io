import React from 'react';
import MeetThePages from './pages/MeetThePages';
import GreenFir from './pages/GreenFir';
import MeetTheWebpackConfigTs from './pages/MeetTheWebpackConfigTs';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
export function App() {
  return (
    <Flex>
      <div>
        <MeetTheWebpackConfigTs />
        <MeetThePages />
        <GreenFir />
      </div>
    </Flex>
  );
}
