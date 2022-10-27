import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}
const GlobalLayout = ({ children }: Props) => {
  return <StGlobalLayoutContailner>{children}</StGlobalLayoutContailner>;
};

export default GlobalLayout;

const StGlobalLayoutContailner = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1440px;
  min-height: 100vh;
`;
