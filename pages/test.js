import { supabase } from "./../utils/supabase";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Blog({ blog }) {
  console.log({ blog });
  return (
    <>
    <Navbar/>
    <div className="h-screen">
    <p className="pt-20 mx-auto px-2">
      {blog.map((blogs) => (
        <Link key={blogs.id} href={`/${blogs.id}`} className="p-5">
            {blogs.name}
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