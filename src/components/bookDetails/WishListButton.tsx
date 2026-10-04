"use client";
import { BooksContecxt } from "@/context/BooksContest";
import { IBook } from "@/type/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishList } = useContext(BooksContecxt);

  const handleAddToWishList = () => {
    console.log("Button Trigered", book);
    setWishList([...wishList, book]);
    toast.success(`You have added "${book.bookName}" to Wishlist`);
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => {
        handleAddToWishList();
      }}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
