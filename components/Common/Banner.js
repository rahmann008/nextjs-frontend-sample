import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/outline';

const Banner = ({ subpage, href }) => (
  <div className="flex flex-row items-center w-full px-8 py-2 text-xs shadow-inner bg-grey lg:text-base xl:text-lg xl:px-20">
    <Link href="/" passHref>
      <span className="mr-4 cursor-pointer font-mulish-semibold">Home</span>
    </Link>
    {typeof subpage === 'object' && subpage !== null ? (
      subpage.map((page, key) => (
        <>
          <ChevronRightIcon className="w-6 h-4 text-gray-400" />
          <Link href={href[key]} passHref>
            <span
              className={`mx-4 cursor-pointer font-mulish-bold ${
                key + 1 === subpage.length ? 'text-primary' : 'text-black'
              }`}
            >
              {page}
            </span>
          </Link>
        </>
      ))
    ) : (
      <>
        <ChevronRightIcon className="w-6 h-4 text-gray-400" />
        <Link href="#" passHref>
          <span className="mx-4 cursor-pointer font-mulish-bold text-primary">
            {subpage}
          </span>
        </Link>
      </>
    )}
  </div>
);

Banner.propTypes = {
  subpage: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Banner.defaultProps = {
  href: '',
};

export default Banner;
