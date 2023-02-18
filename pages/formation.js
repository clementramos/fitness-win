import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Formation () {
    return (
        <>
        <Head/>
        <Navbar />
        <div class="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-formation">
            <div className="text-center sm:w-full sm:p-5 pt-64 h-screen">
            <p className="text-white text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-48 sm:text-center uppercase font-bold tracking-tighter">formation</p>
              <p className="text-white text-center text-4xl sm:text-3xl font-light uppercase pb-12">Pour les futurs coachs ou professionnels en activité de remise en forme.</p>
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
            <Image
            src="/311570308_641559930777314_8448899628317687854_n.jpg"
            alt="formation"
            width={800}
            height={500}
            className="pl-12 pt-12 sm:px-5"
            loading="eager"
            />
            <div className="sm:pl-5">
                    <p className="text-black text-left text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">Transformez votre passion <br></br> pour le sport en une carrière épanouissante</p>
                    <p className="text-black text-left text-xl sm:text-2xl sm:pr-5 pb-12 pt-12 pr-5">
                    Vous aspirez à devenir un coach sportif ou vous êtes déjà un professionnel en activité de remise en forme, mais vous ne savez pas comment améliorer vos compétences et progresser dans votre carrière ? Je suis là pour vous aider. <br></br>
                    En proposant des devis sur-mesure pour la formation de futurs coachs sportifs, je peux analyser vos besoins et vous offrir une formation personnalisée adaptée à vos objectifs professionnels. <br></br>
                    Grâce à mon expérience et mes conseils, vous pourrez acquérir les connaissances et les compétences requises pour évoluer dans différents domaines des métiers de la forme, que ce soit en termes d'entraînement physique, de nutrition, de psychologie du sport ou de gestion de projet. <br></br>
                    N'attendez plus pour vous former et progresser dans votre carrière. <br></br> Contactez-moi dès maintenant pour en savoir plus sur mes services et pour bénéficier d'une formation sur-mesure adaptée à vos besoins spécifiques.
                    </p>
                    <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                        <a href="/contact" className="uppercase">N'attendez plus !</a>
                    </button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}