import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import axios from 'axios';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import RelatedPage from '../components/Homepage/RelatedPage';
import LinkedinEmbed from '../components/Common/LinkedinEmbed';
import WhatsHappening from '../components/Media/WhatsHappening';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselSettings } from '../utils/carouselSettings';
import Grid from '../components/Homepage/Grid';

const Home = ({
  linkedins,
  postResMediaReleasesTop,
  postResMediaReleasesBottom,
  postResContentHubs,
}) => (
  <div>
    <Head>
      <title>Homepage | edotco</title>
      <meta
        name="description"
        content="Building shard connectivity for a sustainable future"
      />
      <link rel="icon" href="/img/common/icon/edotco-logo.png" />
    </Head>
    <div className="p-5 sm:p-10 md:p-20 xl:w-7/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
      Leading Equitable Next Gen Connectivity in Asia
    </div>
    <div className="relative">
      <div className="absolute inset-y-0 right-0 z-10 grid content-center text-white p-5 sm:p-10 md:p-20 xl:w-5/12 text-3xl md:text-5xl 2xl:text-6xl font-mulish-bold">
        <span className="mb-6 text-lg font-mulish">Our Mission Statement</span>
        We Advance Communications, Today for Tomorrow
      </div>
      <div className="relative w-full h-96 sm:h-128 md:h-256">
        <Image
          src="/img/homepage/hero-img.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-1/2 bg-white p-10 md:py-20 md:px-20 2xl:pr-60 flex-col justify-center items-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
        The future.
        <div className="my-6 md:my-12 text-sm text-justify md:text-xl font-mulish-semibold leading-loose">
          <div>
            People are always talking about the future. Who they&apos;re going
            to be and what they&apos;re going to do tomorrow, or the next day,
            or the day after that.
          </div>
          <br />
          <div>
            Guided by our values and inspired by our people, we&apos;re{' '}
            <span className="font-mulish-bold">leading Asia</span> towards our
            vision of{' '}
            <span className="font-mulish-bold">
              equitable next generation connectivity
            </span>{' '}
            for all.
          </div>
          <br />
          <div>
            <span className="font-mulish-bold">
              Innovating to deliver sustainable growth
            </span>{' '}
            for our customers partners and stakeholders, while{' '}
            <span className="font-mulish-bold">
              enabling the positive transformation
            </span>{' '}
            of the communities in which we serve.
          </div>
        </div>
        <Link href="/about-us" passHref>
          <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
            More About Us
            <ArrowCircleRightIcon
              className="w-12 h-12 ml-2 md:w-16 md:h-16"
              aria-hidden="true"
            />
          </div>
        </Link>
      </div>
      <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 mt-28 w-128 h-128">
        <Image
          src="/img/homepage/logo-wave.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="xl:w-1/2 bg-primary text-white text-right p-10 md:p-20 flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish">
        <div className="flex flex-col justify-center 2xl:pl-24">
          <div>
            At EDOTCO, we&apos;re not{' '}
            <span className="font-mulish-bold">waiting for tomorrow.</span>
          </div>
          <div>
            Instead, we&apos;re busy{' '}
            <span className="font-mulish-bold">shaping the future, today.</span>
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-grey font-mulish-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex text-center">
      <div className="p-6 lg:p-12 xl:p-20 2xl:p-28">
        <span className="text-secondary">EDOTCO. </span>
        SHAPING{' '}
        <span className="text-secondary">THE FUTURE OF CONNECTIVITY</span> IN
        ASIA
      </div>
      <div className="absolute right-0 bottom-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
    <div>
      <div className="relative">
        <div className="absolute grid md:grid-cols-3 w-full h-full">
          <Grid title="6th" body="Largest TowerCo in the world">
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
          <Grid title="48,000+" body="Number of towers (Owned and Managed)">
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
          <Grid
            title="9 Countries"
            body="We have currently expanded our presence to 9 countries"
          >
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
          <Grid title="1.62x" body="Average number of tenants on our site">
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
          <Grid title="181 million" body="Mobile user connected">
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
          <Grid
            title="17.9 Exabytes"
            body="Mobile data consumed from our towers in 2021"
          >
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi.
          </Grid>
        </div>
        <p className="relative w-full h-212">
          <Image
            src="/img/homepage/numbers-img.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </p>
      </div>
    </div>
    <div>
      <div className="h-164 sm:h-192 md:h-212 lg:h-268 xl:h-316 relative">
        <div className="absolute top-0 w-full h-full">
          <Image
            src="/img/homepage/coverage-map.png"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="center top"
            priority
          />
        </div>
        <div className="absolute bottom-0 px-10 pb-10 sm:px-20 sm:pb-20 lg:px-40 leading-loose">
          <div className="lg:w-1/2">
            <span className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold text-justify">
              Our Coverage
            </span>
          </div>
          <br />
          <div className="lg:w-1/2 text-justify">
            <span className="text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-mulish">
              Headquartered in Kuala Lumpur, Malaysia, edotco Group has offices
              across Asia in Bangladesh, Cambodia, Sri Lanka, Myanmar, Pakistan,
              Laos and the Philippines. We are committed to conducting our
              business in a responsible and sustainable manner while upholding
              the highest standards of integrity for the benefit of our
              customers, employees, communities and developing nations.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute w-24 h-24 sm:w-44 sm:h-44">
          <Image
            src="/img/common/bg/down-quarter-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="xl:hidden mb-12">
          <Slider {...carouselSettings}>
            <LinkedinEmbed linkedins={linkedins} postId={1} />
            <LinkedinEmbed linkedins={linkedins} postId={2} />
            <LinkedinEmbed linkedins={linkedins} postId={3} />
          </Slider>
        </div>
        <WhatsHappening
          contentHubs={postResContentHubs}
          mediaReleasesTop={postResMediaReleasesTop}
          mediaReleasesBottom={postResMediaReleasesBottom}
        />
        <div className="hidden lg:h-192 xl:flex flex-col md:flex-row justify-center items-center">
          <LinkedinEmbed linkedins={linkedins} postId={1} />
          <LinkedinEmbed linkedins={linkedins} postId={2} />
          <LinkedinEmbed linkedins={linkedins} postId={3} />
        </div>
      </div>
    </div>
    <RelatedPage
      tileHeader={['Sustainability', 'Our Expertise', 'Life@edotco', 'Media']}
      tileDescription={[
        'At edotco, we  believe that a sustainable future encompasses a healthy environment and an enriched community that realises its potential.',
        'edotco Group has vast experience in providing and setting up communication towers throughout the Asia pacific region. Other services include Solutions, Energy, Fibre and Managed services and O&M.',
        'We constantly call for motivated, talented and experienced people to support our organization. No matter where you join us, you will find a diverse team of employees focused on our shared success.',
        'Take a look at the adventures happening throughout edotco and get the latest news & updates.',
      ]}
      tileHref={['/sustainability', '/expertise', '/life', '/media']}
      tileImage={[
        '/img/sustainability/sustainability-bg.png',
        '/img/expertise/main/our-expertise-bg.png',
        '/img/life-edotco/life-edotco-bg.png',
        '/img/media/bg/media-bg.png',
      ]}
    />
  </div>
);

Home.propTypes = {
  linkedins: PropTypes.object.isRequired,
  postResMediaReleasesTop: PropTypes.object.isRequired,
  postResMediaReleasesBottom: PropTypes.object.isRequired,
  postResContentHubs: PropTypes.object.isRequired,
};

export default Home;

export async function getStaticProps() {
  const allPromises = [];
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/linkedins?populate=cover_image`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-media-release-top?populate=*`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-media-release-bottom?populate=*`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-content-hub?populate=*`
    )
  );
  const [
    postResLinkedin,
    postResMediaReleasesTop,
    postResMediaReleasesBottom,
    postResContentHubs,
  ] = await Promise.all(allPromises);

  return {
    props: {
      linkedins: postResLinkedin.data,
      postResMediaReleasesTop: postResMediaReleasesTop.data,
      postResMediaReleasesBottom: postResMediaReleasesBottom.data,
      postResContentHubs: postResContentHubs.data,
    },
    revalidate: 10,
  };
}
