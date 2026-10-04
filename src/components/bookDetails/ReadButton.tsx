"use client";
import { BooksContecxt } from "@/context/BooksContest";
import { IBook } from "@/type/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContecxt);

  const handleReadBook = () => {
    console.log("Button Trigered", book);
    setReadBooks([...readBooks, book]);
    toast.success(`You have reade "${book.bookName}"`);
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => {
        handleReadBook();
      }}
    >
      Read
    </button>
  );
};

export default ReadButton;
