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

const Cambodia = ({ mediaReleases }) => (
  <>
    <CoverImage
      headerSmall="edotco Cambodia"
      header="Tagline for edotco Cambodia"
      body={[
        'About edotco Cambodia',
        'Our Offerings',
        'Site Locator',
        "What's Happening",
        'Meet Our Team',
      ]}
      coverImage="/img/microsite/cover-image/cambodia-hero-img.png"
      microsite
    />
    <About
      imgFolder="contact-us"
      img="cambodia.jpg"
      title="About edotco Bangladesh"
      numbers={['13.8', '1,000+', '3.4']}
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish">
        With a portfolio of over{' '}
        <span className="font-mulish-bold">4,000 towers and managed sites</span>
        , we have developed our{' '}
        <span className="font-mulish-bold">
          built-to-suit and co-location offerings{' '}
        </span>
        to enable telecommunications providers to efficiently meet their growing
        infrastructure requirements.
      </div>
    </About>
    <Offerings SS MN GE POM />
    <SiteLocator countryTag="cambodia" country="Cambodia" />
    <WhatsHappening
      country="Cambodia"
      flag="cambodia-flag"
      mediaReleases={mediaReleases}
    />
    <Team />
    <Feedback />
  </>
);

Cambodia.getLayout = page => <LayoutMicrosite>{page}</LayoutMicrosite>;

Cambodia.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Cambodia;

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
