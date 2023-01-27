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
    <div className="bg-black bg-no-repeat overflow-hidden h-fit w-screen pt-10">
            <div className=" items-center justify-center w-full h-fit py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h- mx-auto overflow-x-hidden overflow-y-hidden">
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
                        <div className="w-full h-min mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-min w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">texte</h2>
                                                <div className="flex h-min items-end pb-6">
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
    </>
  );
}