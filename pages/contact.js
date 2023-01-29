import React, { useState, useRef } from "react";
import { sendContactForm } from "services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const submitForm = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            phone: e.target[3].value,
        });
        if (res == 0) {
            setMessage("Merci de m'avoir contacté ! Je répondrais au plus vite !");
        } else {
            setMessage("Désolé, une erreur s'est produite, veuillez réessayer plus tard...");
        }
    };
    return (
        <><Navbar />
        <div className="pt-48 h-full text-center text-3xl text-white sm:pt-20 sm:px-4">
            <p className="text-2xl">
                Merci de me laisser vos coordonnées, je vous recontacterais dès que possible.
            </p>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
                <div>
                    {message}
                    <span onClick={() => setMessage("")}>
                        &times;
                    </span>
                </div>
                <form
                    className="space-y-8"
                    ref={formRef}
                    onSubmit={submitForm}
                >
                <div>
                    <label for="name" class="text-left block mb-2 text-md font-medium text-white">Votre prénom :</label>
                    <input className="shadow-sm text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500 shadow-sm-light"
                        required
                        placeholder="Prénom *"
                        type={"text"}
                        minLength={3}
                        maxLength={25} />
                </div>
                  
                <div>
                    <label for="lastname" class="text-left block mb-2 text-md font-medium text-white">Votre nom :</label>
                    <input className="shadow-sm text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500 shadow-sm-light"
                        required
                        placeholder="Nom *"
                        type={"text"}
                        minLenght={3}
                        maxLength={25} />
                </div>

                <div>
                    <label for="mail" class="text-left block mb-2 text-md font-medium text-white">Votre mail :</label>
                    <input className="shadow-sm text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500 shadow-sm-light"
                        required
                        placeholder="Mail *"
                        type={"mail"} />
                </div>

                <div>
                    <label for="phone" class="text-left block mb-2 text-md font-medium text-white">Votre téléphone :</label>
                    <input className="shadow-sm text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500 shadow-sm-light"
                        required
                        placeholder="Téléphone *"
                        type={"tel"}
                        minLenght={10}
                        maxLength={10} />
                </div>
                    <button type="submit" className="py-3 px-5 text-md w-full font-medium text-center text-white rounded-lg bg-green-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
        <Footer/></>
    );
};

export default Contact;