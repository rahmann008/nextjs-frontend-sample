import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Feedback from '../../components/Common/Feedback';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
import MeetOurTeam from '../../components/AboutUs/MeetOurTeam';
import Policy from '../../components/AboutUs/Policy';
import Awards from '../../components/AboutUs/Awards';

const AboutUs = ({ contentHubs }) => (
  <>
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
        <div className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-mulish text-primary">
          01
        </div>
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
    <div className="relative bottom-0 left-0 w-24 h-24 sm:w-44 sm:h-44">
      <Image
        src="/img/common/bg/quarter-wave-pattern.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <MeetOurTeam />
    <div className="bg-white h-256">
      <div className="relative z-10 w-full p-10 mt-20 bg-white lg:absolute right-128 lg:w-1/3 drop-shadow-xl">
        <div className="flex flex-col">
          <div className="w-8/12">
            <div className="mb-8 text-4xl lg:text-5xl xl:text-6xl font-mulish text-primary">
              03
            </div>
            <div className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
              Driving Excellence through Good Governance
            </div>
          </div>
          <div className="text-lg leading-loose text-justify md:text-xl font-mulish">
            edotco Group recognizes the importance of maintaining strong
            governance in business practices to increase opportunities for
            long-term sustainability. The Board is committed to cultivating a
            responsible organization with the highest ethical standards and
            corporate governance standards at all times. We advance today&apos;s
            communications for tomorrow by upholding our core values of
            Uncompromising Integrity and Exceptional Performance (UI.EP).
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="relative w-24 h-24 mr-128 mt-60 sm:w-160 sm:h-160">
          <Image
            src="/img/about-us/corporate-governance/shake-hand.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
    <div className="bg-grey h-200">
      <div className="relative z-10 w-full mt-20 lg:absolute right-20 lg:w-7/12 drop-shadow-xl">
        <div className="">
          <div className="mb-4 text-xl lg:text-2xl xl:text-3xl font-mulish-bold">
            Joint message from our
          </div>
          <div className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
            Chairman and CEO
          </div>
        </div>
        <div className="flex flex-col bg-white">
          <span className="absolute mt-8 ml-8 text-6xl">❝</span>
          <div className="p-20 text-justify md:text-lg font-mulish-semibold">
            <p className="mb-8">
              Compliance and integrity are two key values that we need to uphold
              in this constantly evolving and competitive landscape. With
              changing regulations, customer expectations and new technologies,
              it is imperative that we familiarize ourselves with the
              organization&apos;s Code of Conduct and operate with the highest
              level of professinalism.
            </p>
            <p className="mb-8">
              With this in mind, we have taken steps to ensure we strengthen and
              standardize our compliance framework across edotco Group&apos;s
              footprint with the expectation that our employees will always
              uphold the highest integrity.
            </p>
            <p className="mb-8">
              We have and will continue to put in place rigorous policies and
              procedures to further enhance our governance that will guide you
              through giks, donations, and sponsorship spends, limits of
              authority, data privacy management, cyber security practices and
              many more. I urge you to familiarize yourself with these policies
              which will continuously undergo assessments, reviews and updates
              to ensure that we are abreast with the rules and regulations while
              ensuring operational efficiencies.
            </p>
            <p className="mb-8">
              Compliance and integrity are not just standards on operating a
              business, but a culture that defines appropriate conduct when
              dealing with our stakeholders. It is a way of working which is
              practiced across the whole organization. Ethical conduct is a
              responsibility of every employee, and we would like to remind you
              that as representative of our brand you must fully understand,
              familiarize and commit yourselves to practicing these values and
              also ensuring the same is carried out in your teams.
            </p>
            <p className="mb-8">
              Together, we will build a strong ethos of professionalism,
              integrity, and ethics, as we head towards our ambition of being a
              &apos;Global Top 5 Towerco&apos;.
            </p>
            <p className="my-12">
              <p className="flex flex-row justify-between font-mulish-bold">
                <div>
                  <p>Dato Dr.Nik Ramlah Nik Mahmood</p>
                  <p className="font-mulish">Chairman, Board of Directors</p>
                </div>
                <div>
                  <p>Adlan Tajudin</p>
                  <p className="font-mulish">Chief Executive Officer</p>
                </div>
              </p>
              <p className="flex flex-row justify-between font-mulish-semibold" />
            </p>
          </div>
          <span className="absolute right-0 mr-8 text-6xl mt-172"> ❞</span>
        </div>
      </div>
      <div className="pt-72">
        <div className="absolute z-10 w-24 h-24 sm:w-160 sm:h-172">
          <Image
            src="/img/about-us/chairman-ceo.png"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="relative w-24 h-24 sm:w-160 sm:h-172">
          <Image
            src="/img/common/bg/semicircle-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
    <Policy />
    <Awards contentHubs={contentHubs} />
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
