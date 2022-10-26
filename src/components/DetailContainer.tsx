import React from 'react';
import styled from 'styled-components';
import ProductList from '../static/product/id/413.json';

const DetailContainer = () => {
  const productImages = ProductList.images;
  console.log(productImages);
  return (
    <StDetailContailner>
      <StThumbBox>
        {productImages.map((img) => (
          <StThumb>
            <img src={img} alt="상품이미지" />
          </StThumb>
        ))}
      </StThumbBox>
    </StDetailContailner>
  );
};

export default DetailContainer;

const StDetailContailner = styled.div`
  width: 100%;
  background-color: blue;
`;

const StThumbBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1220px;
`;
const StThumb = styled.div`
  width: 600px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
