import React from "react";

const getBooks = async () => {
  const response = await fetch("/booksData.json");
};

const Books = () => {
  return <section className="container mx-auto my-17.5"></section>;
};

export default Books;
