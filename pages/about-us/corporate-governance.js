import React from 'react';
import Image from 'next/image';
import CoverImage from '../../components/Common/CoverImage';
import Banner from '../../components/Common/Banner';
// import DownloadButton from '../../components/Common/DownloadButton';
import Policy from '../../components/AboutUs/Policy';
import Feedback from '../../components/Common/Feedback';
import RelatedPage from '../../components/Common/RelatedPage';

const CorporateGovernance = () => (
  <>
    <CoverImage
      headerSmall="About Us"
      header="Corporate Governance"
      body={[]}
      coverImage="/img/about-us/corporate-governance/success-stories-header.png"
    />
    <Banner
      subpage={['About Us', 'Corporate Governance']}
      href={['/about-us', '/about-us/corporate-governance']}
    />
    <div className="bg-white h-96 p-24 flex flex-row">
      <div className="text-7xl w-1/2 float-left font-mulish-bold">
        Driving Excellence through Good Governance
      </div>
      <div className="text-xl w-1/2 float-right font-mulish-semibold">
        edotco Group recognizes the importance of maintaining strong governance
        in business practices to increase opportunities for long-term
        sustainability. The Board is committed to cultivating a responsible
        organization with the highest ethical standards and corporate governance
        standards at all times. We advance today&apos;s communications for
        tomorrow by upholding our core values of Uncompromising Integrity and
        Exceptional Performance (UI.EP).
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
    <Feedback />
  </>
);

export default CorporateGovernance;
