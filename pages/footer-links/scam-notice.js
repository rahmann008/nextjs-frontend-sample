import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Title from '../../components/FooterLinks/Title';
import Statements from '../../components/FooterLinks/ScamNotice/Statements';
import RelatedPage from '../../components/Common/RelatedPage';
import Feedback from '../../components/Common/Feedback';

const ScamNotice = () => (
  <>
    <CoverImage
      headerSmall="View Our"
      header="Scam Notice"
      coverImage="/img/footer-links/footer-link-hero-img.png"
    />
    <Banner subpage="Scam Notice" />
    <Title title="Scam Notice">
      Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a
      elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa.
      Vestibulum sed metus in lorem tristique ullamcorper id vitae erat.
    </Title>
    <Statements />
    <RelatedPage
      tileSmallHeader="View Our"
      tileHeader={['Terms of Use', 'Privacy Policy', 'Whistleblowing Policy']}
      tileHref={[
        '/footer-links/terms-of-use',
        '/footer-links/privacy-policy',
        '/footer-links/whistleblowing-policy',
      ]}
      tileImage={[
        '/img/footer-links/terms-of-use-img.png',
        '/img/footer-links/privacy-policy-img.png',
        '/img/footer-links/whistleblowing-img.png',
      ]}
    />
    <Feedback RTL />
  </>
);

export default ScamNotice;
