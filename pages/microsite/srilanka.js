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

const Srilanka = ({ mediaReleases }) => (
  <>
    <CoverImage
      headerSmall="edotco Sri Lanka"
      header="Tagline for edotco Sri Lanka"
      body={[
        'About edotco Sri Lanka',
        'Our Offerings',
        'Site Locator',
        "What's Happening",
        'Meet Our Team',
      ]}
      coverImage="/img/microsite/cover-image/srilanka-hero-img.png"
      microsite
    />
    <About
      imgFolder="contact-us"
      img="srilanka.jpg"
      title="About edotco Bangladesh"
      numbers={['13.8', '1,000+', '3.4']}
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish">
        With a portfolio of over{' '}
        <span className="font-mulish-bold">1,000 towers and managed sites</span>
        , we have developed our{' '}
        <span className="font-mulish-bold">
          built-to-suit and co-location offerings{' '}
        </span>
        to enable telecommunications providers to efficiently meet their growing
        infrastructure requirements.
      </div>
    </About>
    <Offerings SS IBS MN GE POM />
    <SiteLocator countryTag="srilanka" country="Sri Lanka" />
    <WhatsHappening
      country="Sri Lanka"
      flag="srilanka-flag"
      mediaReleases={mediaReleases}
    />
    <Team />
    <Feedback />
  </>
);

Srilanka.getLayout = page => <LayoutMicrosite>{page}</LayoutMicrosite>;

Srilanka.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Srilanka;

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
