"use client";
import React from "react";
import signIn from "/pages/auth/signIn";
import { useRouter } from "next/navigation";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };
  return (
    <>
      <Navbar />
      <div className="pt-48 sm:pt-20 h-screen">
        <div className="">
          <h1 className="pt-8 pb-4 text-4xl text-center font-black px-80 sm:px-5 sm:text-center sm:text-xl uppercase">
            Connexion
          </h1>
          <form
            onSubmit={handleForm}
            className="column py-8 lg:py-16 px-4 mx-auto max-w-5xl"
          >
            <label
              htmlFor="email"
              className="text-left block mb-2 text-base font-medium text-black"
            >
              <p>E-mail</p>
              <input
                className="shadow-sm text-black text-sm rounded-none focus:ring-black focus:border-black block w-full p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </label>
            <label
              htmlFor="password"
              className="pt-10 text-left block mb-2 text-base font-medium text-black"
            >
              <p>Mot de passe</p>
              <input
                className="shadow-sm text-black text-sm rounded-none focus:ring-black focus:border-black block w-full p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
            <div className="pt-8"></div>
            <button
              className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-green-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              type="submit"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
