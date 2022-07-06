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

const Pakistan = ({ mediaReleases }) => (
  <>
    <CoverImage
      headerSmall="edotco Pakistan"
      header="Tagline for edotco Pakistan"
      body={[
        'About edotco Pakistan',
        'Our Offerings',
        'Site Locator',
        "What's Happening",
        'Meet Our Team',
      ]}
      coverImage="/img/microsite/cover-image/pakistan-hero-img.png"
      microsite
    />
    <About
      imgFolder="contact-us"
      img="pakistan.jpg"
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
    <Offerings SS MN GE POM />
    <SiteLocator countryTag="pakistan" country="Pakistan" />
    <WhatsHappening
      country="Pakistan"
      flag="pakistan-flag"
      mediaReleases={mediaReleases}
    />
    <Team />
    <Feedback />
  </>
);

Pakistan.getLayout = page => <LayoutMicrosite>{page}</LayoutMicrosite>;

Pakistan.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Pakistan;

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
