import React from 'react';
import Image from 'next/image';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const Remote = () => (
  <div className="relative lg:pt-24">
    <div className="bg-primary xl:absolute inset-y-0 left-0 z-10 grid content-center text-white p-5 sm:p-10 md:p-20 xl:w-7/12 xl:my-44">
      <span className="mb-8 font-mulish-bold text-3xl md:text-5xl 2xl:text-6xl">
        Hybrid Working Experience, How We Managed It.
      </span>
      <span className="font-mulish text-xl md:text-2xl 2xl:text-3xl mb-8">
        Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec
        viverra eleifend lacus, vitae si…
      </span>
      <div className="cursor-pointer flex flex-row items-center justify-start text-xs duration-500 lg:hover:translate-x-6 md:text-sm xl:text-2xl font-mulish-semibold">
        Read full article
        <ArrowCircleRightIcon className="w-4 h-4 ml-1 sm:ml-2 sm:h-5 sm:w-5" />
      </div>
    </div>
    <div className="relative w-full xl:h-200">
      <Image
        src="/img/life-edotco/remote.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  </div>
);

export default Remote;
