import React from 'react';
import styled from 'styled-components';
import CloseImage from '../../static/images/close.svg';

interface ModalProps {
  onClose: React.MouseEventHandler<Element> | undefined;
  children: React.ReactNode;
}

const GlobalModal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <Background />
      <ModalContentBox>
        <img
          className="closeButton"
          src={CloseImage}
          onClick={onClose}
          alt="close"
        />
        <div className="contents">{children}</div>
      </ModalContentBox>
    </>
  );
};
export default GlobalModal;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

const ModalContentBox = styled.div`
  position: fixed;
  height: 600px;
  width: 400px;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -200px;
  background-color: #fff;
  z-index: 15;
  text-align: center;
  .contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  img.closeButton {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 30px;
    height: 30px;
    cursor: pointer;
    path {
      color: var(--text-color);
    }
  }
`;
