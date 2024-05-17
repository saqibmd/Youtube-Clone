/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api.jsx";

export const Context = createContext();

export const Appcontext = (props) => {
  let [loading, setLoading] = useState(false);
  let [searchResults, setSearchResults] = useState([]);
  let [selectCatagories, setSelectCatagories] = useState([false]);
  let [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCatagoryData(selectCatagories);
  }, [selectCatagories]);

  const fetchSelectedCatagoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCatagories,
        setSelectCatagories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
