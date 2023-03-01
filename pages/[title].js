import { supabase } from "../utils/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const CourseDetails = ( { cours } ) => {
    return (
    <>
        <Navbar/>
            <div className="h-fit mx-auto py-24 px-8">
                <h1 className="text-5xl mb-6 font-bold">{cours.title}</h1>
                <p className="text-xl text-justify pb-10">{cours.description}</p>
                <Link href="/cours"><button className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-black rounded-none"><Link href="/cours">Retour aux articles</Link></button></Link>
            </div>
        <Footer/>
    </>
    )
};

export const getStaticPaths = async () => {
    const { data: detail } = await supabase
    .from('cours')
    .select('id');
    
    const paths = detail.map(({id}) => ({
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
    const { data: cours } = await supabase
    .from('cours')
    .select('*')
    .eq('id', id)
    .single();

    return {
        props: {
            cours,
        },
    };
};

export default CourseDetails;

