import React from 'react';
import Image from 'next/image';
import Button from '../Common/Button';

const Feedback = () => (
  <div id="3" className="scroll-mt-32 flex flex-row">
    <div className="hidden md:block relative w-full sm:w-2/3 h-96 sm:h-128">
      <Image
        src="/img/life-edotco/join-us.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="relative w-full bg-grey md:w-1/3 h-72 md:h-128">
      <div className="absolute right-0 w-24 h-24 md:w-44 md:h-44">
        <Image
          src="/img/common/bg/right-down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col items-start justify-start px-8 py-8 text-3xl text-start sm:text-4xl sm:px-10 md:py-32 2xl:py-40 xl:px-12 xl:text-5xl font-mulish-bold">
        Join Us!
        <div className="mt-6 text-sm text-left lg:text-lg xl:text-xl font-mulish mb-6">
          We constantly call for motivated, talented and experienced people to
          support our organization. No matter where you join us, you will find a
          diverse team of employees focused on our shared success.
        </div>
        <Button href="/contact-us">Available Vacancies</Button>
      </div>
    </div>
  </div>
);

export default Feedback;
