import React from 'react';
import axios from 'axios';
import Feedback from '../../components/Common/Feedback';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import MeetOurTeam from '../../components/AboutUs/MeetOurTeam';
import RelatedPage from '../../components/Common/RelatedPage';

const AboutUs = () => (
  <>
    <CoverImage
      headerSmall="About Us"
      header="Meet Our Team"
      body={[]}
      coverImage="/img/about-us/about-us-header.png"
    />
    <Banner
      subpage={['About Us', 'Meet Our Team']}
      href={['/about-us', '/about-us/meet-our-team']}
    />
    <MeetOurTeam />
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
