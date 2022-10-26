import React from 'react';
import styled from 'styled-components';

import Logo from '../../static/images/logo.svg';

const GlobalHeader = () => {
  return (
    <StGlobalHeaderContailner>
      <h1>
        <img src={Logo} alt="logo" />
      </h1>
    </StGlobalHeaderContailner>
  );
};

export default GlobalHeader;

const StGlobalHeaderContailner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 55px;
  border-bottom: 1px solid var(--lightGray-color);
  padding: 0 40px;
`;
