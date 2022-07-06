import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import LayoutMicrosite from '../../components/LayoutMicrosite';
import CoverImage from '../../components/Common/CoverImage';
import About from '../../components/Microsite/About';
import Offerings from '../../components/Microsite/Offerings';
import Team from '../../components/Microsite/Team';
import Feedback from '../../components/Microsite/Feedback';
import WhatsHappening from '../../components/Microsite/WhatsHappening';
import SiteLocator from '../../components/Microsite/SiteLocator';

const Bangladesh = ({ mediaReleases }) => (
  <>
    <CoverImage
      headerSmall="edotco Bangladesh"
      header="Tagline for edotco Bangladesh"
      body={[
        'About edotco Bangladesh',
        'Our Offerings',
        'Site Locator',
        "What's Happening",
        'Meet Our Team',
      ]}
      coverImage="/img/microsite/cover-image/bangladesh-hero-img.png"
      microsite
    />
    <About
      imgFolder="contact-us"
      img="bangladesh.jpg"
      title="About edotco Bangladesh"
      numbers={['53.6', '15,000+', '3.4']}
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish">
        With a portfolio of over{' '}
        <span className="font-mulish-bold">
          15,000 towers and managed sites
        </span>
        , we have developed our{' '}
        <span className="font-mulish-bold">
          built-to-suit and co-location offerings{' '}
        </span>
        to enable telecommunications providers to efficiently meet their growing
        infrastructure requirements.
      </div>
    </About>
    <Offerings GBT GE POM FL />
    <SiteLocator countryTag="bangladesh" country="Bangladesh" />
    <WhatsHappening
      country="Bangladesh"
      flag="bangladesh-flag"
      mediaReleases={mediaReleases}
    />
    <Team />
    <Feedback />
  </>
);

Bangladesh.getLayout = page => <LayoutMicrosite>{page}</LayoutMicrosite>;

Bangladesh.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Bangladesh;

export async function getStaticProps() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/media-releases`
  );
  return {
    props: {
      mediaReleases: postRes.data,
    },
    revalidate: 10,
  };
}
