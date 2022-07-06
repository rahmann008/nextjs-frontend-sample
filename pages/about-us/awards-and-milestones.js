import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Feedback from '../../components/Common/Feedback';
import RelatedPage from '../../components/Common/RelatedPage';
import Awards from '../../components/AboutUs/Awards';

const AboutUs = ({ contentHubs }) => (
  <>
    <CoverImage
      headerSmall="About Us"
      header="Awards &amp; Milestones"
      body={[]}
      coverImage="/img/about-us/corporate-governance/success-stories-header.png"
    />
    <Banner
      subpage={['About Us', 'Awards & Milestones']}
      href={['/about-us', '/about-us/awards-and-milestones']}
    />
    <Awards contentHubs={contentHubs} />
    <RelatedPage
      tileSmallHeader="About Us"
      tileHeader={['Our Brand', 'Corporate Governance', 'Awards & Milestones']}
      tileHref={[
        '/footer-links/scam-notice',
        '/footer-links/terms-of-use',
        '/footer-links/whistleblowing-policy',
      ]}
      tileImage={[
        '/img/footer-links/scam-notice-img.png',
        '/img/footer-links/terms-of-use-img.png',
        '/img/footer-links/whistleblowing-img.png',
      ]}
    />
    <Feedback RTL />
  </>
);

AboutUs.propTypes = {
  contentHubs: PropTypes.object.isRequired,
};

export default AboutUs;

export async function getStaticProps() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/content-hubs?populate=cover_image`
  );
  return {
    props: {
      contentHubs: postRes.data,
    },
    revalidate: 10,
  };
}
