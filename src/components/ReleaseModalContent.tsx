import React, { useState } from 'react';

interface Props {
  uuid: string;
  type: number;
  method: string;
  url: string;
  price?: string;
  releaseMarket: {
    name: string;
    icon: string;
    channels: {
      type: string;
      link: string;
      typeName: string;
    }[];
  };
  closedTimestamp: number;
  product: {
    brandName: string;
    code: string;
    name: string;
    thumb: string;
  };
  shippingMethod: string;
  payMethod: string;
  mission?: string;
}

const ReleaseModalContent = (props: { targetDetail: Props }) => {
  console.log('targetData ::: ', props.targetDetail);

  return <>{}</>;
};
export default ReleaseModalContent;
