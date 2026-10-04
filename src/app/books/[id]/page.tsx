import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/type/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  console.log(book);
  return (
    <div className="container mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        {/* <figure className="lg:w-1/2">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={700}
            className="w-full"
          />
        </figure> */}
        <figure className="lg:w-2/5 h-[70vh] overflow-hidden">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={700}
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl">{book.bookName}</h2>

          <p>
            <span className="font-semibold">Author:</span> {book.author}
          </p>

          <p>
            <span className="font-semibold">Category:</span> {book.category}
          </p>

          <p>
            <span className="font-semibold">Publisher:</span> {book.publisher}
          </p>

          <p>
            <span className="font-semibold">Year of Publishing:</span>{" "}
            {book.yearOfPublishing}
          </p>

          <p>
            <span className="font-semibold">Total Pages:</span>{" "}
            {book.totalPages}
          </p>

          <p>
            <span className="font-semibold">Rating:</span> ⭐ {book.rating}
          </p>

          <div>
            <span className="font-semibold">Tags:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {book.tags.map((tag) => (
                <span key={tag} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Review</h3>
            <p>{book.review}</p>
          </div>

          <div className="card-actions justify-end w-full gap-3">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
