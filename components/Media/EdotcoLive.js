import React from 'react';
import Image from 'next/image';

const EdotcoLive = () => (
  <div className="flex flex-col justify-center items-center p-8 sm:p-24 h-140 sm:h-300">
    <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mulish-bold mb-10 xl:mb-12">
      Edotco LIVE
    </div>
    <div className="bg-grey h-full w-full flex flex-col justify-center items-center ">
      <div className="relative w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/media/icon/live-streaming-graphic.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="mt-12 font-mulish text-2xl">Stay Tuned ...</div>
    </div>
  </div>
);

export default EdotcoLive;
