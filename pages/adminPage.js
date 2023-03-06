"use client";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import { useAuth } from "../Auth";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useRouter } from "next/router";

const adminPage = (cours) => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    const phoneNumber = user.phoneNumber;
  }

  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/#");
  }

  return (
    <>
      <Navbar />
      <div className="card sm:pt-20 shadow-xl pt-24 pb-24 h-full flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
        <div className="column w-1/2 items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
          <h2 className=" text-4xl text-center font-black sm:px-5 sm:text-center sm:text-4xl">
            Bonjour !
          </h2>
          <h2 className="pb-10 text-2xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Bienvenue dans l'espace administration du site
          </h2>
          <p className="rounded-lg bg-gray-100 pt-2 text-2xl font-mono">
            Connecté sous :
          </p>
          <p className="rounded-lg bg-gray-100 pb-2 text-md font-mono">
            {user.email}
          </p>
          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/admin.svg"}
              alt="admin"
              width={90}
              height={90}
              className="p-3 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <p className="pb-2 text-xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Accès rapide :
          </p>
          <div className="h-15">
            <p className="pt-5 pb-5 mx-auto px-2 grid grid-cols-2 grid-row-2 gap-4 sm:grid sm:grid-cols-1">
              <Link
                href="/blog"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Ecrire un article
                <img
                  src={"/blog.svg"}
                  alt="blog"
                  width={50}
                  height={50}
                  className="pl-4"
                />
              </Link>
              <Link
                href="/shop"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Ajouter des articles
                <img
                  src={"/shop.svg"}
                  alt="magasin"
                  width={50}
                  height={50}
                  className="pl-4"
                />
              </Link>
            </p>
          </div>

          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/settings1.svg"}
              alt="parametres"
              width={90}
              height={90}
              className="py-3 px-5 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <p className="pb-12 text-xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Accès complet :
          </p>
          <div className="h-15">
            <p className="pt-5 pb-5 mx-auto px-2 grid grid-cols-2 grid-row-2 gap-4 sm:grid sm:grid-cols-1">
              <Link
                href="/blog"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Gérer le blog
              </Link>
              <Link
                href="/shop"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Gérer les utilisateurs
              </Link>
              <Link
                href="/shop"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Gérer le magasin
              </Link>
              <Link
                href="/shop"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Demande de modification
              </Link>
            </p>
          </div>
          <div class="w-full pt-12 flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/logout1.svg"}
              alt="logout"
              width={90}
              height={90}
              className="py-3 px-5 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <div className="text-center ">
            <button
              type="button"
              className="rounded-full text-xl border-2 border-orange-400 bg-white px-8 py-2 font-bold text-orange-400 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white"
              onClick={() =>
                signOut(auth).then(() => {
                  router.push("/loginPage");
                })
              }
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default adminPage;
