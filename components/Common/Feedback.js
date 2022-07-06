import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Feedback = ({ RTL }) => (
  <div className="w-full bg-grey">
    {RTL ? (
      <div className="absolute right-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    ) : (
      <div className="absolute left-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    )}
    <div className="flex flex-col items-center justify-center px-8 py-6 text-3xl text-center sm:text-4xl sm:px-10 sm:py-24 xl:px-12 md:text-5xl font-mulish-bold">
      Have Any Questions?
      <div className="mt-6 text-sm text-center sm:text-lg font-mulish">
        We welcome any feedback. Feel free to reach out to us!
      </div>
      <Link href="/contact-us" passHref>
        <button
          type="button"
          className="flex flex-row items-center px-12 mt-6 text-lg text-white transition-colors rounded-lg font-mulish md:px-24 focus:shadow-outline hover:bg-primary bg-secondary md:text-2xl"
        >
          Contact Us
          <ArrowNarrowRightIcon
            className="items-center w-6 h-16 ml-2"
            aria-hidden="true"
          />
        </button>
      </Link>
    </div>
  </div>
);

Feedback.propTypes = {
  RTL: PropTypes.bool,
};

Feedback.defaultProps = {
  RTL: false,
};

export default Feedback;
