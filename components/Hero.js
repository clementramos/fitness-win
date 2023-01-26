import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from 'next/link';

export default function Hero() {
  return (
    <>
    <div className="flex flex-row justify-end items-start bg-black bg-no-repeat overflow-hidden h-screen w-screen pt-48 sm:pt-24 xs:inline-block xs:bg-black sm:w-full sm:h-full sm:overflow-hidden">
        <div className=" laptop: hidden w-1/2 h-full bg-no-repeat bg-hero md:text-center sm:w-full xs:p-5 z-9999">
        </div>
            <div className="xl:w-1/2 md:text-center sm:w-full sm:p-5">
              <p className="text-white text-left text-8xl sm:text-5xl sm:w-full sm:pb-5 sm:text-left font-bold pb-16">FITNESS WIN</p>
              <p className="text-white text-left text-5xl sm:text-3xl font-semibold pb-4">FAISONS DU SPORT ENSEMBLE</p>
              <p className="text-white text-left text-4xl sm:text-2xl pb-5 pr-5">Je vous propose différents cours de sports de premiers pas à expert. </p>
              <p className="text-white text-left text-4xl sm:text-2xl pb-5 pr-5">Des cours adaptées à tous (Freestyle, de Danse, Renforcement, Stretching, Pilâtes ...).</p>
              <p className="text-white text-left text-4xl sm:text-2xl pb-5 pr-5">Les cours proposés vous permettront de progresser à votre rythme. L’idée étant de faire du sport en s’amusant afin garder la forme.</p>
            </div>
    </div>
    <div className="overflow-x-hidden bg-white">
    <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">VOTRE NIVEAU</span>
    </div>
    </div>
    <div className="flex flex-row justify-end items-start bg-black bg-no-repeat overflow-hidden h-screen w-screen pt-48 sm:pt-5 sm:inline-block xs:bg-hero sm:h-full xs:w-full ">
        <div className="grid grid-cols-3 w-full h-full bg-no-repeat bg-level md:text-center xs:w-full xs:p-5 z-9999">
          <div className="col-span-2">
          <p className="text-white text-8xl font-bold text-left pl-5 sm:text-5xl sm:w-full">CHOISISSEZ VOTRE <br></br> 
          <p className="w-1/2 text-white text-8xl font-bold sm:text-5xl sm:w-full"> NIVEAU</p></p>
          <p className="w-1/2 text-white text-5xl font-semibold pt-5 pl-5 text-left leading-normal sm:text-3xl sm:w-full">Progressez à votre rythme <br></br>avec les différents niveaux</p>
          <p className="laptop:hidden text-white text-3xl pt-5 font-semibold text-center leading-relaxed sm:text-left sm:pl-5 sm:w-full">PREMIERS PAS <br></br> DEBUTANT<br></br> INTERMEDIAIRE <br></br> CONFIRME <br></br> EXPERT</p>
          </div>
          <p className="sm:hidden text-white text-6xl font-semibold text-center leading-relaxed sm:w-full">PREMIERS PAS <br></br> DEBUTANT<br></br> INTERMEDIAIRE <br></br> CONFIRME <br></br> EXPERT</p>
        </div>  
    </div>
    <div className="overflow-x-hidden bg-white">
    <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">LES COURS DISPONIBLES</span>
    </div>
    </div>
    <div className="flex flex-row justify-end items-start bg-black bg-no-repeat overflow-hidden h-screen w-screen pt-10 sm:pt-5 sm:inline-block xs:bg-hero sm:h-full xs:w-full ">
        <div className="grid grid-cols-3 w-full h-full bg-no-repeat bg-programm md:text-center xs:w-full xs:p-5 z-9999">
          <div className="col-span-2">
          <p className="laptop:hidden text-white font-bold text-left sm:text-5xl sm:pl-5 sm:pt-0">LES COURS DISPONIBLES</p>
          <p className="text-white text-7xl font-bold text-left pt-20 pl-20 sm:text-3xl sm:pl-5 sm:pt-5">RENFORCEMENT</p>
          <p className="text-white text-7xl font-bold pt-20 pl-20 text-left sm:text-3xl sm:pl-5 sm:pt-5">PILATES</p>
          <p className="text-white text-7xl font-bold pt-20 pl-20 text-left sm:text-3xl sm:pl-5 sm:pt-5">STRETCHING</p>
          <p className="text-white text-7xl font-bold pt-20 pl-20 text-left sm:text-3xl sm:pl-5 sm:pt-5">DANCE</p>
          <p className="text-white text-7xl font-bold pt-20 pl-20 text-left sm:text-3xl sm:pl-5 sm:pt-5">LIA</p>
          <p className="text-white text-7xl font-bold pt-20 pl-20 text-left sm:text-3xl sm:pl-5 sm:pt-5">STEP</p>
          <p className="laptop:hidden text-white text-5xl font-semibold text-left sm:text-3xl sm:pl-5 sm:pt-5">POUR PLUS D'INFORMATIONS,</p>
          <Link href="/contact" className="laptop:hidden text-red-500 sm:text-3xl sm:text-left sm:pt-5">CLIQUEZ-ICI</Link>
          </div>
          <p className="sm:hidden text-white text-5xl font-semibold pt-20 pr-20 text-right leading-normal">POUR PLUS D'INFORMATIONS, <p className="text-red-500"><Link href="/contact">CLIQUEZ-ICI</Link></p> </p>
        </div>  
    </div>
    <div className="overflow-x-hidden bg-white">
    <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">TARIFS</span>
    </div>
    </div>
    <div className=" bg-black bg-no-repeat overflow-hidden h-screen w-screen pt-10 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full sm:pt-0 sm:h-full">
      <p className="text-white text-center text-8xl font-bold pt-10 pb-20 sm:text-5xl sm:pl-5 sm:pt-5 sm:pb-0 sm:text-left">7 PREMIERS JOURS GRATUITS</p>
      <div className="grid grid-cols-2 gap-20 p-20 sm:inline-block sm:h-full sm:p-10 sm:grid sm:grid-cols-1 sm:gap-10">
        <button className="bg-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-6xl py-36 px-4 border border-gray-400 rounded shadow sm:py-5 sm:text-xl sm:w-full">
          <a href="#contact">
          19.99 € / MOIS <br></br>     
          300 € A L'ANNEE
          </a>
        </button>
        <button className="bg-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-6xl py-36 px-4 border border-gray-400 rounded shadow sm:py-5 sm:text-xl sm:w-full">
          <a href="#contact">
          PRIX / SEANCE <br></br> 
          SUR DEVIS
          </a>
          </button>
      </div> 
      <div className="pl-20 pr-20 sm:pl-10 sm:pr-10 sm:pb-10 sm:text-xl sm:w-full">
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md sm:py-5 sm:text-xl sm:w-full" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="sm:hidden font-bold">Information</p>
              <p class="text-sm">Pour en savoir plus, n'hésitez pas à cliquer sur la formule vous correspondant le mieux, je vous recontacterai dans les plus brefs délais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-x-hidden bg-white">
    <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
        <span className="mx-4 text-black h-fit text-center bg-white text-6xl sm:text-xl">PENSEZ-Y</span>
    </div>
    </div>
    <div className="bg-black bg-no-repeat overflow-hidden h-screen w-screen pt-10">
            <div className=" items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/xY21nbx/style-sportif-a-la-ville-homme.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/7jHdrrG/lieux-coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/dbP9qQy/coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/xY21nbx/style-sportif-a-la-ville-homme.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/7jHdrrG/lieux-coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/dbP9qQy/coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/xY21nbx/style-sportif-a-la-ville-homme.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/7jHdrrG/lieux-coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/dbP9qQy/coach-sportif.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/xY21nbx/style-sportif-a-la-ville-homme.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/JBj5P2V/stress-performance.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/JBj5P2V/stress-performance.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/JBj5P2V/stress-performance.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/hmkKbKv/jeunes-sportifs-s-entrainant-dans-salle-sport-matin-1157-28954.webp" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tc70wQ6/marche-coach-sportif-1024x637.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/JBj5P2V/stress-performance.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tc70wQ6/marche-coach-sportif-1024x637.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
    </div>   
    <footer class="p-4 bg-black sm:p-6 ">
    <div class="sm:grid sm:justify-between">
        <div class="mb-6 sm:mb-0">
            <a href="https://fitnesswin.com/" class="flex items-center">
                <img src="https://i.ibb.co/cbQfXN0/LOGO-DARK.png" class="h-36 mr-3" alt="fitnesswin Logo" />
                <span class="self-center text-5xl text-white font-semibold whitespace-nowrap sm:text-3xl">FITNESS WIN</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-2xl font-semibold text-gray-100 uppercase dark:text-white">Resources</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://fitnesswin.com/" class="hover:underline">FITNESS WIN</a>
                    </li>
                    <li class="mb-4">
                        <a href="" class="hover:underline">D'JO EDWARDS</a>
                    </li>
                    <li>
                        <a href="/contact" class="hover:underline">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-2xl font-semibold text-gray-100 uppercase dark:text-white">suivez-moi</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                        <a href="" class="hover:underline ">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="" class="hover:underline">TWITTER</a>
                    </li>
                </ul>
            </div>
            <div className="sm:">
                <h2 class="mb-6 text-2xl font-semibold text-gray-100 uppercase dark:text-white">Legal</h2>
                <ul class="text-white dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">PRIVACY POLICY</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">TERMES &amp; CONDITIONS</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://fitnesswin.com/" class="hover:underline">Dev' up !</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Dribbbel account</span>
            </a>
        </div>
    </div>
    </footer>
    </>
  );
}