import React from 'react';
import Link from 'next/link';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import PropTypes from 'prop-types';

const RelatedMediaMain = ({
  tileHeader,
  tileDescription,
  tileHref,
  tileImage,
}) => (
  <>
    <div className="grid md:grid-cols-2">
      <div className="flex">
        <Link href={tileHref[0]} passHref>
          <div className="relative w-full h-96 md:h-128">
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
      </div>
      <div className="flex">
        <Link href={tileHref[1]} passHref>
          <div className="relative w-full h-96 md:h-128">
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
    </div>
    <Link href={tileHref[2]} passHref>
      <div className="flex-col hidden sm:flex sm:flex-row">
        <div className="flex flex-col justify-center px-10 py-10 text-4xl bg-grey sm:w-5/12 md:py-20 md:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
          {tileHeader[2]}
          <div className="mt-6 text-lg md:text-2xl font-mulish-extralight">
            {tileDescription[2]}
          </div>
          <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
            Find out more
            <ArrowCircleRightIcon
              className="w-12 h-12 ml-2 md:w-16 md:h-16"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="relative w-full sm:w-7/12 h-140">
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
    <Link href={tileHref[2]} passHref>
      <div className="relative w-full sm:hidden sm:w-1/2 h-96 sm:h-128">
        <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-4xl text-white md:py-20 md:px-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mulish-bold">
          {tileHeader[2]}
          <div className="mt-6 text-lg font-mulish-extralight">
            {tileDescription[2]}
          </div>
          <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
            Find out more
            <ArrowCircleRightIcon
              className="w-12 h-12 ml-2 md:w-16 md:h-16"
              aria-hidden="true"
            />
          </div>
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
  </>
);

RelatedMediaMain.propTypes = {
  tileHeader: PropTypes.string.isRequired,
  tileDescription: PropTypes.string.isRequired,
  tileHref: PropTypes.string.isRequired,
  tileImage: PropTypes.string.isRequired,
};

export default RelatedMediaMain;
