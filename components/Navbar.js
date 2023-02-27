import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'

const navigation = [
  { name: 'Cours', href: '/cours', current: false },
  { name: 'Coaching', href: '/coaching', current: false },
  { name: 'Formation', href: '/formation', current: false },
  { name: 'D\'Jo Edwards', href: '/biographie', current: false },
  { name: 'Blog', href: '/blog', current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center laptop:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center pr-10">
                  <a href='/#'>
                  <img
                    className="pl-5 block h-16 w-auto sm:hidden sm:justify-center"
                    src="LOGO DARK.png"
                    alt="FITNESS WIN"
                  />
                  <img
                    className="laptop:hidden h-16 w-auto lg:block lg:justify-start pl-10"
                    src="LOGO DARK.png"
                    alt="FITNESS WIN"
                  />
                  </a>
                </div>
                <div className="sm:hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-black' : 'text-white font-semibold hover:bg-white hover:text-black',
                          'px-3 py-2 rounded-md text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Language dropdown */}
              <Menu as="div" className="relative ml-3 pr-5">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Change language</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/traduction"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                          >
                            <Image 
                            src="/united-kingdom.png"
                            alt='english'
                            width={32}
                            height={32}
                            />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/traduction"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                          >
                            <Image 
                            src="/spain.png"
                            alt='espanol'
                            width={32}
                            height={32}
                            />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/traduction"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                          >
                            <Image 
                            src="/italy.png"
                            alt='italian'
                            width={32}
                            height={32}
                            />
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*LOGIN PAGE */}
                <Menu as="div" className="relative ml-3 pr-5">
                  <div>
                    <Menu.Button className="flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Login / logout</span>
                      <Image 
                            src="/account.svg"
                            alt='account'
                            width={32}
                            height={32}
                            />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-fit origin-top-right m-auto left-0 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                        <a
                          href="/SignIn"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                        >
                          Connexion
                          <Image
                            src="/login.svg"
                            alt='connexion'
                            width={20}
                            height={20} />
                        </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/SignOut"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                          >
                            Déconnexion
                            <Image 
                            src="/logout.svg"
                            alt='déconnexion'
                            width={20}
                            height={20}
                            />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/account"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-2 py-2')}
                          >
                            Compte
                            <Image 
                            src="/account1.svg"
                            alt='Compte'
                            width={20}
                            height={20}
                            />
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto  sm:pr-0">
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="laptop:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-white hover:text-black hover:ring-green-500 hover:border-green-500',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
