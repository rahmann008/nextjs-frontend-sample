import React from 'react';
import Link from 'next/link';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import PropTypes from 'prop-types';

const RelatedMedia = ({
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
    <div
      className={`${
        subpage ? 'bg-grey' : 'bg-white'
      } w-full text-4xl lg:text-5xl xl:text-6xl font-mulish-bold px-8 py-6 sm:py-16 sm:px-10 xl:px-12`}
    >
      <div className="flex flex-row items-center justify-center lg:w-1/2 2xl:w-4/12">
        Related media you might like
      </div>
    </div>
    <div className="flex flex-col sm:flex-row">
      <Link href={tileHref[0]} passHref>
        <div className="relative w-full sm:w-1/2 h-96 sm:h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:py-20 md:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[0]}
            <div className="mt-6 text-lg md:text-2xl font-mulish-extralight">
              {tileDescription[0]}
            </div>
            <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
              Find out more
              <ArrowCircleRightIcon
                className="w-12 h-12 ml-2 md:w-16 md:h-16"
                aria-hidden="true"
              />
            </div>
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
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:py-20 md:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
            {tileHeader[1]}
            <div className="mt-6 text-lg md:text-2xl font-mulish-extralight">
              {tileDescription[1]}
            </div>
            <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
              Find out more
              <ArrowCircleRightIcon
                className="w-12 h-12 ml-2 md:w-16 md:h-16"
                aria-hidden="true"
              />
            </div>
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
  </>
);

RelatedMedia.propTypes = {
  tileHeader: PropTypes.string.isRequired,
  tileDescription: PropTypes.string.isRequired,
  tileHref: PropTypes.string.isRequired,
  tileImage: PropTypes.string.isRequired,
  subpage: PropTypes.bool.isRequired,
};

export default RelatedMedia;
