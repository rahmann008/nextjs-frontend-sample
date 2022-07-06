import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Content from '../../components/Expertise/Solutions/Content';
import RelatedExpertise from '../../components/Expertise/RelatedExpertise';
import Feedback from '../../components/Common/Feedback';

const Solutions = () => (
  <>
    <CoverImage
      headerSmall="Expertise"
      header="Solutions"
      coverImage="/img/expertise/solutions/solutions-header.png"
    />
    <Banner
      subpage={['Expertise', 'Solutions']}
      href={['/expertise', '/expertise/solutions']}
    />
    <Content />
    <RelatedExpertise
      tileHeader={[
        'Towers',
        'Energy',
        'Managed Services and Operations & Maintenance',
        'Fibre',
      ]}
      tileDescription={[
        'A wide range of configurable options and accessories allow our solutions to be customised to meet your needs and provide solutions not offered by other tower or mast systems.arcu',
        'We provide a suite of solutions to ensure energy supply that is both cost effective and environmentally conscious. Our customers can opt for a solution that best meets their needs to address specific pain points.',
        'Leveraging on our regional expertise and best practices from across our footprint, we provide end to end management of active and passive managed services to ensure high quality network and reliable network uptime allowing our customers to focus on their core business.',
        'With the growing demand for data usage and to support 5G and future technologies, fibre connectivity is often becoming a necessity. We partner with various industry leaders to provide connectivity infrastructure with multi-tenant capabilities including fronthaul and backhaul fibre services.',
      ]}
      tileHref={[
        '/expertise/towers',
        '/expertise/energy',
        '/expertise/msom',
        '/expertise/fibre',
      ]}
      tileImage={[
        '/img/expertise/main/towers-img.png',
        '/img/expertise/main/energy-img.png',
        '/img/expertise/main/msom-img.png',
        '/img/expertise/main/fibre-img.png',
      ]}
    />
    <Feedback />
  </>
);

export default Solutions;
