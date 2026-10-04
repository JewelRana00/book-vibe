import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Discover your next favorite book
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Books to freshen up
              <br />
              <span className="text-emerald-600">your bookshelf</span>
            </h2>

            <p className="max-w-lg text-base md:text-lg leading-relaxed text-slate-600">
              Explore inspiring stories, timeless classics, and exciting new
              reads. Find a book that fits your mood and makes your next reading
              session special.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg">
                View The List →
              </button>

              <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                Explore Books
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-slate-900">1,200+</p>
                <p className="text-sm text-slate-500">Books</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Readers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">4.8★</p>
                <p className="text-sm text-slate-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex h-full items-center justify-center bg-emerald-100/40 p-8 md:p-10 lg:p-14">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-200/40 blur-2xl" />

              <Image
                src={banner}
                alt="A collection of books"
                className="relative w-full rounded-2xl object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
