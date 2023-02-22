import { supabase } from "../utils/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const BlogDetails = ( { blog } ) => {
    console.log({ blog })
    return (
    <>
        <Navbar/>
            <div className="h-screen mx-auto py-24 px-8">
                <h1 className="text-5xl mb-6 font-bold">{blog.title}</h1>
                <p className="text-xl">{blog.description}</p>
            </div>
        <Footer/>
    </>
    )
};

export const getStaticPaths = async () => {
    const { data: article } = await supabase
    .from('blog')
    .select('id');
    
    const paths = article.map(({id}) => ({
        params: {
            id: id.toString()
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({params: {id}}) => {
    const { data: blog } = await supabase
    .from('blog')
    .select('*')
    .eq('id', id)
    .single();

    return {
        props: {
            blog,
        },
    };
};

export default BlogDetails;