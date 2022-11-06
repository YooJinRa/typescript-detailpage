import React from 'react';
import styled from 'styled-components';
import RightMenu from './RightMenu';
import ProductList from '../static/product/id/413.json';

const DetailContainer = () => {
  const productList = ProductList;
  console.log(productList);
  return (
    <StDetailContailner>
      <StThumbBox>
        {productList.images.map((img, index) => (
          <StThumb key={img + index}>
            <img src={img} alt="상품이미지" />
          </StThumb>
        ))}
      </StThumbBox>
      <RightMenu
        productId={productList.id}
        productBrandIcon={productList.brandIcon}
        productBrandName={productList.brandName}
        releaseSiteCount={productList.releaseSiteCount}
        productName={productList.name}
        productNameEn={productList.nameEn}
        firstReleaseDate={productList.firstReleaseDate}
        productCode={productList.code}
        productPrice={productList.price}
        productComment={productList.comment}
        productViews={productList.views}
        productApplyCount={productList.applyCount}
      />
    </StDetailContailner>
  );
};

export default DetailContainer;

const StDetailContailner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
`;

const StThumbBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
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
