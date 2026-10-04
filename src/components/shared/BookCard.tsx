import { IBook } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Book Image */}
      <div className="relative h-80 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-purple-700 shadow">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold shadow">
          ⭐ {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="mb-1 line-clamp-1 text-2xl font-bold text-slate-800">
          {book.bookName}
        </h2>

        <p className="mb-4 text-sm font-medium text-slate-500">
          by {book.author}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
          {book.review}
        </p>

        {/* Book Information */}
        <div className="mb-5 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4 text-sm">
          <div>
            <p className="text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-slate-400">Publisher</p>
            <p className="font-semibold text-slate-700">{book.publisher}</p>
          </div>

          <div>
            <p className="text-slate-400">Rating</p>
            <p className="font-semibold text-slate-700">⭐ {book.rating}/5</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="btn w-full rounded-xl bg-teal-600 text-white hover:bg-teal-700">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
