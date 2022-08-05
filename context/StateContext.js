import React, { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
import {
  useGetAllImagesQuery,
  useGetSearchedImagesQuery,
} from "../app/services";
const Context = createContext();
const StateContext = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const typeRef = useRef();
  const searchData = useGetSearchedImagesQuery(type, page);
  const { data, allImagesIsLoading } = useGetAllImagesQuery(page);

  useEffect(() => {
    if (type === "") {
      setImages(data);
      setIsLoading(allImagesIsLoading);
    } else {
      setImages(searchData?.data?.results);
      setIsLoading(searchData.isLoading);
    }
  });
  // search Function   //
  const search = (e) => {
    e.preventDefault();

    setType(typeRef.current.value);
    setPage(1);
  };

  return (
    <Context.Provider
      value={{
        images,
        typeRef,
        search,
        isLoading,
        setType,
        type,
        page,
        setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
