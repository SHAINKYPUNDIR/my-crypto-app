import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders =  {
  'X-RapidAPI-Key': 'd718aaa263msh3cb997d1f4aa48dp1c0395jsn8113d525f35f',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = ({ newsCategory, count }) => {
  const request = {
    url: `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    headers: cryptoNewsHeaders,
  };
  console.log('API Request:', request);
  return request;
};

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (options) => createRequest(options),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
