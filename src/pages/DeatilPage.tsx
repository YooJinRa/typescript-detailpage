import React from 'react';
import styled from 'styled-components';

import GlobalHeader from '../components/global/GlobalHeader';
import GlobalLayout from '../components/global/GlobalLayout';
import DetailContainer from '../components/DetailContainer';

const DetailPage = () => {
  return (
    <StDetailPageContailner>
      <GlobalHeader />
      <GlobalLayout>
        <DetailContainer />
      </GlobalLayout>
    </StDetailPageContailner>
  );
};

export default DetailPage;

const StDetailPageContailner = styled.div`
  width: 100%;
  min-height: 100vh;
`;
