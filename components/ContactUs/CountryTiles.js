import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const Tile = ({ image, href, children }) => (
  <div className="relative flex items-center justify-center w-full md:items-end md:justify-start md:h-full">
    <Image src={image} alt="" layout="fill" objectFit="cover" priority />
    <Link href={href} passHref>
      <div className="absolute z-10 flex flex-col items-center text-white md:m-12 md:items-start md:text-left">
        <div className="flex flex-col items-center duration-500 cursor-pointer md:items-start lg:hover:translate-x-6 ">
          <ArrowCircleRightIcon
            className="w-12 h-12 lg:w-16 lg:h-16"
            aria-hidden="true"
          />
          <div className="text-lg lg:text-2xl font-mulish-extralight">
            Contact Edotco
          </div>
        </div>
        <div className="text-xl font-mulish-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {children}
        </div>
      </div>
    </Link>
  </div>
);

const CountryTiles = () => (
  <div>
    <div className="relative w-full bg-black h-300 md:h-196">
      <div className="absolute grid w-full h-full md:grid-cols-4">
        <Tile image="/img/contact-us/malaysia.jpg" href="#">
          Malaysia
        </Tile>
        <Tile image="/img/contact-us/bangladesh.jpg" href="#">
          Bangladesh
        </Tile>
        <Tile image="/img/contact-us/cambodia.jpg" href="#">
          Cambodia
        </Tile>
        <Tile image="/img/contact-us/pakistan.jpg" href="#">
          Pakistan
        </Tile>
        <Tile image="/img/contact-us/srilanka.jpg" href="#">
          Sri Lanka
        </Tile>
        <Tile image="/img/contact-us/myanmar.jpg" href="#">
          Myanmar
        </Tile>
        <Tile image="/img/contact-us/laopdr.jpg" href="#">
          Lao PDR
        </Tile>
        <Tile image="/img/contact-us/philippines.jpg" href="#">
          PHilippines
        </Tile>
      </div>
    </div>
  </div>
);

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CountryTiles;
