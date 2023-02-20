import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Biographie () {
    return (
        <>
        <Head/>
        <Navbar />
        <div class="flex items-start h-screen bg-no-repeat bg-cover bg-biographie sm:bg-biographiesm">
            <div className="sm:w-full sm:pt-[530px] pt-[700px] h-screen">
                <p className="text-white text-center text-[9rem] sm:text-7xl sm:w-full sm:pb-5 sm:pt-48 sm:pl-10 sm:text-left uppercase font-bold tracking-tighter">D'jo edwards</p>
            </div>
        </div>
        <div id="djo" className="pt-12 pb-12 h-full bg-white">
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
                <div className="pl-12">
                    <p className="text-black text-left text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">Apprenez-en plus sur moi !</p>
                    <p className="text-black text-left text-xl sm:text-2xl sm:pr-5 pb-12 pt-12  pr-24 pr-5">
                        Je suis D'jo Edwards, un coach sportif passionné qui pratique et enseigne le fitness depuis plus de 15 ans. Ma passion pour la remise en forme m'a conduit à étudier les sciences du sport, la nutrition et l'anatomie, afin d'être en mesure de proposer des programmes d'entraînement efficaces et personnalisés à chacun de mes clients.
                        Mon expérience en tant que coach sportif m'a permis de travailler avec des clients de tous les niveaux, des débutants aux athlètes confirmés, et de les aider à atteindre leurs objectifs de remise en forme. Que vous souhaitiez perdre du poids, renforcer votre corps ou simplement améliorer votre condition physique, je suis là pour vous aider.
                        Ma philosophie de coaching est axée sur l'écoute, l'adaptation et la motivation. Je crois que chaque client est unique et que chaque programme d'entraînement doit être personnalisé en fonction de ses besoins et de ses objectifs. Je suis convaincu que l'entraînement doit être amusant et motivant pour être efficace, c'est pourquoi j'aime varier mes séances et proposer des exercices innovants et stimulants. Si vous cherchez un coach sportif passionné, compétent et à l'écoute, n'hésitez pas à me contacter pour en savoir plus sur mes services.
                    </p>
                    <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                        <a href="/contact" className="uppercase">réserver une séance</a>
                    </button>
                </div>
            <Image
            src="/vidéo.png"
            alt="vidéo youtube"
            width={800}
            height={500}
            className="pt-16 pl-10 sm:px-5"
            loading="eager"
            />
            </div>
        </div>
        <Footer />
        </>
    )
}