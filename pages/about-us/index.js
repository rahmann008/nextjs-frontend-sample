import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Feedback from '../../components/Common/Feedback';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import RelatedAboutUsMain from '../../components/AboutUs/RelatedAboutUsMain';

const AboutUs = () => (
  <>
    <Head>
      <title>About Us | edotco</title>
      <meta
        name="description"
        content="Building shard connectivity for a sustainable future"
      />
      <link rel="icon" href="/img/common/icon/edotco-logo.png" />
    </Head>
    <CoverImage
      headerSmall="Overview of"
      header="About Us"
      body={[]}
      coverImage="/img/about-us/about-us-header.png"
    />
    <Banner subpage="About Us" />
    <div>
      <div className="absolute top-0 right-0 z-10 hidden w-1/4 md:inline my-160 h-200">
        <Image
          src="/img/about-us/about-us-pattern-bg.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="flex flex-col px-8 mt-20 mb-10 sm:px-12 xl:px-20 md:mb-24 place-content-between md:w-3/4 xl:w-1/2">
        <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
          Who We Are
        </div>
        <div className="my-12 text-lg leading-loose text-justify md:text-xl font-mulish">
          <div>
            <span className="font-mulish-bold">edotco Group</span> is the first
            and leading regional integrated telecommunications infrastructure
            services company in Asia. We specialise in end-to-end solutions in
            the tower services sector including co-locations, build-to-suit,
            energy, transmission and operations and maintenance (O&amp;M).
          </div>
          <br />
          <div>
            Our regional portfolio includes over{' '}
            <span className="font-mulish-bold">41,000 towers</span>, with{' '}
            <span className="font-mulish-bold">
              23,845 towers directly operated by edotco and a further 17,860
              towers managed
            </span>
            . We are also supported by our state-of-the-art real time monitoring
            service, echo, which helps to improve field operations whilst
            maximising operational efficiencies.
          </div>
        </div>
      </div>
    </div>
    <RelatedAboutUsMain
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
    <Feedback RTL />
  </>
);

export default AboutUs;
