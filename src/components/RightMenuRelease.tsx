import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalModal from './global/GlobalModal';
import ReleaseModalContent from './ReleaseModalContent';

import ReleaseList from '../static/releases/413.json';

const RightMenuRelease = () => {
  const [ingState, setIngState] = useState<boolean>(true);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<string>('');
  const closeModal = () => {
    setModalOn(!modalOn);
  };
  const ReleaseItems = ReleaseList;

  return (
    <>
      <StTitleBox ingState={ingState}>
        <h4>발매정보 {ReleaseItems.length}</h4>
        <ul>
          <li onClick={() => setIngState(true)}>진행중</li>
          <li onClick={() => setIngState(false)}>종료</li>
        </ul>
      </StTitleBox>

      {ReleaseItems.map((item) => (
        <StReleaseCard key={item.id}>
          <ul className="brandBox">
            <li className="brandImage">
              <img src={item.releaseMarket.icon} alt="브랜드이미지" />
            </li>
            <li className="brandInfo">
              <p>{item.releaseMarket.name}</p>
              <p className="info">
                {item.isEvent ? <span>이벤트</span> : null}
                <span>{item.region}</span>
                <span>{item.shippingMethod}</span>
              </p>
              <button
                onClick={() => {
                  setModalOn(true);
                  setTargetId(item.uuid);
                }}
              >
                {item.type === 0 ? '선착순' : '응모'}
              </button>
            </li>
          </ul>
        </StReleaseCard>
      ))}
      {modalOn ? (
        <GlobalModal onClose={closeModal}>
          <ReleaseModalContent uuid={targetId} />
        </GlobalModal>
      ) : null}

      {ReleaseItems.length > 10 && <StButtonMore>더 보기</StButtonMore>}
    </>
  );
};

export default RightMenuRelease;

const StTitleBox = styled.div<{ ingState: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  h4 {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    li {
      margin-left: 10px;
      color: var(--textGray-color);
      font-size: 1rem;
      cursor: pointer;

      &:first-child {
        color: ${(props) =>
          props.ingState ? 'var(--text-color)' : 'var(--textGray-color)'};
      }
      &:last-child {
        color: ${(props) =>
          !props.ingState ? 'var(--text-color)' : 'var(--textGray-color)'};
      }

      &:first-child::after {
        content: '|';
        margin-left: 14px;
        color: var(--textGray-color);
      }
    }
  }
`;

const StReleaseCard = styled.div`
  border-bottom: 1px solid var(--gray-color);

  ul.brandBox {
    display: flex;
    justify-content: start;
    padding: 0.4rem 0;
    li.brandImage {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.05);
      margin-right: 16px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    li.brandInfo {
      width: calc(100% - 112px);

      .info {
        display: flex;
        flex-direction: row;
        margin: 4px 0;
        span {
          height: 20px;
          border-radius: 10px;
          font-size: 12px;
          padding: 2px 6px;
          margin-right: 4px;
          background-color: #f4f4f4;
        }
      }
      button {
        display: flexbox;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 28px;
        background-color: #ffffff;
        border: 1px solid var(--buttonLine-color);
      }
    }
  }
`;

const StButtonMore = styled.button`
  display: flexbox;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid var(--textGray-color);
  margin-top: 20px;
`;
