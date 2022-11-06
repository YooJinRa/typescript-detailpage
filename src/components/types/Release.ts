export interface IReleaseDetail {
  uuid: string | null;
  type: number | null;
  method: string | null;
  url: string | null;
  price: string | null;
  releaseMarket: {
    name: string | null;
    icon: string | null;
    channels:
      | {
          type: string | null;
          link: string | null;
          typeName: string | null;
        }[]
      | null;
  } | null;
  closedTimestamp: number | null;
  product: {
    brandName: string | null;
    code: string | null;
    name: string | null;
    thumb: string | null;
  } | null;
  shippingMethod: string | null;
  payMethod: string | null;
  mission: string | null;
}
