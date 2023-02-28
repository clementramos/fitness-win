'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Navbar from "/components/Navbar"
import Footer from "/components/Footer"

import { useAuth, VIEWS } from '/components/AuthProvider.js';
import supabase from '/lib/supabase-browser';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ResetPassword = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function resetPassword(formData) {
    const { error } = await supabase.auth.resetPasswordForEmail(formData?.email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}`,
    });

    useEffect(() => {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == "PASSWORD_RECOVERY") {
          const newPassword = prompt("What would you like your new password to be?");
          const { data, error } = await supabase.auth
            .updateUser({ password: newPassword })
   
          if (data) alert("Password updated successfully!")
          if (error) alert("There was an error updating your password.")
        }
      })
    }, [])

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Informations de conexion renvoyées.');
    }
  }

  return (
    <>
    <Navbar />
    <div className="card pt-48 sm:pt-20 h-screen">
      <h2 className="pt-8 pb-4 text-4xl text-center font-black px-80 sm:px-5 sm:text-center sm:text-xl uppercase">Mot de passe oublié ?</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={resetPassword}
      >
        {({ errors, touched }) => (
          <Form className="column py-8 lg:py-16 px-4 mx-auto max-w-5xl">
            <label htmlFor="email" className="text-left block mb-2 text-base font-medium text-black">Votre e-mail</label>
            <Field
              className={cn('shadow-sm text-white text-sm rounded-none focus:ring-black focus:border-black block w-full p-2.5 bg-transparent border-orange-400 placeholder-gray-400 text-black focus:ring-black focus:border-black shadow-sm-light', errors.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}
            <div className="pt-8"></div>
            <button className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-green-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800" type="submit">
              Envoyer le lien
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-center text-red-600">{errorMsg}</div>}
      {successMsg && <div className="text-center text-black">{successMsg}</div>}
      <button className="px-4 link w-full text-center block mb-2 text-lg font-medium text-black" type="button" onClick={() => setView(VIEWS.SIGN_IN)}>
        Vous vous souvenez du MDP? Se connecter.
      </button>
    </div>
    <Footer />
    </>
  );
};

export default ResetPassword;