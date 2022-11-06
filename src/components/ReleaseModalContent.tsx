import React, { useState, useEffect } from 'react';
import ReleaseDetail from '../static/product_release/releaseDetail.json';
import styled from 'styled-components';

import facebook from '../static/images/channels/facebook.svg';
import homepage from '../static/images/channels/homepage.svg';
import instagram from '../static/images/channels/instagram.svg';
import naver from '../static/images/channels/naver.svg';
import youtube from '../static/images/channels/youtube.svg';

const ReleaseModalContent = ({ uuid }: any) => {
  const [data, setData] = useState<any>();
  console.log('uuid ::: ', uuid);
  console.log('data ::: ', data);

  useEffect(() => {
    const targetData: any = ReleaseDetail.filter(
      (detail) => detail.uuid === uuid
    );
    setData(targetData[0]);
  }, [uuid]);

  return (
    <StReleaseModal>
      <header>
        <span>
          <img src={data?.releaseMarket.icon} alt={data?.releaseMarket.name} />
        </span>
        <strong>{data?.releaseMarket.name}</strong>
      </header>
      <StContentsSection>
        <StProductInfo>
          <li>
            <img src={data?.product.thumb} alt={data?.product.brandName} />
          </li>
          <li className="productInfoDesc">
            <strong>{data?.product.brandName}</strong>
            <span>{data?.product.name}</span>
          </li>
        </StProductInfo>
        <StProductDescRow>
          <li className="title">제품 코드</li>
          <li className="text">{data?.product.code}</li>
        </StProductDescRow>
        <StProductDescRow>
          <li className="title">가격</li>
          <li className="text">{data?.price}</li>
        </StProductDescRow>
        <StProductDescRow>
          <li className="title">공지 방법</li>
          <li className="text">{data?.method}</li>
        </StProductDescRow>
        <StProductDescRow>
          <li className="title">결제 방법</li>
          <li className="text">{data?.payMethod}</li>
        </StProductDescRow>
        <StProductDescRow>
          <li className="title">수령 방법</li>
          <li className="text">{data?.shippingMethod}</li>
        </StProductDescRow>
        <StProductDescRow>
          <li className="title">공식 채널</li>
          <li className="text">
            {data?.releaseMarket.channels.map(
              (
                channel: { type: string; link: string; typeName: string },
                index: number
              ) => (
                <span key={channel.type + index}>
                  <a href={channel.link}>
                    {channel.type === 'instagram' && (
                      <img src={instagram} alt={channel.typeName} />
                    )}
                    {channel.type === 'facebook' && (
                      <img src={facebook} alt={channel.typeName} />
                    )}
                    {channel.type === 'youtube' && (
                      <img src={youtube} alt={channel.typeName} />
                    )}
                    {channel.type === 'naver' && (
                      <img src={naver} alt={channel.typeName} />
                    )}
                    {channel.type === 'homepage' && (
                      <img src={homepage} alt={channel.typeName} />
                    )}
                  </a>
                </span>
              )
            )}
          </li>
        </StProductDescRow>
        {data?.mission && (
          <StProductDescRow className="mission">
            <li className="title">유의사항</li>
            <li className="text">{data?.mission}</li>
          </StProductDescRow>
        )}
        <button className="enroll">응모하기</button>
      </StContentsSection>
    </StReleaseModal>
  );
};
export default ReleaseModalContent;

const StReleaseModal = styled.div`
  width: 100%;
  height: 200%;
  header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;

    & span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 6px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const StContentsSection = styled.section`
  width: 100%;
  margin-top: 32px;

  .enroll {
    width: 100%;
    height: 40px;
    font-weight: bolder;
    background-color: #ffca00;
    border: 0px;
    border-radius: 2px;
  }
`;

const StProductInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  min-height: 48px;
  margin-bottom: 8px;

  & > li:first-child {
    width: 48px;
    height: 48px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: coveer;
    }
  }
  & > li.productInfoDesc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: calc(100% - 60px);

    strong {
      font-size: 13px;
      font-weight: bolder;
    }
    span {
      font-size: 13px;
      font-weight: lighter;
    }
  }
`;

const StProductDescRow = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  border-top: 1px solid var(--lightGray-color);

  &.mission {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 42px;
    height: auto;

    & > li.title {
      height: 42px;
    }

    & > li.text {
      text-align: left;
    }
  }

  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 13px;
  }
  & > li.title {
    text-align: left;
    color: var(--textGray-color);
  }
  & > li.text {
    text-align: right;
    color: var(--textBlack-color);
  }
`;
