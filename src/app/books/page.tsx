import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/type/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-17.5 px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">
          Our Collection
        </p>

        <h2 className="mb-3 text-3xl font-bold text-slate-800 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {booksData.map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
