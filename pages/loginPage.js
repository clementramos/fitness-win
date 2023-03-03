import { React, createContext, useEffect, useState, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, fbProvider } from "../firebaseConfig";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

const AuthContect = createContext({});

export default function AccountPage({ children }) {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const loginWithFacebook = () => {
    signInWithPopup(auth, fbProvider);
  };

  const [currentUser, setCurrentUser] = useState(null);
  let router = useRouter()

  useEffect(() => {
    const auth = getAuth(app);
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCurrentUser(null);
        return;
      }
      const token = await user.getIdToken();
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      router.push('/profilePage')
    }
  }, [currentUser]);
 


  return (
    <>
      <Head />
      <Navbar />
      <div class="h-full bg-gradient bg-no-repeat bg-cover to-orange-400">
        <div className="pt-24 pb-48 flex flex-col items-center justify-center">
          <Image
            src="/LOGONOBG.png"
            alt="programme"
            width={200}
            height={200}
            className="mx-auto sm:px-5"
            loading="eager"
          />
          <div className="bg-white shadow rounded w-1/4 sm:m-6 p-10 mt-16">
            <p className="text-3xl text-left font-black sm:text-center sm:text-2xl w-fit">
              Connexion à votre compte
            </p>
            <p className="pb-4 text-lg text-left font-thin sm:pb-10 sm:text-center sm:text-xl w-fit">
              Pas de compte ?{" "}
              <a
                href="signup"
                className="underline decoration-orange-400 hover:text-orange-400 font-medium"
              >
                Créer-en un ici.
              </a>
            </p>
            {/*<div className="flex flex-col items-center justify-center place-content-center w-center">*/}
            {/*<div className="bg-gray-200 shadow rounded w-3/4 sm:w-full p-10">*/}
            <button
              aria-label="Continue with google"
              role="button"
              class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
              onClick={loginWithGoogle}
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p class="text-base font-medium ml-4 text-gray-700">
                Connexion avec Google
              </p>
            </button>
            <button
              aria-label="Continue with twitter"
              role="button"
              class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              onClick={loginWithFacebook}
            >
              <img src="/facebook.png" alt="facebook" />
              <p class="text-base font-medium ml-4 text-gray-700">
                Connexion avec Facebook
              </p>
            </button>
            <div class="w-96 flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <p class="text-base font-medium leading-4 px-2.5 text-black">
                OU
              </p>
              <hr class="w-full bg-black h-0.5" />
            </div>
            <a href="signInWithMail">
              <button
                aria-label="Continue with twitter"
                role="button"
                class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img src="/email.png" alt="mail" />
                <p class="text-base font-medium ml-4 text-gray-700">
                  Connexion par mail
                </p>
              </button>
            </a>
            {/*<a href="signInWithPhone">
              <button
                aria-label="Continue with twitter"
                role="button"
                class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img src="/smartphone.png" alt="phone" />
                <p class="text-base font-medium ml-4 text-gray-700">
                  Connexion par téléphone
                </p>
              </button>
            </a>}
            {/*</div>*/}
            {/*</div>*/}
            <p className="pt-8 pb-4 text-xl text-center font-thin italic sm:px-5 sm:text-center sm:text-sm w-fit">
              En continuant, vous indiquez acceptez notre{" "}
              <a
                href="javascript:void(0)"
                class="underline decoration-orange-400 hover:text-orange-400"
                target="_blank"
              >
                politique de confidentialité{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
