import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Feedback = () => (
  <div className="relative w-full bg-grey sm:w-1/2 h-60 sm:h-128">
    <div className="absolute w-24 h-24 sm:w-44 sm:h-44">
      <Image
        src="/img/common/bg/down-quarter-wave-pattern.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="flex flex-col items-center justify-center px-8 py-8 text-3xl text-center sm:text-4xl sm:px-10 sm:py-40 xl:px-12 xl:text-5xl font-mulish-bold">
      Have Any Questions?
      <div className="mt-6 text-sm text-center lg:text-lg xl:text-xl font-mulish">
        We welcome any feedback. Feel free to reach out to us!
      </div>
      <Link href="/contact-us" passHref>
        <button
          type="button"
          className="font-mulish flex flex-row items-center px-12 mt-6 text-lg text-white transition-colors rounded-lg lg:px-24 focus:shadow-outline hover:bg-primary bg-secondary md:text-2xl"
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

export default Feedback;
