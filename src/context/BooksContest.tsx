"use client";

import React, { createContext, ReactNode, useState } from "react";

export const BooksContecxt = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const sharedData = {
    readBooks,
    wishList,
    setReadBooks,
    setWishList,
  };

  return (
    <BooksContecxt.Provider value={sharedData}>
      {children}
    </BooksContecxt.Provider>
  );
};

export default BooksProvider;
