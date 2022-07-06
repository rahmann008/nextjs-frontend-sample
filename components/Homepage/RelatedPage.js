import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import FindOutMore from '../Common/FindOutMore';
import Feedback from './Feedback';

const RelatedPage = ({
  tileHeader,
  tileDescription,
  tileHref,
  tileImage,
  subpage,
}) => (
  <>
    {subpage && (
      <div className="relative bottom-0 left-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    )}
    <div className="flex flex-col sm:flex-row">
      <Link href={tileHref[0]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white lg:py-20 lg:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[0]}
            <div className="mt-6 text-lg lg:text-2xl font-mulish-extralight">
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
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white lg:py-20 lg:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[1]}
            <div className="mt-6 text-lg lg:text-2xl font-mulish-extralight">
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
    <Link href={tileHref[2]} passHref>
      <div className="flex-col hidden sm:flex sm:flex-row">
        <div className="relative w-full sm:w-7/12 h-160">
          <Image
            src={tileImage[2]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-10 py-10 text-4xl bg-grey sm:w-5/12 md:py-20 md:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
          {tileHeader[2]}
          <div className="mt-6 text-lg lg:text-2xl font-mulish-extralight">
            {tileDescription[2]}
          </div>
          <FindOutMore />
        </div>
      </div>
    </Link>
    <Link href={tileHref[2]} passHref>
      <div className="relative w-full sm:hidden sm:w-1/2 h-96 sm:h-128">
        <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white lg:py-20 lg:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
          {tileHeader[2]}
          <div className="mt-6 text-lg font-mulish-extralight">
            {tileDescription[2]}
          </div>
          <FindOutMore />
        </div>
        <div className="sm:relative sm:w-7/12 sm:h-128">
          <Image
            src={tileImage[2]}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </Link>
    <div className="flex-col hidden sm:flex sm:flex-row">
      <Feedback />
      <Link href={tileHref[3]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white lg:py-20 lg:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[3]}
            <div className="mt-6 text-lg lg:text-2xl font-mulish-extralight">
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
    <div className="flex flex-col sm:hidden sm:flex-row">
      <Link href={tileHref[3]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white lg:py-20 lg:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[3]}
            <div className="mt-6 text-lg md:text-2xl font-mulish-extralight">
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
      <div className="sm:w-1/2 h-60 sm:h-128">
        <Feedback />
      </div>
    </div>
  </>
);

RelatedPage.propTypes = {
  tileHeader: PropTypes.array.isRequired,
  tileDescription: PropTypes.array.isRequired,
  tileHref: PropTypes.array.isRequired,
  tileImage: PropTypes.array.isRequired,
  subpage: PropTypes.bool,
};

RelatedPage.defaultProps = {
  subpage: false,
};

export default RelatedPage;
