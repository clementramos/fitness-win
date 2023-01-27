import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Construction () {
    return (
        <>
        <Head/>
        <Navbar />
        <div class="flex items-center justify-center h-fit">
            <div class="flex flex-col items-center justify-center max-w-lg pt-40 pb-10">
                <div class="mb-4">
                    <h1 class="text-5xl font-extrabold text-white pb-5 px-5">ERREUR 503</h1>
                    <h1 class="text-5xl font-extrabold text-white pb-5 px-5">ERROR 503</h1>
                </div>
                <h3 class="mb-3 text-xl font-bold text-center text-slate-300 pb-10 px-5">
                    Le site entier est en cours de traduction <br></br>
                    J'aurais bientôt fini (avant mars !)
                </h3>
                <h3 class="mb-3 text-xl font-bold text-center text-slate-300 pb-10 px-5">
                    The whole site is under translation at the moment <br></br>
                    It's almost finished (before march !)
                </h3>
                <p class="text-base text-center text-slate-300 px-5 pb-10">
                    Si cela vous intèresse, vous pouvez toujours <Link className="text-green-500 hover:underline" href="/contact">me contacter</Link>pour m'aider à traduire le site!<br></br>
                    Autrement, <br></br>
                    Je serais en ligne dans très peu de temps !<br></br>
                    — L'équipe Dev' up !
                </p>
                <p class="text-base text-center text-slate-300 px-5">
                    If you're interested, you can <Link className="text-green-500 hover:underline" href="/contact">contact me</Link>to help translating the site!<br></br>
                    Otherwise, <br></br>
                    I'll be back online very soon !<br></br>
                    —The Dev' up ! team.
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}