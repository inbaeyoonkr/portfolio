import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${props =>
    props.dark
      ? css`
          background-color: #333;
          color: white;
        `
      : css`
          background-color: white;
          color: #333;
        `}
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Section = ({ title, subtitle, dark, id }) => {
  return (
    <Wrapper dark={dark}>
      <Content id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Content>
    </Wrapper>
  );
};

export default Section;
