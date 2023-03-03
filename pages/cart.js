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
          <p className="text-4xl text-left font-black sm:px-5 sm:text-center sm:text-2xl">
            Voici votre panier :
          </p>
          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/panier.svg"}
              alt="panier"
              width={90}
              height={90}
              className="p-3 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          <div className="grid sm:grid-cols-4 sm:gap-4 sm:grid-cols-4 sm:gap-4">
            <div className="overflow-x-auto sm:col-span-3">
              <table className="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th class="p-5 text-left">Article</th>
                    <th class="p-5 text-right">Quantitée</th>
                    <th class="p-5 text-right">Prix</th>
                    <th class="p-5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td>
                      <a href="/shop" className="flex items-center">
                        <img
                          src={"/placeholder.png"}
                          alt="panier"
                          width={90}
                          height={90}
                          className="p-3  rounded-lg"
                        />
                        <p className="inline-block text-lg">Nom du cours</p>
                      </a>
                    </td>
                    <td class="p-5 text-right">
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td class="p-5 text-right">50 €</td>
                    <td class="p-5 text-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td>
                      <a href="/shop" className="flex items-center">
                        <img
                          src={"/placeholder.png"}
                          alt="panier"
                          width={90}
                          height={90}
                          className="p-3  rounded-lg"
                        />
                        <p className="inline-block text-lg">Nom du cours</p>
                      </a>
                    </td>
                    <td class="p-5 text-right">
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td class="p-5 text-right">50 €</td>
                    <td class="p-5 text-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td>
                      <a href="/shop" className="flex items-center">
                        <img
                          src={"/placeholder.png"}
                          alt="panier"
                          width={90}
                          height={90}
                          className="p-3  rounded-lg"
                        />
                        <p className="inline-block text-lg">Nom du cours</p>
                      </a>
                    </td>
                    <td class="p-5 text-right">
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td class="p-5 text-right">50 €</td>
                    <td class="p-5 text-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="block pt-12">
            <ul>
              <li>
                <div class="pb-3 text-xl">Sous-total (3) : 150€</div>
              </li>
              <li>
                <button class="rounded-sm text-xl border-2 border-green-600 bg-green-400 px-8 py-2 font-bold text-white hover:bg-green-500 focus:bg-black focus:text-white">Paiement</button>
              </li>
            </ul>
          </div>
          <div className="text-center pt-10">
            <button
              type="button"
              className="rounded-sm text-xl border-2 border-black bg-white px-8 py-2 font-bold text-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              <a href="shop">Retour au magasin</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
