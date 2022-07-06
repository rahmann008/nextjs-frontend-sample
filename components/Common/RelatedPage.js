import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const Tile = ({ header, image, href, children }) => (
  <div className="relative flex items-center justify-center md:items-end md:justify-start w-full md:h-full">
    <Image src={image} alt="" layout="fill" objectFit="cover" priority />
    <Link href={href} passHref>
      <div className="absolute z-10 flex md:m-12 flex-col items-center md:items-start text-white md:text-left">
        <div className="flex flex-col items-center md:items-start duration-500 cursor-pointer lg:hover:translate-x-6 ">
          <ArrowCircleRightIcon
            className="w-12 h-12 lg:w-16 lg:h-16"
            aria-hidden="true"
          />
          <div className="text-lg lg:text-2xl font-mulish-extralight">
            {header}
          </div>
        </div>
        <div className="text-xl font-mulish-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {children}
        </div>
      </div>
    </Link>
  </div>
);

const RelatedPage = ({ tileSmallHeader, tileHeader, tileHref, tileImage }) => (
  <>
    <div className="relative w-full bg-black h-120 md:h-60 lg:h-100">
      <div className="absolute grid w-full h-full md:grid-cols-3">
        <Tile image={tileImage[0]} href={tileHref[0]} header={tileSmallHeader}>
          {tileHeader[0]}
        </Tile>
        <Tile image={tileImage[1]} href={tileHref[1]} header={tileSmallHeader}>
          {tileHeader[1]}
        </Tile>
        <Tile image={tileImage[2]} href={tileHref[2]} header={tileSmallHeader}>
          {tileHeader[2]}
        </Tile>
      </div>
    </div>
  </>
);

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

RelatedPage.propTypes = {
  tileHeader: PropTypes.string.isRequired,
  tileHref: PropTypes.string.isRequired,
  tileImage: PropTypes.string.isRequired,
};

export default RelatedPage;
