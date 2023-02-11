import React, { useState, useRef } from "react";
import { sendContactForm } from "services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            firstname: e.target.firstname.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        });
        if (res == 0) {
            setMessage("Merci de m'avoir contacté ! Je répondrais au plus vite !");
        } else {
            setMessage("Désolé, une erreur s'est produite, veuillez réessayer plus tard...");
        }
    };
    return (
        <><Navbar />
        <div className="pt-48 h-full text-center bg-white text-3xl text-black sm:pt-20 sm:px-4">
        <p className="pt-8 pb-4 text-4xl text-center font-black px-80 sm:px-5 sm:text-center sm:text-xl uppercase">RESTONS EN CONTACT</p>
        <p className="pt-4 pb-8 text-2xl font-thin px-80 sm:px-5 sm:text-justify">Je suis là pour vous aider. Envoyez-moi vos questions ou commentaires, et je vous répondrais dans les plus brefs délais.</p>
        <p className="pt-4 pb-8 text-2xl font-thin px-80 sm:px-5 sm:text-justify">Veuillez utiliser le formulaire de contact ci-dessous pour nous joindre. Vous pouvez également envoyer un courriel à ... ou appeler le ... de ...</p>
        <p className="pt-8 pb-4 text-4xl text-center font-black px-80 sm:px-5 sm:text-center sm:text-xl uppercase">Envoyez moi un mail</p>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-5xl">
                <form
                    className=""
                    ref={formRef}
                    onSubmit={submitContact}
                >
                <div className="pb-10">
                    <label for="firstname" id="firstname" name="firstname" class="text-left block mb-2 text-base font-medium text-black">Votre prénom :</label>
                    <input id="firstname" className="shadow-sm text-white text-sm rounded-none focus:ring-black focus:border-black block w-full p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light"
                        required
                        type={"text"}
                        minLength={3}
                        maxLength={25} />
                </div>
                <div className="pb-10"> 
                    <label for="phone" id="phone" name="phone" class="text-left block mb-2 text-base font-medium text-black">Votre téléphone :</label>
                    <input id="phone" className="shadow-sm text-white text-sm rounded-none focus:ring-black focus:border-black block w-full p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light"
                        required
                        type={"tel"}
                        minLength={10}
                        maxLength={10} />
                </div>
                <div className="w-full pb-10">
                    <label for="message" id="message" name="message" class="text-left block mb-2 text-base font-medium text-black">Votre message :</label>
                    <textarea id="message" className="shadow-sm text-white text-sm rounded-none focus:ring-black focus:border-black block w-full h-40 p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light">
                    </textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-base w-full font-medium text-center text-white rounded-lg bg-green-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                        Envoyer
                    </button>
                    <div>
                    {message}
                    <span onClick={() => setMessage("")} className="text-white bg-green">
                        &times;
                    </span>
                </div>
                </form>
                
            </div>
        </div>
        <Footer/></>
    );
};

export default Contact;