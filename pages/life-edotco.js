import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import PropTypes from 'prop-types';
import CoverImage from '../components/Common/CoverImage';
import Feedback from '../components/LifeEdotco/Feedback';
import Banner from '../components/Common/Banner';
import ContentHubsPostPreview from '../components/Media/ContentHubs/ContentHubsPostPreview';
import Stories from '../components/LifeEdotco/Stories';
import Bionic from '../components/LifeEdotco/Bionic';
import Diversity from '../components/LifeEdotco/Diversity';
import Remote from '../components/LifeEdotco/Remote';

const LifeEdotco = ({ contentHubs }) => {
  const [latestBlogPosts, setLatestBlogPosts] = useState(false);
  const data = Array.from(latestBlogPosts);

  useEffect(() => {
    setLatestBlogPosts(
      contentHubs.data
        .filter(contentHub => contentHub.attributes.topic === 'LIFE@edotco')
        .slice(0, 3)
    );
  }, [contentHubs]);

  const renderContentHubsPostPreview = () =>
    data.map(contentHub => (
      <ContentHubsPostPreview contentHub={contentHub} key={contentHub.id} />
    ));
  return (
    <>
      <Head>
        <title>LIFE@edotco | edotco</title>
        <meta
          name="description"
          content="Building shard connectivity for a sustainable future"
        />
        <link rel="icon" href="/img/common/icon/edotco-logo.png" />
      </Head>
      <CoverImage
        headerSmall=""
        header="LIFE@edotco&copy;"
        body={[
          'Bionic Organisation',
          'Diversity, Equity & Inclusion',
          'edotcoers Stories',
          'Join Us',
        ]}
        coverImage="/img/microsite/cover-image/malaysia-hero-img.png"
        tag
      />
      <Banner subpage="LIFE@edotco&copy;" />
      <Bionic />
      <Diversity />
      <Remote />
      <Stories />
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 md:gap-x-10 xl:gap-x-20 px-12 pb-12">
          {renderContentHubsPostPreview()}
        </div>
      </div>
      <Feedback />
    </>
  );
};

LifeEdotco.propTypes = {
  contentHubs: PropTypes.object.isRequired,
};

export default LifeEdotco;

export async function getStaticProps() {
  const allPromises = [];
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/content-hubs?populate=audio&populate=cover_image`
    )
  );
  const [postResAll] = await Promise.all(allPromises);

  return {
    props: {
      contentHubs: postResAll.data,
    },
    revalidate: 10,
  };
}
