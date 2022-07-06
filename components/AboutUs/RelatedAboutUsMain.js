import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import FindOutMore from '../Common/FindOutMore';

const RelatedAboutUsMain = ({
  tileHeader,
  tileDescription,
  tileHref,
  tileImage,
  RTL,
}) => (
  <>
    {RTL ? (
      <div className="absolute left-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    ) : (
      <div className="absolute right-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    )}
    <div
      className={`bg-grey w-full text-4xl lg:text-5xl xl:text-6xl font-mulish-bold px-8 pb-6 pt-6 sm:pt-32 sm:pb-16 sm:px-10 xl:px-12 `}
    >
      <div
        className={`z-10 flex flex-row  ${
          RTL ? 'text-right justify-end' : 'justify-start'
        }`}
      >
        <div className="lg:w-1/2 2xl:w-4/12">Have a Look At Our</div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row">
      <Link href={tileHref[0]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:px-12 xl:py-20 xl:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[0]}
            <div className="mt-6 text-lg md:text-xl xl:text-2xl font-mulish-extralight">
              {tileDescription[0]}
            </div>
            <FindOutMore />
          </div>
          <Image
            src={tileImage[0]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
      <Link href={tileHref[1]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:px-12 xl:py-20 xl:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[1]}
            <div className="mt-6 text-lg md:text-xl xl:text-2xl font-mulish-extralight">
              {tileDescription[1]}
            </div>
            <FindOutMore />
          </div>
          <Image
            src={tileImage[1]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
    </div>
    <div className="flex flex-col sm:flex-row">
      <Link href={tileHref[2]} passHref>
        <div className="relative w-full md:w-1/2 xl:w-7/12 h-140">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:px-12 xl:py-20 xl:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[2]}
            <div className="mt-6 text-lg md:text-xl xl:text-2xl font-mulish-extralight">
              {tileDescription[2]}
            </div>
            <FindOutMore />
          </div>
          <Image
            src={tileImage[2]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
      <Link href={tileHref[3]} passHref>
        <div className="relative w-full md:w-1/2 xl:w-5/12 h-140">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:px-12 xl:py-20 xl:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[3]}
            <div className="mt-6 text-lg md:text-xl xl:text-2xl font-mulish-extralight">
              {tileDescription[3]}
            </div>
            <FindOutMore />
          </div>
          <Image
            src={tileImage[3]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
    </div>
  </>
);

RelatedAboutUsMain.propTypes = {
  tileHeader: PropTypes.string.isRequired,
  tileDescription: PropTypes.string.isRequired,
  tileHref: PropTypes.string.isRequired,
  tileImage: PropTypes.string.isRequired,
  RTL: PropTypes.bool,
};

RelatedAboutUsMain.defaultProps = {
  RTL: false,
};

export default RelatedAboutUsMain;
