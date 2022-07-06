import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Feedback = () => (
  <div className="flex flex-row">
    <div className="hidden sm:block relative w-full sm:w-1/2 h-96 sm:h-128">
      <Image
        src="/img/microsite/whatsapp.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="relative w-full bg-grey sm:w-1/2 h-80 sm:h-128">
      <div className="absolute right-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center px-8 py-8 text-3xl text-center sm:text-4xl sm:px-10 sm:py-40 xl:px-12 xl:text-5xl font-mulish-bold">
        Stay connected with us
        <div className="mt-6 text-sm text-center lg:text-lg xl:text-xl font-mulish">
          Subscribe to our newsletter to stay up to date with the latest news
          and producst from edotco Malaysia
        </div>
        <Link href="/contact-us" passHref>
          <button
            type="button"
            className="font-mulish flex flex-row items-center px-12 mt-6 text-lg text-white transition-colors rounded-lg lg:px-24 focus:shadow-outline hover:bg-primary bg-secondary md:text-2xl"
          >
            Subscribe
            <ArrowNarrowRightIcon
              className="items-center w-6 h-16 ml-2"
              aria-hidden="true"
            />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Feedback;
