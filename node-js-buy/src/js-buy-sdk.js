import fetch from 'node-fetch';
import Client, {Config} from 'shopify-buy';

global.fetch = fetch;

const config = new Config({
  storefrontAccessToken: '2ad50f7ec5ac1cf199b8c7b775022e81',
  domain: 'my-first-st.myshopify.com'
});

export default new Client(config);
