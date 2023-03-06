"use client";
import { React, createContext, useEffect, useState, useContext } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, fbProvider } from "../firebaseConfig";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import signIn from "/pages/auth/signIn";

const AuthContext = createContext({});

export default function AccountPage({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/profilePage");
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const [currentUser, setCurrentUser] = useState(null);
  let router = useRouter();

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
    } else {
    }
  }, [currentUser]);

  return (
    <>
      <Head />
      <Navbar />
      <div class="h-full bg-white bg-no-repeat bg-cover to-orange-400">
        <div className="pt-16 pb-6 flex flex-col items-center justify-center">
          <Image
            src="/LOGONOBG.png"
            alt="programme"
            width={200}
            height={200}
            className="mx-auto sm:px-5"
            loading="lazy"
          />
          <div className="bg-white shadow-2xl rounded w-1/4 sm:w-full sm:m-6 p-10">
            <p className="text-3xl text-left font-black sm:text-center sm:text-2xl w-fit">
              Création de votre compte
            </p>
            <p className="pb-4 text-lg text-left font-thin sm:pb-10 sm:text-center sm:text-xl w-fit">
              Déjà membre ?{" "}
              <a
                href="loginPage"
                className="underline decoration-orange-400 hover:text-orange-400 font-medium"
              >
                Connectez-vous ici.
              </a>
            </p>
            {/*<div className="flex flex-col items-center justify-center place-content-center w-center">*/}
            {/*<div className="bg-gray-200 shadow rounded w-3/4 sm:w-full p-10">*/}
            <button
              aria-label="Continue with google"
              role="button"
              class="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full sm:w-full"
              onClick={loginWithGoogle}
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p class="text-base font-medium ml-4 text-gray-700">
                Créer votre compte avec Google
              </p>
            </button>
            <div class="sm:w-96 w-full flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <p class="text-base font-medium leading-4 px-2.5 text-black">
                OU
              </p>
              <hr class="w-full bg-black h-0.5" />
            </div>

            <form className="lg:py-16 w-full" onSubmit={handleForm}>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">Prénom :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="Mohamed"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Nom :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="Ali"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Sexe :</p>
                <input
                  className="text-orange-400 focus:border-none focus:ring focus:border-none focus:ring-orange-400"
                  value="homme"
                  required
                  type="radio"
                  name="email"
                  id="txtEmail"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                /> Homme <br></br>
                <input
                  className="text-orange-400 focus:border-none focus:ring focus:border-none focus:ring-orange-400"
                  value="femme"
                  required
                  type="radio"
                  name="email"
                  id="txtEmail"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                /> Femme <br></br>
                <input
                  className="text-orange-400 focus:border-none focus:ring focus:border-none focus:ring-orange-400"
                  value="autre"
                  required
                  type="radio"
                  name="email"
                  id="txtEmail"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                /> Autre
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Date de naissance :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="date"
                  name="email"
                  id="txtEmail"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Numéro de téléphone :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="tel"
                  name="email"
                  id="txtEmail"
                  placeholder="06 07 08 09 10"
                  minLength="10"
                  maxLength="10"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Photo :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="file"
                  name="email"
                  id="txtEmail"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div class="sm:w-96 w-full flex items-center justify-between py-5 z-50">
                <hr class="w-full bg-black h-0.5" />
                <p class="text-base font-medium leading-4 px-2.5 text-black">
                  Sécurité
                </p>
                <hr class="w-full bg-black h-0.5" />
              </div>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">E-mail :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="mohamedali@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="password"
                className="pt-2 text-left block mb-2 text-base font-medium text-black"
              >
                <p className="pb-1 pt-5">Mot de passe :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="password"
                  name="password"
                  id="txtPassword"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label
                htmlFor="password"
                className="pt-2 text-left block mb-2 text-base font-medium text-black"
              >
                <p className="pb-1 pt-5">Confirmez le mot de passe :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="password"
                  name="password"
                  id="txtPassword"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="pt-8"></div>
              <button
                className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                type="submit"
                id="btnLogin"
              >
                Créer votre compte
              </button>
            </form>

            {/*<a href="signInWithMail">
              <button
                aria-label="Continue with twitter"
                role="button"
                class="focus:outline-none focus:ring focus:border-none focus:ring-orange-400 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img src="/email.png" alt="mail" />
                <p class="text-base font-medium ml-4 text-gray-700">
                  Connexion par mail
                </p>
              </button>
  </a>*/}
            <p className="pt-8 pb-4 text-xl text-center font-thin italic sm:px-5 sm:text-center sm:text-sm w-fit">
              En créant votre compte, vous indiquez acceptez notre{" "}
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

export const useAuth = () => useContext(AuthContext);
