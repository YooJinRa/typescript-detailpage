import React, { useState } from 'react';
import styled from 'styled-components';

import RightMenuRelease from './RightMenuRelease';

interface Props {
  productId: number;
  productBrandIcon: string;
  productBrandName: string;
  releaseSiteCount: number;
  productName: string;
  firstReleaseDate: string;
  productNameEn: string;
  productCode: string;
  productPrice: string;
  productComment: string;
  productViews: number;
  productApplyCount: number;
}

const RightMenu = ({
  productId,
  productBrandIcon,
  productBrandName,
  releaseSiteCount,
  productName,
  firstReleaseDate,
  productNameEn,
  productCode,
  productPrice,
  productComment,
  productViews,
  productApplyCount,
}: Props) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <StRightMenuContainer>
      <StRightMenuRow className="brandTitleRow" isMore={isMore}>
        <div className="brandName">
          <h3>{productBrandName}</h3>
          <h3>{productNameEn}</h3>
          <p>{productName}</p>
        </div>
        <p className="brandIcon">
          <img src={productBrandIcon} alt="brand images" />
        </p>
      </StRightMenuRow>
      <StRightMenuRow className="directionRow" isMore={isMore}>
        <ul>
          <li className="detailTitle">제품 코드</li>
          <li className="detailText">{productCode}</li>
        </ul>
        <ul>
          <li className="detailTitle">가격</li>
          <li className="detailText">{productPrice}</li>
        </ul>
        <ul>
          <li className="detailTitle">발매일</li>
          <li className="detailText">{firstReleaseDate}</li>
        </ul>
        <ul>
          <li className="detailTitle">응모 횟수</li>
          <li className="detailText">{productApplyCount}</li>
        </ul>
      </StRightMenuRow>
      <StRightMenuRow isMore={isMore}>
        <p className="brandInfoText">
          <span>{productComment}</span>
          <strong onClick={() => setIsMore(!isMore)}>
            {isMore ? '' : '더보기'}
          </strong>
        </p>
      </StRightMenuRow>
      <StCountBox>
        발매처 {releaseSiteCount.toLocaleString()} &middot; 조회수{' '}
        {productViews.toLocaleString()}
      </StCountBox>

      <RightMenuRelease />
    </StRightMenuContainer>
  );
};

export default RightMenu;

const StRightMenuContainer = styled.div`
  width: 400px;
  height: 200px;
`;

const StRightMenuRow = styled.div<{ isMore: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-left: 1px solid var(--gray-color);
  border-right: 1px solid var(--gray-color);
  border-bottom: 1px solid var(--gray-color);
  margin-bottom: 1rem;
  padding: 0 0.8rem 0.8rem 0.8rem;

  &.brandTitleRow {
    padding: 0 0 0 0.8rem;
  }

  &.directionRow {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .brandName {
    border-right: 1px solid var(--gray-color);
    padding-bottom: 0.8rem;
  }
  .brandIcon {
    display: flex;
    align-items: center;
    width: 60px;
    min-width: 60px;
    height: 100%;
    padding: 0.3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    width: 100%;

    li {
      width: 50%;

      &.detailTitle {
        color: var(--textGray-color);
      }
    }
  }
  .brandInfoText {
    position: relative;
    height: ${(props) => (props.isMore ? 'auto' : '60px')};
  }
  .brandInfoText span {
    display: block;
    height: ${(props) => (props.isMore ? 'auto' : '55px')};
    overflow: hidden;
  }
  .brandInfoText strong {
    position: absolute;
    bottom: 2px;
    right: 5px;
    display: ${(props) => (props.isMore ? 'none' : 'block')};
    background-color: #fff;
    padding-left: 10px;
  }
`;

const StCountBox = styled.p`
  font-size: 12px;
  color: var(--gray-color);
  padding-bottom: 24px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--lightGray-color);
`;
