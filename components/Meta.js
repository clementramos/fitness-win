import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";


export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "FITNESS WIN",
    description: `Bienvenue sur notre site de sport ! Nous proposons une large gamme de cours de fitness, de yoga et de natation pour tous les niveaux. Rejoignez notre communauté sportive pour améliorer votre forme physique et votre santé. Inscrivez-vous dès maintenant pour découvrir nos activités et nos équipements de qualité.`,
    image: "https://i.ibb.co/cbQfXN0/LOGO-DARK.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta property='og-image' content='https://i.ibb.co/cbQfXN0/LOGO-DARK.png' />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://fitness-win.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://fitness-win.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="FITNESS WIN" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
    </div>
  );
}
