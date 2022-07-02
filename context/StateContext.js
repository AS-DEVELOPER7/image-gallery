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
  const searchData = useGetSearchedImagesQuery(type);
  const { data, allImagesIsLoading } = useGetAllImagesQuery();
  useEffect(() => {
    if (type === "") {
      setImages(data);
      setIsLoading(allImagesIsLoading);
    } else {
      setImages(searchData?.data.results);
      setIsLoading(searchData.isLoading);
    }
    console.log(images);
  });
  // search Function   //
  const typeRef = useRef();
  const search = (e) => {
    e.preventDefault();

    setType(typeRef.current.value);
  };

  return (
    <Context.Provider value={{ images, typeRef, search, isLoading, setType ,type}}>
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
