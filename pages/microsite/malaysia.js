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

const Malaysia = ({ mediaReleases }) => (
  <>
    <CoverImage
      headerSmall="edotco Malaysia"
      header="Tagline for edotco Malaysia"
      body={[
        'About edotco Malaysia',
        'Our Offerings',
        'Site Locator',
        "What's Happening",
        'Meet Our Team',
      ]}
      coverImage="/img/microsite/cover-image/malaysia-hero-img.png"
      microsite
    />
    <About
      imgFolder="contact-us"
      img="malaysia.jpg"
      title="About edotco Malaysia"
      numbers={['8.68', '16,000+', '2.9']}
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify">
        <span className="font-mulish-bold">edotco Group</span> is the first and
        leading regional integrated telecommunications infrastructure services
        company in Asia. We specialise in end-to-end solutions in the tower
        services sector including co-locations, build-to-suit, energy,
        transmission and operations and maintenance (O&amp;M).
      </div>
    </About>
    <Offerings SS IBS BTS SCS eMOS GE POM FL />
    <SiteLocator countryTag="malaysia" country="Malaysia" />
    <WhatsHappening
      country="Malaysia"
      flag="malaysia-flag"
      mediaReleases={mediaReleases}
    />
    <Team />
    <Feedback />
  </>
);

Malaysia.getLayout = page => <LayoutMicrosite>{page}</LayoutMicrosite>;

Malaysia.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Malaysia;

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
