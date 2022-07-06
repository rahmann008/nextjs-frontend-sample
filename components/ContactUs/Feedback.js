import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowNarrowRightIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline';

const Feedback = () => (
  <>
    <div className="flex-col hidden sm:flex sm:flex-row">
      <div className="w-7/12 bg-grey">
        <div className="flex flex-col items-start px-8 py-6 text-2xl lg:mt-16 sm:text-3xl xl:text-4xl sm:px-10 sm:py-24 xl:px-16 2xl:px-28 font-mulish-bold">
          Whistleblowing/Speak Up
          <div className="w-full mt-8 text-sm text-justify sm:text-lg font-mulish xl:w-10/12">
            Uncompromising integrity is one of the core values embraced by
            edotco Group, a subsidiary of Axiata Group Berhad. We are commited
            to upholding the highest standard of lawful and ethical conduct, by
            demonstrating honesty, fairness, transparency and accountability in
            all our conduct and dealings
          </div>
          <div className="flex flex-row mt-8">
            <Link href="#">
              <a>
                <button
                  type="button"
                  className="flex flex-row w-40 p-1 px-3 mr-2 rounded-lg lg:mr-8 lg:w-48 md:px-4 text-secondary border-secondary md:py-2 border-3 font-mulish-bold 2xl:w-64"
                >
                  <div className="relative flex items-center justify-center w-8 h-8 mr-4">
                    <Image
                      src="/img/common/icon/pdf-icon-small.png"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                  <span className="flex items-center justify-center w-full h-6 pt-2 text-sm xl:text-base">
                    View Policy
                  </span>
                </button>
              </a>
            </Link>
            <Link href="#">
              <a>
                <button
                  type="button"
                  className="flex flex-row w-40 p-1 px-3 text-white transition-colors border-transparent rounded-lg md:px-4 hover:bg-primary border-3 focus:shadow-outline bg-secondary md:text-2xl md:py-2 font-mulish-bold lg:w-48 2xl:w-64"
                >
                  <span className="flex items-center justify-center w-full h-6 pt-2 text-sm xl:text-base">
                    Speak Up
                  </span>
                  <ArrowNarrowRightIcon
                    className="relative flex items-center justify-center w-8 h-8 mr-4"
                    aria-hidden="true"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Link href="#" passHref>
        <div className="relative w-1/2 h-160">
          <Image
            src="/img/contact-us/whistle-blowing.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
    </div>
    <div className="flex flex-col sm:hidden">
      <Link href="#" passHref>
        <div className="relative w-full h-128">
          <div className="absolute inset-x-0 bottom-0 z-10 px-10 py-10 text-white font-mulish-bold">
            <div className="text-2xl">Whistleblowing/Speak Up</div>
            <div className="mt-6 text-lg font-mulish-extralight">
              Uncompromising integrity is one of the core values embraced by
              edotco Group, a subsidiary of Axiata Group Berhad. We are commited
              to upholding the highest standard of lawful and ethical conduct,
              by demonstrating honesty, fairness, transparency and
              accountability in all our conduct and dealings
            </div>
            <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
              Speak Up
              <ArrowCircleRightIcon
                className="w-12 h-12 ml-2 md:w-16 md:h-16"
                aria-hidden="true"
              />
            </div>
          </div>
          <Image
            src="/img/contact-us/whistle-blowing.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
    </div>
  </>
);

export default Feedback;
