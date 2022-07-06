import React from 'react';
import Image from 'next/image';
import Sections from './Sections';
import SubContent from '../Common/SubContent';

const Informations = () => (
  <>
    <div className="absolute left-0 w-24 h-24 sm:w-44 sm:h-44">
      <Image
        src="/img/common/bg/down-quarter-wave-pattern.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <SubContent
      img="/img/expertise/main/innovation.jpg"
      title="Empowered by Innovation"
    >
      <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
        Innovation is the key to everything the future can be. Ut pretium
        pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
        molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie
        justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id,
        viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur
        ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris
        dignissim semper mattis.
      </div>
    </SubContent>

    <div className="flex flex-col items-center px-10 py-8 text-center bg-grey sm:py-12 sm:px-20 lg:py-24 lg:px-40">
      <div className="text-2xl md:text-3xl lg:text-6xl font-mulish-bold">
        Our Services &amp; Expertise
      </div>
      <div className="relative w-4 h-4 my-6 lg:my-12 sm:w-8 sm:h-8 lg:w-16 lg:h-16">
        <Image
          src="/img/expertise/main/seperator.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="mb-12 md:text-xl lg:text-2xl font-mulish">
        At edotco Group, we offer a wide range of services fusce vehicula dolor
        arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus,
        vitae ullamcorper metus.
      </div>
    </div>
    <div
      id="1"
      className="flex flex-col items-center justify-center px-8 bg-grey md:px-14 xl:px-20"
    >
      <div className="grid md:grid-cols-3">
        <Sections
          icon="towers-icon.png"
          title="Towers"
          href="/expertise/towers"
          expertise
        >
          It is important to consider a number of factors before selecting a
          tower that best suit your needs, from tower design to…
        </Sections>
        <Sections
          icon="solutions-icon.png"
          title="Solutions"
          href="/expertise/solutions"
          expertise
        >
          A wide range of configurable options and accessories allow our towers
          to be customised to meet your needs and...
        </Sections>
        <Sections
          icon="energy-icon.png"
          title="Energy"
          href="/expertise/energy"
          expertise
        >
          We provide a suite of solutions to ensure energy supply that is both
          cost effective and environmentally conscious. Our…
        </Sections>
        <Sections
          icon="msom-icon.png"
          title="Managed Services & Operations Management"
          href="/expertise/msom"
        >
          Leveraging on our regional expertise and best practices from across
          our footprint…
        </Sections>
        <Sections
          icon="fibre-icon.png"
          title="Fibre"
          href="/expertise/fibre"
          expertise
        >
          With the growing demand for data usage and to support 5G and future
          technologies, fibre connectivity is often…
        </Sections>
      </div>
    </div>
  </>
);

export default Informations;
