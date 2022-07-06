import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Title from '../../components/FooterLinks/Title';
import Content from '../../components/FooterLinks/PrivacyPolicy/Contents';
import RelatedPage from '../../components/Common/RelatedPage';
import Feedback from '../../components/Common/Feedback';

const PrivacyPolicy = () => (
  <>
    <CoverImage
      headerSmall="View Our"
      header="Privacy Policy"
      coverImage="/img/footer-links/footer-link-hero-img.png"
    />
    <Banner subpage="Privacy Policy" />
    <Title title="Our Commitment to Your Privacy">
      edotco Group, inclusive its affiliates, is committed to comply with
      applicable data privacy laws and regulations. These privacy notices
      outline how we handle information received from both customers and
      partners, as well as how we manage and store (hard and soft copies)
      personal information and data.
    </Title>
    <Content />
    <RelatedPage
      tileSmallHeader="View Our"
      tileHeader={['Scam Notice', 'Terms of Use', 'Whistleblowing Policy']}
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

export default PrivacyPolicy;
