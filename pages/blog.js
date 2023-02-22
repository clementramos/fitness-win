import { supabase } from "./../utils/supabase";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Blog({ blog }) {
  console.log(supabase.auth.getUser());
  return (
    <>
    <Navbar/>
    <div className="h-screen">
    <p className="pt-20 mx-auto px-2">
      {blog.map((article) => (
        <Link key={article.id} href={`/${article.id}`} className="p-8 h-30 rounded shadow text-xl flex">
            {article.title}
        </Link>
      ))}
    </p>
    </div>
    <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase
  .from('blog')
  .select();

  return {
    props: {
     blog: data
    },
  }
}

export default Blog;