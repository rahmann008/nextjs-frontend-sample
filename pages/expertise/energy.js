import React from 'react';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import Content from '../../components/Expertise/Energy/Content';
import RelatedExpertise from '../../components/Expertise/RelatedExpertise';
import Feedback from '../../components/Common/Feedback';

const Energy = () => (
  <>
    <CoverImage
      headerSmall="Expertise"
      header="Energy"
      coverImage="/img/expertise/energy/energy-header.png"
    />
    <Banner
      subpage={['Expertise', 'Energy']}
      href={['/expertise', '/expertise/energy']}
    />
    <Content />
    <RelatedExpertise
      tileHeader={[
        'Solutions',
        'Towers',
        'Managed Services and Operations & Maintenance',
        'Fibre',
      ]}
      tileDescription={[
        'A wide range of configurable options and accessories allow our energy to be customised to meet your needs and provide solutions not offered by other tower or mast systems.arcu',
        'We provide a suite of solutions to ensure energy supply that is both cost effective and environmentally conscious. Our customers can opt for a solution that best meets their needs to address specific pain points.',
        'Leveraging on our regional expertise and best practices from across our footprint, we provide end to end management of active and passive managed services to ensure high quality network and reliable network uptime allowing our customers to focus on their core business.',
        'With the growing demand for data usage and to support 5G and future technologies, fibre connectivity is often becoming a necessity. We partner with various industry leaders to provide connectivity infrastructure with multi-tenant capabilities including fronthaul and backhaul fibre services.',
      ]}
      tileHref={[
        '/expertise/solutions',
        '/expertise/towers',
        '/expertise/msom',
        '/expertise/fibre',
      ]}
      tileImage={[
        '/img/expertise/main/solutions-img.png',
        '/img/expertise/main/towers-img.png',
        '/img/expertise/main/msom-img.png',
        '/img/expertise/main/fibre-img.png',
      ]}
    />
    <Feedback />
  </>
);

export default Energy;
