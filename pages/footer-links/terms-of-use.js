import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Title from '../../components/FooterLinks/Title';
import Content from '../../components/FooterLinks/TermsOfUse/Contents';
import RelatedPage from '../../components/Common/RelatedPage';
import Feedback from '../../components/Common/Feedback';

const TermsOfUse = () => (
  <>
    <CoverImage
      headerSmall="View Our"
      header="Terms of Use"
      coverImage="/img/footer-links/footer-link-hero-img.png"
    />
    <Banner subpage="Terms of Use" />
    <Title title="Terms of Use" />
    <Content />
    <RelatedPage
      tileSmallHeader="View Our"
      tileHeader={['Scam Notice', 'Privacy Policy', 'Whistleblowing Policy']}
      tileHref={[
        '/footer-links/scam-notice',
        '/footer-links/privacy-policy',
        '/footer-links/whistleblowing-policy',
      ]}
      tileImage={[
        '/img/footer-links/scam-notice-img.png',
        '/img/footer-links/privacy-policy-img.png',
        '/img/footer-links/whistleblowing-img.png',
      ]}
    />
    <Feedback RTL />
  </>
);

export default TermsOfUse;
