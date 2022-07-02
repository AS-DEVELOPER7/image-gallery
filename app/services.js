import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const photoGallery = createApi({
  reducerPath: "photoGallery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),

  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: () => ({
        url: "photos?page=1&per_page=30&client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng",
        method: "GET",
      }),
    }),
    getSearchedImages: builder.query({
      query: (type) => ({
        url: `search/photos?client_id=kf_cmNioNgIVPYizoIyCvhh5x41uEJGedZgIihK5bng&page=1&per_page=30&query=${type}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllImagesQuery, useGetSearchedImagesQuery } = photoGallery;
