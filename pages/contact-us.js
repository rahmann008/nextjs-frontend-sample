import React from 'react';
import Head from 'next/head';
import CoverImage from '../components/Common/CoverImage';
import Banner from '../components/Common/Banner';
import Informations from '../components/ContactUs/Informations';
import Maps from '../components/ContactUs/Maps';
import CountryTiles from '../components/ContactUs/CountryTiles';
import Feedback from '../components/ContactUs/Feedback';

const ContactUs = () => (
  <>
    <Head>
      <title>Contact Us | edotco</title>
      <meta
        name="description"
        content="Building shard connectivity for a sustainable future"
      />
      <link rel="icon" href="/img/common/icon/edotco-logo.png" />
    </Head>
    <CoverImage
      headerSmall="Have Any Questions?"
      header="Contact Us"
      coverImage="/img/media/media-releases/in-the-news-hero.png"
    />
    <Banner subpage="About Us" />
    <Informations />
    <Maps />
    <CountryTiles />
    <Feedback />
  </>
);

export default ContactUs;
