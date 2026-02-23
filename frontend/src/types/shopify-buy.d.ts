declare module "shopify-buy" {
  const ShopifyBuy: {
    buildClient: (config: {
      domain: string;
      storefrontAccessToken: string;
      apiVersion?: string;
    }) => {
      checkout: {
        create: (input: {
          lineItems: Array<{
            variantId: string;
            quantity: number;
            customAttributes?: Array<{ key: string; value: string }>;
          }>;
        }) => Promise<{ webUrl: string }>;
      };
      product: {
        fetchAll: () => Promise<Array<any>>;
      };
    };
  };

  export default ShopifyBuy;
}
