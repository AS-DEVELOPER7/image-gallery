import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const photoGallery = createApi({
  reducerPath: "photoGallery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: (page = 1) => ({
        url: `photos?page=${page}&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
    getSearchedImages: builder.query({
      query: (type, page = 1) => ({
        url: `search/photos?page=${page}&per_page=30&query=${type}&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllImagesQuery, useGetSearchedImagesQuery } = photoGallery;
