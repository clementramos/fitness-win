import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Cours () {
    return (
        <>
        <Head/>
        <Navbar />
        <div class="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-groupe sm:bg-groupesm">
            <div className="text-center sm:w-full sm:p-5 pt-64 h-screen">
            <p className="text-white text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-48 sm:text-center uppercase font-bold tracking-tighter">cours en groupe</p>
              <p className="text-white text-center text-4xl sm:text-3xl font-light uppercase pb-12">J'interviens avec vous en extérieur ou en salle.</p>
              <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact" className="uppercase text-2xl">être recontacté</a>
              </button>
              <p className="text-white text-center text-4xl sm:text-3xl font-light uppercase pt-12">En savoir plus</p>
              <button class="bg-transparent py-2 px-4">
                <Link href="#groupe" className="uppercase" scroll={false}><img src="/arrow_down.svg"/></Link>
              </button>
            </div>
        </div>
        <div id="groupe" className="pt-12 pb-12 h-full bg-white">
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
                <div className="pl-12">
                    <p className="text-black text-left text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">Rejoignez la communauté de fitness dynamique et atteignez vos objectifs ensemble !</p>
                    <p className="text-black text-left text-xl sm:text-2xl sm:pr-5 pb-12 pt-12  pr-24 pr-5">
                        Si vous cherchez un moyen de vous entraîner efficacement tout en vous amusant et en partageant votre passion pour le fitness avec d'autres personnes, mes cours de fitness en groupe sont faits pour vous. Que vous préfériez vous entraîner en intérieur ou en extérieur, je propose des séances pour tous les niveaux et tous les objectifs.
                        Les tarifs des séances en groupe sont sur devis, en fonction du nombre de participants et du lieu de l'entraînement. Si vous souhaitez vous engager dans un suivi régulier pour atteindre vos objectifs de remise en forme, vous pouvez également souscrire à un abonnement pour venir faire cours avec moi dans des salles de sport partenaires.
                        En choisissant de vous entraîner en groupe avec moi, vous bénéficierez d'un environnement stimulant et motivant, qui vous aidera à vous dépasser et à atteindre vos objectifs. N'hésitez pas à me contacter pour plus d'informations et pour réserver votre place dans l'un de mes cours de fitness en groupe.
                    </p>
                    <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                        <a href="/contact" className="uppercase">N'attendez plus !</a>
                    </button>
                </div>
            <Image
            src="/groupe1.jpg"
            alt="cours en groupe"
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