import { IBook } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div className="flex h-40 items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-34 w-26 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-bold text-slate-800">
          {book.bookName}
        </h3>

        <p className="truncate text-sm text-slate-500">by {book.author}</p>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-purple-50 px-3 py-1 font-medium text-purple-700">
            {book.category}
          </span>

          <span className="font-semibold text-slate-600">⭐ {book.rating}</span>

          <span className="text-slate-500">{book.totalPages} pages</span>
        </div>
      </div>
      {/* Button */}
      <Link href={`/books/${book.bookId}`}>
        <button className="btn w-full rounded-xl bg-teal-600 text-white hover:bg-teal-700">
          Read More →
        </button>
      </Link>
      {/* Remove / Action */}
      {/* <button className="btn btn-sm btn-circle btn-ghost text-red-500 hover:bg-red-50">
                      ✕
                    </button> */}
    </div>
  );
};

export default ListedBooksCard;
