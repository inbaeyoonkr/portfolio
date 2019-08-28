import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  color: #333;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
`;

const SnsItems = styled.div``;

const SnsItem = styled.div``;

const Footbar = () => {
  return <Wrapper>This is footbar</Wrapper>;
};

export default Footbar;
