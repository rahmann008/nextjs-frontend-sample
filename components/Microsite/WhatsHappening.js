import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { removeMd } from '../../utils/markdown';
import formattedDate from '../../utils/formattedDate';

const WhatsHappening = ({ country, flag, mediaReleases }) => {
  const [latestMediaReleases, setLatestMediaReleases] = useState(false);

  useEffect(() => {
    setLatestMediaReleases(
      mediaReleases.data
        .filter(mediaRelease => mediaRelease.attributes.country === country)
        .slice(0, 3)
    );
  }, [mediaReleases, country]);

  return (
    <>
      <div
        id="3"
        className="absolute left-0 w-24 h-24 scroll-mt-24 sm:w-44 sm:h-44"
      >
        <Image
          src="/img/common/bg/down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="p-12 text-right">
        <div className="my-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold lg:my-14">
          What&apos;s Happening
        </div>
        <div className="text-2xl font-mulish-semibold">in edotco {country}</div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row lg:w-10/12">
          {latestMediaReleases &&
            latestMediaReleases.map((mediaRelease, i) => (
              <div
                key={mediaRelease.id}
                className={`${
                  i % 2 === 1 ? 'bg-secondary' : 'bg-grey'
                } w-full py-6`}
              >
                <Link
                  href={`/media/media-releases/${mediaRelease.id}`}
                  passHref
                >
                  <div className="transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-0 lg:hover:scale-005">
                    <div
                      className={`px-8 ${
                        i % 2 === 1 ? 'text-white' : 'text-black'
                      } `}
                    >
                      <div className="flex flex-row pb-4 mt-6 uppercase font-mulish-bold place-content-between">
                        {formattedDate(mediaRelease.attributes.publishedAt)}
                      </div>
                      <div className="pb-1 text-xl lg:text-2xl xl:text-3xl font-mulish-bold line-clamp-3">
                        {mediaRelease.attributes.title}
                      </div>
                      <div className="my-6 text-base text-justify xl:pb-1 xl:text-lg line-clamp-2 font-mulish-semibold">
                        {removeMd(mediaRelease.attributes.content)}
                      </div>
                      <div
                        className={`mb-6 cursor-pointer flex flex-row items-center justify-start text-xs duration-500 lg:hover:translate-x-6 md:text-sm xl:text-base font-mulish-semibold ${
                          i % 2 === 1 ? 'text-white' : 'text-primary'
                        }`}
                      >
                        Read full article
                        <ArrowCircleRightIcon className="w-4 h-4 ml-1 sm:ml-2 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div dir="rtl" className="flex flex-col lg:w-2/12">
          <Link
            href={{
              pathname: `/media/media-releases`,
              query: {
                country,
                flag,
              },
            }}
            passHref
          >
            <div className="flex flex-col items-center justify-center h-full py-6 text-lg bg-gray-100 cursor-pointer float-center lg:text-2xl font-mulish-extralight">
              <ArrowCircleRightIcon
                className="w-10 h-10 ml-2 duration-500 lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:hover:translate-x-6 "
                aria-hidden="true"
              />
              View All News
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

WhatsHappening.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  mediaReleases: PropTypes.object.isRequired,
};

export default WhatsHappening;
