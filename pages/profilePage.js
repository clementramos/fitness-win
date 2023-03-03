"use client";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import { useAuth } from "../Auth";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useRouter } from "next/router";

const ProfilePage = (cours) => {
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
    router.push("/loginPage");
  }

  return (
    <>
      <Navbar />
      <div className="card sm:pt-20 shadow-xl pt-24 pb-24 h-full flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
        <div className="column w-1/2 items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
          <h2 className="pb-10 text-4xl text-center font-black sm:px-5 sm:text-center sm:text-4xl">
            Bonjour !
          </h2>
          <p className="rounded-lg bg-gray-100 pt-2 text-2xl font-mono">
            {user.displayName}
          </p>
          <p className="rounded-lg bg-gray-100 pb-2 text-md font-mono">
            {user.email}
          </p>
          <img
            src={user.photoURL || "/placeholder_avatar.png"}
            alt="photo de profil"
            width={200}
            height={200}
            className="py-3 mx-auto rounded-lg"
          />
          <div className="flex flex-row justify-between mx-auto">
            <div className="flex flex-row mx-auto space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">Sympa la photo !</p>
            </div>
          </div>
          <p className="p-2 font-thin italic">
            Ce n'est pas vous ?{" "}
            <Link
              href="/loginPage"
              className="text-orange-400 hover:underline font-bold"
            >
              Changez de compte.
            </Link>
          </p>
          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/profil.svg"}
              alt="photo de profil"
              width={90}
              height={90}
              className="p-3 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <p className="pb-12 text-xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Votre espace personnel :
          </p>
          <div className="h-15">
            <Link
              href="/coursPersonnels"
              className="p-8 h-10 w-full mx-auto rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
            >
              Accédez à vos cours
              <img
                src={"/fitness.svg"}
                alt="fitness"
                width={50}
                height={50}
                className="pl-4"
              />
            </Link>
            <p className="p-2 font-thin italic">
              Nombres de cours possédés : owned.Courses
            </p>
            <p className="pt-5 pb-5 mx-auto px-2 grid grid-cols-2 grid-row-2 gap-4 sm:grid sm:grid-cols-1">
              <Link
                href="/blog"
                className="p-8 h-10 w-full rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
              >
                Accèdez au blog
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
                Accèdez au magasin
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
            Modifiez votre profil et préferences :
          </p>
          <div className="grid grid-cols-2 grid-row-2 gap-4 sm:grid sm:grid-cols-1">
            <p className="w-full px-5 h-12 pt-2 rounded-lg bg-gray-200 text-2xl font-mono">
              Mot de passe
            </p>
            <Link href="/" className="w-12">
              <img
                src={"/edit.svg"}
                alt="editer"
                width={70}
                height={70}
                className="pl-4 pt-2 h-12"
              />
            </Link>
            <p className="w-full px-5 h-12 pt-2 rounded-lg bg-gray-200 text-2xl font-mono">
              Liste de diffusion
            </p>
            <Link href="/" className="w-12">
              <img
                src={"/edit.svg"}
                alt="editer"
                width={70}
                height={70}
                className="pl-4 pt-2 h-12"
              />
            </Link>
            <p className="w-full px-5 h-12 pt-2 rounded-lg bg-gray-200 text-2xl font-mono">
              Numéro de téléphone
            </p>
            <Link href="/" className="w-12">
              <img
                src={"/edit.svg"}
                alt="editer"
                width={70}
                height={70}
                className="pl-4 pt-2 h-12"
              />
            </Link>
          </div>
          <div class="w-full pt-12 flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/bug.svg"}
              alt="bug"
              width={90}
              height={90}
              className="py-3 px-5 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <p className="pb-12 text-xl text-center font-black sm:px-48 sm:text-center sm:text-xl">
            Un problème ? Une fonctionnalité manquante ? Une suggestion ?{" "}
            <br></br> Contacter le webmaster !
          </p>
          <Link
            href="mailto:webmaster@fitnesswin.com"
            className="p-8 h-10 w-full mx-auto rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
          >
            Envoyer un mail
            <img
              src={"/mail.svg"}
              alt="mail"
              width={50}
              height={50}
              className="pl-4"
            />
          </Link>
          <p className="p-2 font-thin italic">
            <p className="text-red-500 underline font-bold">UNIQUEMENT </p>
            <p className="w-full sm:px-48">
              Les mails concernants le bon fonctionnement du site seront
              traités.
            </p>
          </p>
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
              onClick={() => signOut(auth).then(() =>{
                router.push("/loginPage");
              })}
            >
              Se déconnecter
            </button>
          </div>
          <div class="w-full pt-48 flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/delete.svg"}
              alt="supprimer"
              width={90}
              height={90}
              className="py-3 px-5 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <div className="text-center">
            <p className="p-2 pb-5 font-thin italic">
              <p className="text-red-500 underline font-bold">
                ATTENTION ! Cette action est définitive
              </p>
            </p>
            <button
              type="button"
              className="rounded-full text-xl border-2 border-red-600 bg-white px-8 py-2 font-bold text-red-600 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
            >
              Supprimer le compte
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
