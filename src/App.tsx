import React from 'react';
import MeetThePages from './pages/MeetThePages';
import GreenFir from './pages/GreenFir';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
export function App() {
  return (
    <Flex>
      <div>
        <MeetThePages />
        <GreenFir />
      </div>
    </Flex>
  );
}
