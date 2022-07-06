import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Content from '../../components/Expertise/Towers/Content';
import RelatedExpertise from '../../components/Expertise/RelatedExpertise';
import Feedback from '../../components/Common/Feedback';

const Towers = () => (
  <>
    <CoverImage
      headerSmall="Expertise"
      header="Towers"
      coverImage="/img/expertise/towers/towers-header.png"
    />
    <Banner
      subpage={['Expertise', 'Towers']}
      href={['/expertise', '/expertise/towers']}
    />
    <Content />
    <RelatedExpertise
      tileHeader={[
        'Solutions',
        'Energy',
        'Managed Services and Operations & Maintenance',
        'Fibre',
      ]}
      tileDescription={[
        'A wide range of configurable options and accessories allow our towers to be customised to meet your needs and provide solutions not offered by other tower or mast systems.arcu',
        'We provide a suite of solutions to ensure energy supply that is both cost effective and environmentally conscious. Our customers can opt for a solution that best meets their needs to address specific pain points.',
        'Leveraging on our regional expertise and best practices from across our footprint, we provide end to end management of active and passive managed services to ensure high quality network and reliable network uptime allowing our customers to focus on their core business.',
        'With the growing demand for data usage and to support 5G and future technologies, fibre connectivity is often becoming a necessity. We partner with various industry leaders to provide connectivity infrastructure with multi-tenant capabilities including fronthaul and backhaul fibre services.',
      ]}
      tileHref={[
        '/expertise/solutions',
        '/expertise/energy',
        '/expertise/msom',
        '/expertise/fibre',
      ]}
      tileImage={[
        '/img/expertise/main/solutions-img.png',
        '/img/expertise/main/energy-img.png',
        '/img/expertise/main/msom-img.png',
        '/img/expertise/main/fibre-img.png',
      ]}
    />
    <Feedback />
  </>
);

export default Towers;
