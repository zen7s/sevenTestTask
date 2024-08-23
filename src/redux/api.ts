import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL, BASE_URL, ID } from 'src/shared/constants'

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/${API_URL}/${ID}/row`,
})

const $api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Items'],
  endpoints: () => ({}),
})

export default $api
