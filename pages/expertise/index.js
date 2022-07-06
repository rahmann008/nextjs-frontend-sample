import React from 'react';
import Head from 'next/head';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Informations from '../../components/Expertise/Informations';
import Feedback from '../../components/Common/Feedback';

const Expertise = () => (
  <>
    <Head>
      <title>Expertise | edotco</title>
      <meta
        name="description"
        content="Building shard connectivity for a sustainable future"
      />
      <link rel="icon" href="/img/common/icon/edotco-logo.png" />
    </Head>
    <CoverImage
      headerSmall="Overview of Our"
      header="Expertise"
      coverImage="/img/expertise/main/expertise-header.png"
    />
    <Banner subpage="Expertise" />

    <Informations />
    <Feedback />
  </>
);

export default Expertise;
