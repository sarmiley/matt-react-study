import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseApiServiceQuery = retry(

  async (args, api, extraOptions) => {

    const result = await fetchBaseQuery({
      // 如果設定空值，就是以站台相對路徑作為 baseUrl
      baseUrl: 'https://pokeapi.co/api/v2/',  // env.baseUrl
      prepareHeaders(headers, { getState }) {
        headers.set('Content-Type', 'application/json; charset=utf-8')
        headers.set('language', 'zh_TW')
        const authToken = ''
        if (authToken) headers.set('authorization', `bearer ${ authToken }`)
        return headers
      },
    })( args, api, extraOptions)

    return { ...result }
  },
  {
    // retry once while api fail
    maxRetries: 0,
  },
)

/**
* @description 呼叫 api 的服務，透過 injectEndpoints 加入功能端點
*/
export const baseApiService = createApi({
 reducerPath: 'api',
 baseQuery: baseApiServiceQuery,
 endpoints: () => ({}),
})
