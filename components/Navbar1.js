import { Fragment } from 'react'
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion";

export default function Navbar() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(25);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 25 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

const cours = [
  {
    name: 'Step',
    href: '/construction',
  },
  {
    name: 'Lia',
    href: '/construction',
  },
  { 
    name: 'Renforcement',  
    href: '/construction', 
  },
  {
    name: 'Danse',
    href: '/construction',
  },
  {
    name: 'Pilâtes',
    href: '/construction',
  },
  {
    name: 'Streching',
    href: '/construction',
  },
]

const formations = [
  {
    name: 'Step',
    href: '/construction',
  },
  {
    name: 'Lia',
    href: '/construction'
  },
]

const parcours = [
  {
    name : 'Mon parcours',
    href : '/construction'
  },
  {
    name : 'Mes diplômes',
    href : '/construction'
  },
  {
    name : 'Mes titres',
    href : '/construction'
  }
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/*export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  {
*/

  return (
    <Popover className="fixed w-screen bg-black z-50" style={{
      background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    }}>
      <motion.div
      className="max-w-9xl mx-auto px-4 sm:px-6 border-hidden"
      layoutId="navbar">
      <div className="border-hidden">
        <div className="flex justify-between items-center border-hidden border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sm:hidden inline-flex items-center text-3xl font-medium text-white hover:text-amber-300	"><a href="../#">FITNESS WIN</a></span>
          </div>
          <Popover.Group as="nav" className="xs:hidden">                
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-amber-300	' : 'text-gray-500',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-amber-300'
                    )}
                  >
                    <span className="inline-flex items-center text-1xl font-medium text-white hover:text-amber-300">COURS</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-fit sm:px-0">
                      <div className="rounded-lg shadow-lg ring-10 ring-amber ring-opacity-50 overflow-hidden">
                        <div className="relative grid gap-0.5 bg-white sm:gap-0.5 sm:p-3">
                        <p className="text-base font-medium text-red-500 p-3 flex items-center rounded-lg justify-center hover:underline">COURS :</p>
                          {cours.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="p-3 flex items-center rounded-lg hover:bg-black justify-center	"
                            >
                              <div className="">
                                <p className="text-base font-medium text-amber-300">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                  
                </>
              )}
            </Popover>
          </Popover.Group>
          <Popover.Group as="nav" className="xs:hidden">                
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-amber-300	' : 'text-gray-500',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-amber-300'
                    )}
                  >
                    <span className="inline-flex items-center text-1xl font-medium text-white hover:text-amber-300">FORMATIONS</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-max sm:px-0">
                      <div className="rounded-lg shadow-lg ring-10 ring-amber ring-opacity-50 overflow-hidden">
                        <div className="relative grid gap-0.5 bg-white sm:gap-0.5 sm:p-3">
                        <p className="text-base font-medium text-red-500 p-3 flex items-center rounded-lg justify-center hover:underline">FORMATIONS :</p>
                          {formations.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="p-3 flex items-center rounded-lg hover:bg-black justify-center	"
                            >
                              <div className="">
                                <p className="text-base font-medium text-amber-300	">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                  
                </>
              )}
            </Popover>
          </Popover.Group>
          <Popover.Group as="nav" className="xs:hidden">                
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-amber-300	' : 'text-gray-500',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-amber-300'
                    )}
                  >
                    <span className="inline-flex items-center text-1xl font-medium text-white hover:text-amber-300">MOI</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-max sm:px-0">
                      <div className="rounded-lg shadow-lg ring-10 ring-amber ring-opacity-50 overflow-hidden">
                        <div className="relative grid gap-0.5 bg-white sm:gap-0.5 sm:p-3">
                        <p className="text-base font-medium text-red-500 p-3 flex items-center rounded-lg justify-center hover:underline">MOI :</p>
                          {parcours.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="p-3 flex items-center rounded-lg hover:bg-black justify-center	"
                            >
                              <div className="">
                                <p className="text-base font-medium text-amber-300	">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                  
                </>
              )}
            </Popover>
          </Popover.Group>
          <a href="/contact" className="inline-flex items-center text-1xl font-medium text-red-500 hover:text-amber-300	">
                      COACHING PERSONNALISE
          </a>
          <a href="/traduction" className="pl-5 inline-flex items-center text-1xl font-medium text-white hover:text-amber-300	">
                      FR / ENG
          </a>
        </div>
      </div>
      </motion.div>
    </Popover>
  )
};