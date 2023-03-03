import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig";

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "cours"));
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      price: doc.data().price,
      smallDescription: doc.data().smallDescription,
    });
  });

  return data;
};

const Shop = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setCourses(data));
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <>
      <Navbar />
      <div className="h-full pt-48 pb-48 flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center">
        <div className="column w-3/4 items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
          <p className=" text-4xl text-center font-black sm:px-5 sm:text-center sm:text-2xl">
            Voici vos cours disponibles à l'achat :
          </p>
          <p className="pb-10 sm:pb-5 text-xl text-center font-thin sm:px-5 sm:text-center sm:text-sm">
            Cliquez sur un cours pour plus de détails{" "}
          </p>
          <div className="text-center">
            <button
              type="button"
              className="rounded-sm text-xl border-2 border-black bg-white px-8 py-2 font-bold text-black hover:bg-slate-200 focus:bg-black focus:text-white"
            >
              <a href="cart">
                Votre panier : {3} article
                {/*<img
                  src={"/panier.svg"}
                  alt="panier"
                  width={50}
                  height={20}
                  className="p-3 mx-auto rounded-lg"
  />*/}
              </a>
            </button>
          </div>
          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/sell.svg"}
              alt="vente"
              width={90}
              height={90}
              className="p-3 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          {!selectedCourse && (
            <ol className="grid grid-cols-4 gap-4 sm:grid sm:grid-cols-1 sm:gap-4 h-full">
              {courses.map((course) => (
                <>
                  <div className="block h-full">
                    <div className="pb-3 flex flex-col items-center justify-center h-full w-full sm:w-1/2 mx-auto rounded shadow-xl border font-bold flex items-center justify-center ">
                      <li key={course.id} className="w-full">
                        <img
                          src={"/placeholder.png"}
                          alt="image"
                          width={450}
                          height={450}
                          className="p-3 rounded cursor-pointer "
                        />
                        <p className="text-3xl font-bold">
                          {course.title}
                        </p>
                        <p className="font-thin text-lg pb-4">
                          {course.smallDescription}
                        </p>
                        <p className="text-2xl pb-4">{course.price} €</p>
                        <a href="addToCart">
                          <button
                            type="button"
                            className="rounded-sm text-xl border-2 border-green-600 bg-green-400 px-8 py-2 font-bold text-white hover:bg-green-500 focus:bg-black focus:text-white"
                          >
                            Ajouter au panier
                          </button>{" "}
                        </a>
                      </li>
                    </div>
                  </div>
                </>
              ))}
            </ol>
          )}
          <div className="text-center pt-10">
            <button
              type="button"
              className="rounded-sm text-xl border-2 border-black bg-white px-8 py-2 font-bold text-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              <a href="profilePage">Retour au profil</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
