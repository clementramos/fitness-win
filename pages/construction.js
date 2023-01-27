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
                </div>
                <h3 class="mb-3 text-xl font-bold text-center text-slate-300 pb-10 px-5">
                    Cette page est en cours de construction <br></br>
                    Je reviens très vite (avant le 2 février !)
                </h3>
                <p class="text-base text-center text-slate-300 px-5">
                    Toutes mes excuses pour la gêne occasionnée mais je dois effectuer de la maintenance sur cette page. <br></br>
                    Si vous avez besoin, vous pouvez toujours <Link className="text-green-500 hover:underline" href="/contact">me contacter</Link>, autrement,<br></br>
                    Je serais en ligne dans très peu de temps !<br></br>
                    — L'équipe Dev' up !
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}