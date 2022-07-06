import React from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import Image from 'next/image';

const NavbarDropdown = ({
  flag,
  title,
  summaryTitle,
  summaryBody,
  href,
  microsite,
  children,
}) => (
  <div className="relative hidden py-4 lg:inline-block group">
    <div
      className={`${
        microsite
          ? 'border-2 border-black rounded-3xl mx-8 px-4 py-2'
          : 'px-4 xl:px-10 mt-3'
      } inline-flex items-center text-lg font-mulish-semibold`}
    >
      {microsite && (
        <div
          className={`relative inline-flex items-center ${
            title === 'Global' ? 'h-6' : 'h-4'
          } w-6 mr-4`}
        >
          <Image
            src={`/img/microsite/icon/${flag}.png`}
            alt=""
            layout="fill"
            priority
          />
        </div>
      )}
      <Link href={href}>
        <a className="mr-2">{title}</a>
      </Link>
      <ChevronDownIcon className="invisible w-4 h-4 lg:visible lg:group-hover:invisible lg:group-hover:hidden text-secondary" />
      <ChevronUpIcon className="hidden w-4 h-4 lg:group-hover:block text-secondary" />
    </div>
    {!microsite && (
      <div className="justify-center mx-4 mt-2 border-transparent xl:mx-8 border-b-3 lg:group-hover:border-secondary" />
    )}
    <div className="relative z-0 hidden lg:visible group-hover:block">
      <div className="fixed left-0 w-1/2 pt-1 mt-4 2xl:w-full h-80 mr-200">
        <Image
          src="/img/navbar/top-nav-menu-bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="bottom left"
          priority
        />
        <div className="absolute z-20 top-1/2 2xl:left-1/4 transform -translate-y-1/2 2xl:w-1/4 px-8 text-left text-white">
          {microsite && (
            <div className="relative inline-flex items-center w-8 h-8">
              <Image
                src="/img/microsite/icon/global-white.png"
                alt=""
                layout="fill"
                priority
              />
            </div>
          )}
          <div className="font-mulish-bold">{summaryTitle}</div>
          <div className="font-mulish">{summaryBody}</div>
          <Link href={href} passHref>
            <button
              type="button"
              className="flex flex-row items-center mt-6 cursor-pointer font-mulish-extralight"
            >
              {microsite ? 'Visit edotco Global' : 'Find out more'}
              <ArrowCircleRightIcon
                className="w-8 h-8 ml-2 "
                aria-hidden="true"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="fixed z-0 hidden w-screen pt-1 mt-4 left-1/2 lg:bg-gray-100 mr-96 h-80 2xl:opacity-90 group-hover:block" />
      {children}
    </div>
  </div>
);

NavbarDropdown.propTypes = {
  flag: PropTypes.string,
  title: PropTypes.string.isRequired,
  summaryTitle: PropTypes.string.isRequired,
  summaryBody: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  microsite: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

NavbarDropdown.defaultProps = {
  flag: '',
  microsite: false,
  children: [],
};

export default NavbarDropdown;
