import { supabase } from "./../utils/supabase";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Blog({ blog }) {
  return (
    <>
      <Navbar />
      <div className="h-fit">
        <p className="pt-20 pb-20 mx-auto px-2">
          {blog.map((article) => (
            <Link
              key={article.id}
              href={`/${article.id}`}
              className="p-8 h-30 w-auto rounded shadow text-xl font-bold flex items-center justify-center"
            >
              {article.title}
            </Link>
          ))}
        </p>
      </div>
      <div className="text-center pt-10 pb-10">
            <button
              type="button"
              className="rounded-sm text-xl border-2 border-black bg-white px-8 py-2 font-bold text-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              <a href="profilePage">Retour au profil</a>
            </button>
          </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("blog").select();

  return {
    props: {
      blog: data,
    },
  };
}

export default Blog;
