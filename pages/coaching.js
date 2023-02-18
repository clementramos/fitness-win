import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Coaching () {
    return (
        <>
        <Head/>
        <Navbar />
        <div class="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-coaching">
            <div className="text-center sm:w-full sm:p-5 pt-64 h-screen">
            <p className="text-white text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-48 sm:text-center uppercase font-bold tracking-tighter">coaching personnalisé</p>
              <p className="text-white text-center text-4xl sm:text-3xl font-light uppercase pb-12">J'interviens avec vous en extérieur, en salle ou à domicile.</p>
              <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact" className="uppercase text-2xl">être recontacté</a>
              </button>
              <p className="text-white text-center text-4xl sm:text-3xl font-light uppercase pt-12">En savoir plus</p>
              <button class="bg-transparent py-2 px-4">
                <Link href="#coach" className="uppercase" scroll={false}><img src="/arrow_down.svg"/></Link>
              </button>
            </div>
        </div>
        <div id="coach" className="pt-12 pb-12 h-full bg-white">
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
                <div className="pl-12">
                    <p className="text-black text-left text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">Accélérez votre progression <br></br> avec un coaching personnalisé <br></br> sur mesure</p>
                    <p className="text-black text-left text-xl sm:text-2xl sm:pr-5 pb-12 pt-12  pr-24 pr-5">Le coaching personnalisé est une approche sur mesure qui vous permet de réaliser vos objectifs personnels en matière de santé et de bien-être. 
                        Au cas par cas, votre coach vous accompagne dans vos objectifs de perte de poids, de danse, de mobilité et de bien-être. 
                        Que vous préfériez vous entraîner en extérieur, en salle ou à domicile, votre coach s'adapte à vos besoins et à votre rythme pour vous aider à atteindre vos objectifs. 
                        Avec une approche personnalisée, votre coach sera à vos côtés pour vous motiver, vous guider et vous soutenir à chaque étape de votre parcours. 
                        Si vous cherchez un accompagnement sur mesure pour réaliser vos objectifs de santé et de bien-être, le coaching personnalisé pourrait être la solution idéale pour vous.
                    </p>
                    <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                        <a href="/contact" className="uppercase">N'attendez plus !</a>
                    </button>
                </div>
            <Image
            src="/coaching2.jpg"
            alt="coaching"
            width={800}
            height={500}
            className="pt-12 sm:px-5"
            loading="eager"
            />
            </div>
        </div>
        <Footer />
        </>
    )
}