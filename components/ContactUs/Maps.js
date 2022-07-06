import React from 'react';
import Image from 'next/image';

const Maps = () => (
  <div className="h-full bg-grey ">
    <div className="p-12 text-5xl text-right font-mulish-bold">Our offices</div>
    <div className="z-10 w-full bg-white 2xl:absolute 2xl:right-0 2xl:mt-40 2xl:ml-24 2xl:pl-224 mr-200 h-128">
      <div className="absolute right-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="p-12 sm:p-24 2xl:pt-12">
        <div className="mb-12 text-4xl sm:text-5xl font-mulish-bold">
          Edotco HQ
        </div>
        <div className="flex flex-row mb-12">
          <div className="relative flex items-center justify-center w-8 h-8 mr-4">
            <Image
              src="/img/contact-us/location-icon.png"
              alt=""
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="w-3/4 leading-loose">
            <span className="sm:text-xl font-mulish-bold">
              edotco Group Sdn Bhd
            </span>
            <br />
            <span className="font-mulish">
              Level 30, Axiata Tower, 9 Jalan Stesen Sentral 5 Kuala Lumpur
              Sentral, 50470, Kuala Lumpur Malaysia
            </span>
          </div>
        </div>
        <div className="flex flex-row mb-12">
          <div className="relative flex items-center justify-center w-8 h-8 mr-4">
            <Image
              src="/img/contact-us/phone-icon.png"
              alt=""
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="w-3/4 leading-loose">
            <span className="sm:text-xl font-mulish-bold">+603 22621388</span>
          </div>
        </div>
        <div className="flex flex-row mb-12">
          <div className="relative flex items-center justify-center w-8 h-8 mr-4">
            <Image
              src="/img/contact-us/email-icon.png"
              alt=""
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="w-3/4 leading-loose">
            <span className="sm:text-xl font-mulish-bold">
              marketing@edotcogroup.com
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="relative flex justify-end">
      <iframe
        title="Youtube Edotco Group"
        className="w-full h-128 2xl:w-300 sm:h-200"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}&q=edotco+group`}
      />
    </div>
  </div>
);

export default Maps;
