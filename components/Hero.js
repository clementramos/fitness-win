import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';

const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          delay: 0.5
        }
      }
  };


export default function Hero() {
    const { asPath } = useRouter();
    console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <>
    <AnimatePresence
	      initial={false}
	      mode="wait"
	    />
    <motion.div
    key={asPath}
    variants={variants}
    animate="in"
    initial="out"
    exit="out"
    />
    <div className="testFont items-start bg-hero1 sm:bg-herosm bg-cover overflow-hidden h-screen w-screen pt-56 sm:pt-56 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <div className="laptop: hidden h-full bg-no-repeat bg-hero md:text-center sm:w-full xs:p-5 z-9999">
        </div>
            <div className="text-center sm:w-full sm:p-5 h-screen">
              <p className="text-white text-center text-[12rem] sm:text-5xl sm:w-full sm:pb-5 sm:text-center font-['Coalition'] tracking-wider">FITNESS WIN</p>
              <p className="text-white text-center text-4xl sm:text-3xl font-light pb-4">FAISONS DU SPORT ENSEMBLE</p>
              <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact">COMMENCEZ L'ESSAI DE 7 JOURS</a>
              </button>
              <p className="text-white text-center text-xl sm:text-2xl pb-5 pt-5 pr-5">Je suis D’jo Edwards, je vous propose différents cours de fitness quel que soit votre niveaux, on progresse, on s’amuse, alors rejoignez moi. 
              {/*<img src="/youtube.png" alt="youtube channel" className="h-24"></img>*/}
              </p>
              {/*<p className="text-white text-center text-4xl sm:text-2xl pb-5 pr-5">Des cours adaptées à tous (Freestyle, de Danse, Renforcement, Stretching, Pilâtes ...).</p>
              <p className="text-white text-center text-4xl sm:text-2xl pb-5 pr-5">Les cours proposés vous permettront de progresser à votre rythme. L’idée étant de faire du sport en s’amusant afin garder la forme.</p>*/}
            </div>
    </div>
    <div className="text-center bg-white bg-cover overflow-hidden h-full w-screen pt-12 sm:pt-24 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <Image 
        src="/PROGRAMMES VIDEOS.png"
        alt="programme"
        width={1200}
        height={687}
        className="mx-auto sm:px-5"
        loading="eager"
        />
        <p className="pt-8 text-xl font-bold px-80 sm:px-5 sm:text-justify">NOUVEAU - Programmes disponibles sous forme de vidéos</p>
        <p className="pt-8 pb-8 text-md font-thin px-80 sm:px-5 sm:text-justify">Des cours de sport en vidéo sont désormais disponibles pour les amateurs de fitness et les sportifs en herbe. Pour y accéder, il suffit de souscrire à un abonnement spécial. Ce dernier offre un accès illimité à une variété de cours en ligne, conçus pour s'adapter à tous les niveaux et à toutes les disciplines sportives. Les vidéos sont enseignées par un professionnel du fitness expérimenté, garantissant une qualité de formation optimale. Profitez de cette opportunité pour améliorer votre condition physique et atteindre vos objectifs sportifs en vous entraînant à la maison ou où que vous soyez.</p>
        <div className="text-center bg-white bg-cover overflow-hidden h-full w-screen pb-12 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact">EN SAVOIR PLUS</a>
        </button>
        </div>
    </div>
    <hr class="my-6 border-orange-400 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <p className="text-black text-center text-[12rem] sm:text-5xl sm:w-full sm:pb-5 pb-10 sm:text-center font-['Coalition'] tracking-wider">Le concept</p>
    <div className="grid grid-cols-2 sm:grid sm:grid-cols-1 bg-concept sm:bg-conceptsm bg-cover h-screen sm:h-full w-screen pt-12 pb-12">
      <Link href="/contact">
    <Image 
        src="/niveaux.png"
        alt="programme"
        width={400}
        height={400}
        className="mx-auto sm:p-5 "
        loading="eager"
        />
        </Link>
        <Link href="/construction">
        <Image 
        src="/cours.png"
        alt="programme"
        width={400}
        height={400}
        className="mx-auto sm:p-5"
        loading="eager"
        />
        </Link>
        <Link href="/coaching">
        <Image 
        src="/coaching3.png"
        alt="programme"
        width={400}
        height={400}
        className="mx-auto sm:p-5"
        loading="eager"
        />
        </Link>
        <Link href="/formation">
        <Image 
        src="/formation.png"
        alt="programme"
        width={400}
        height={400}
        className="mx-auto sm:p-5"
        loading="eager"
        />
        </Link>
    </div>
    {/*<div className="flex flex-row justify-end items-start bg-hero bg-cover overflow-hidden h-screen w-screen pt-12 sm:pt-5 sm:inline-block xs:bg-hero  xs:w-full ">
        <div className="grid grid-cols-3 w-full h-full bg-no-repeat md:text-center xs:w-full xs:p-5 z-9999 pl-5">
          <div className="col-span-1 bg-white h-min w-fit p-5">
          <p className="text-black text-2xl font-thin text-left pl-5 sm:text-5xl sm:w-full pt-5">POUR TOUT LE MONDE</p>
          <p className="text-black text-4xl font-semibold pl-5 text-left leading-normal sm:text-3xl sm:w-full">CHOISSISEZ VOTRE NIVEAU</p>
          <p className="laptop:hidden text-black text-3xl pt-5 font-semibold text-center leading-relaxed sm:text-left sm:pl-5 sm:w-full">PREMIERS PAS <br></br> DEBUTANT<br></br> INTERMEDIAIRE <br></br> CONFIRME <br></br> EXPERT</p>
          <p className="sm:hidden text-black text-justify text-xl font-light text-left pt-5 pl-5 pb-5 leading-relaxed sm:w-full">Les cours de sport sont conçus pour s'adapter à tous les niveaux, que vous soyez un débutant ou un expert.<br></br> Si vous êtes un débutant, le niveau <strong className="font-bold">"Premiers Pas"</strong> est fait pour vous, avec des cours conçus pour vous familiariser avec les bases du sport que vous avez choisi.<br></br> Si vous avez déjà quelques compétences, le niveau <strong className="font-bold">"Débutant"</strong> est là pour vous aider à les développer.<br></br> Pour ceux qui ont déjà une expérience pratique, le niveau <strong className="font-bold">"Intermédiaire"</strong> offre des cours plus avancés pour vous aider à améliorer vos compétences.<br></br> Les sportifs confirmés peuvent rejoindre le niveau <strong className="font-bold">"Confirmé"</strong>, qui propose des cours pour les aider à atteindre leur plein potentiel.<br></br> Les athlètes les plus expérimentés peuvent se joindre au niveau <strong className="font-bold">"Expert"</strong>, où ils peuvent développer leurs compétences à un niveau encore plus élevé. Tous les niveaux sont conçus pour être accessibles et stimulants, vous aidant à atteindre vos objectifs de sport de la manière la plus efficace possible.</p>
          <div className="pl-5">
          <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact">COMMENCEZ DES AUJOURD'HUI</a>
        </button>
        </div>
          </div>
        </div>  
            </div>*/}
    <div className="text-left bg-white bg-cover overflow-hidden h-full w-screen pt-12 sm:pt-24 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <Image 
        src="/Mobile version.png"
        alt="programme"
        width={1200}
        height={687}
        className="mx-auto sm:px-5"
        />
        <p className="pt-8 text-xl font-bold px-80 sm:px-5 sm:text-justify uppercase">REJOIGNEZ LA COMMUNAUTé</p>
        <p className="pt-8 pb-8 text-md font-thin px-80 sm:px-5 sm:text-justify">Il est temps de rejoindre une communauté de sportifs déterminés à atteindre leurs objectifs fitness. Avec un coach diplômé et expérimenté, vous bénéficierez d'un encadrement personnalisé pour atteindre vos objectifs. Que vous cherchiez à améliorer votre condition physique, à perdre du poids ou à vous préparer pour une compétition, je vous aiderai à mettre en place un plan d'entraînement sur mesure pour atteindre vos objectifs de manière efficace. Rejoindre notre communauté de sportifs, c'est également bénéficier de l'énergie et de l'entraide de personnes qui partagent les mêmes passions et les mêmes objectifs que vous. N'attendez plus pour vous lancer et atteindre vos objectifs sportifs.</p>
        <div className="text-left px-80 bg-white bg-cover overflow-hidden h-full w-screen pb-24 sm:pb-8 xs:inline-block xs:bg-black sm:w-full sm:pl-5 sm:h-full sm:w-screen sm:text-center ">
        <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact">COMMENCEZ VOTRE ESSAI GRATUIT</a>
        </button>
        </div>
        <p className="pt-8 pb-12 text-4xl text-center font-bold px-80 sm:px-5 sm:text-center sm:text-xl uppercase">les cours disponibles</p>
        <div className="pb-24">
        <Image
        src="/Programmes FW (1).png"
        alt="programme"
        width={1200}
        height={687}
        className="mx-auto sm:px-5 pb-12"
        />
        <div className="text-center px-80 bg-white bg-cover overflow-hidden h-full w-screen pb-12 xs:inline-block xs:bg-black sm:w-full sm:pl-5 sm:pb-8 sm:text-center sm:h-full sm:overflow-hidden">
        <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact" className="uppercase">Découvrir les cours</a>
        </button>
        </div>
        </div>
    <hr class="my-6 border-orange-400 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    </div>
    <div className=" bg-white bg-no-repeat overflow-hidden h-full w-screen pt-10 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full sm:pt-0 sm:h-full">
      <p className="text-black text-center text-4xl uppercase font-bold pt-10 pb-20 sm:text-xl sm:px-10 sm:pt-5 sm:pb-0 sm:text-center">LES 7 PREMIERS JOURS SONT GRATUITS - ANNULEZ à TOUT MOMENT</p>
      <div className="grid grid-cols-2 gap-20 p-20 sm:inline-block sm:h-full sm:p-10 sm:grid sm:grid-cols-1 sm:gap-10">
        <a href="/contact">
        <Image
        src="/1.png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        />
        </a>
        <a href="/contact">
        <Image
        src="/2.png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        />
        </a>
      </div> 
      <div className="pl-48 pr-48 pb-20 sm:pl-10 sm:pr-10 sm:pb-10 sm:text-xl sm:w-full">
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md sm:py-5 sm:text-xl sm:w-full" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="sm:hidden text-xl font-bold">Information</p>
              <p class="text-lg sm:text-sm">Pour avoir un prix à la séance, merci de remplir le formulaire de contact en cliquant <a href="/contact" className="underline font-bold">ICI</a> , je vous recontacterai dans les plus brefs délais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center bg-white bg-cover overflow-hidden h-full w-screen pt-12 sm:pt-6 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <hr class="my-6 border-orange-400 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <p className="pt-8 text-4xl font-bold px-80 sm:px-5 pb-16 sm:pb-8 sm:text-xl sm:px-10 sm:pt-5 sm:pb-0 sm:text-center">PENSEZ-Y</p>
        <div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
        <Image
        src="/3.png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        />
        <Image
        src="/2(1).png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        /><Image
        src="/1(1).png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        /><Image
        src="/4.png"
        alt="programme"
        width={600}
        height={340}
        className="mx-auto sm:px-5 pb-12"
        />
        </div>
        <div className="pb-24 pt-12">
        <button class="bg-black hover:bg-white hover:border-2 hover:border-black text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-none">
                <a href="/contact" className="uppercase">N'attendez plus !</a>
        </button>
        </div>
    </div>
    </>
  );
}