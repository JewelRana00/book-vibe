"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContecxt } from "@/context/BooksContest";
import { IBook } from "@/type/books.type";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContecxt);
  const [sortBy, setsortBy] = useState<"rating" | "pages" | "year">("rating");
  // console.log(readBooks, "readBooks");
  // console.log(wishList, "wishList");
  console.log(sortBy, "sortBy");
  return (
    <div className="container mx-auto py-5 space-y-6">
      <h2 className="my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setsortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Pick a Runtime</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Pages</option>
          <option value={"year"}>Published Year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {wishList.length > 0 ? (
            wishList.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
