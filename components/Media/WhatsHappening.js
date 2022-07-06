import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { removeMd } from '../../utils/markdown';
import formattedDate from '../../utils/formattedDate';
import RightArrow from '../Common/RightArrow';

const WhatsHappening = ({
  contentHubs,
  mediaReleasesTop,
  mediaReleasesBottom,
}) => {
  const contentHubsCoverImage = `${process.env.STRAPI_API_URL}${contentHubs.data.attributes.content_hub.data.attributes.cover_image.data.attributes.url}`;
  const contentHubsDate = formattedDate(
    contentHubs.data.attributes.content_hub.data.attributes.publishedAt
  );
  const mediaReleasesDateTop = formattedDate(
    mediaReleasesTop.data.attributes.media_release.data.attributes.publishedAt
  );
  const mediaReleasesDateBottom = formattedDate(
    mediaReleasesBottom.data.attributes.media_release.data.attributes
      .publishedAt
  );
  const { type } = contentHubs.data.attributes.content_hub.data.attributes;
  const { topic } = contentHubs.data.attributes.content_hub.data.attributes;
  const plainTextTop = removeMd(
    mediaReleasesTop.data.attributes.media_release.data.attributes.content
  );
  const plainTextBottom = removeMd(
    mediaReleasesBottom.data.attributes.media_release.data.attributes.content
  );
  const getStatusColour = type => {
    let typeColor = '';
    switch (type) {
      case 'LIFE@edotco':
        typeColor = 'bg-violet-500';
        break;
      case 'Technology':
        typeColor = 'bg-blue-700';
        break;
      case 'Innovation':
        typeColor = 'bg-red-700';
        break;
      case 'Sustainability':
        typeColor = 'bg-green-500';
        break;
      case 'Success Stories':
        typeColor = 'bg-yellow-500';
        break;
      default:
        typeColor = 'bg-violet-500';
    }
    return typeColor;
  };
  return (
    <div className="p-8 sm:p-16 xl:p-24 h-348 sm:h-424 lg:h-400 xl:h-260">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mulish-bold mb-10 xl:mb-12">
        What&apos;s Happening
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <div className="relative w-full bg-grey h-128 sm:h-168 lg:h-176 xl:h-200 mb-6 sm:mb-8 xl:mr-12 mt-7 transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105">
          <a
            href={`/media/content-hubs/${contentHubs.data.attributes.content_hub.data.id}`}
          >
            <div className="absolute bottom-0 p-8 mb-28 sm:mb-40 z-20 sm:p-16">
              <div>
                {type === 'Blog' ? (
                  <div className="relative w-8 h-8">
                    <Image
                      src="/img/media/content-hubs/articles-icon-white.png"
                      alt="White article icon"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                ) : (
                  <div className="relative w-8 h-8">
                    <Image
                      src="/img/media/icon/podcast-icon-white.png"
                      alt="White podcast icon"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-row pb-4 mt-6 text-white uppercase font-mulish-bold place-content-between">
                {contentHubsDate}
              </div>
              <div className="pb-4 text-2xl lg:text-3xl xl:text-4xl font-mulish-bold text-white">
                {contentHubs.data.attributes.content_hub.data.attributes.title}
              </div>
              <div className="text-xs text-justify xl:pb-1 md:text-sm xl:text-base line-clamp-2 font-mulish-semibold text-white">
                {
                  contentHubs.data.attributes.content_hub.data.attributes
                    .content
                }
              </div>
              <div className="my-4 text-xs text-left md:text-base font-mulish-semibold text-white">
                <span className="mr-2 sm:mr-4 lg:mr-6">
                  {
                    contentHubs.data.attributes.content_hub.data.attributes
                      .country
                  }
                </span>
                &bull;
                <span className="mx-2 sm:mx-4 lg:mx-6 text-white">{type}</span>
                &bull;
                <span className="mx-2 sm:mx-4 lg:mx-6 text-white">{topic}</span>
              </div>
            </div>
            <div className="absolute z-10 w-full h-96 sm:h-140 xl:h-160 ">
              <Image
                src="/img/common/bg/featured-article-bg.png"
                alt=""
                layout="fill"
                objectFit="cover"
                priority
                unoptimized
              />
            </div>
            <div
              className={`absolute z-20 top-0 right-0 px-4 py-1 m-4 ${getStatusColour(
                topic
              )} rounded-2xl`}
            >
              <span className="text-white font-mulish-semibold">{topic}</span>
            </div>
            <div className="relative w-full h-96 sm:h-140 xl:h-160 ">
              <Image
                src={contentHubsCoverImage}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
                unoptimized
              />
            </div>
          </a>
          <Link href="/media/content-hubs" passHref>
            <div className="flex flex-col items-center float-center mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 lg:text-2xl font-mulish-extralight">
              <ArrowCircleRightIcon
                className="w-12 h-12 ml-2 lg:w-16 lg:h-16"
                aria-hidden="true"
              />
              View All Content Hub
            </div>
          </Link>
        </div>
        <Link href="/media/media-releases" passHref>
          <div className="w-full xl:w-5/12 h-172 lg:h-180 xl:h-200 bg-grey flex flex-col xl:ml-12 transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105">
            <Link
              href={`/media/media-releases/${mediaReleasesTop.data.attributes.media_release.data.id}`}
              passHref
            >
              <div className="bg-grey h-72 xl:h-80 transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105">
                <div className="px-8">
                  <div className="flex flex-row pb-4 mt-6 uppercase font-mulish-bold place-content-between">
                    {mediaReleasesDateTop}
                  </div>
                  <div className="pb-1 text-xl lg:text-2xl xl:text-3xl font-mulish-bold line-clamp-3">
                    {
                      mediaReleasesTop.data.attributes.media_release.data
                        .attributes.title
                    }
                  </div>
                  <div className="text-xs text-justify xl:pb-1 md:text-sm xl:text-base line-clamp-2 font-mulish-semibold mb-6">
                    {plainTextTop}
                  </div>
                  <RightArrow>Read full article</RightArrow>
                </div>
              </div>
            </Link>
            <Link
              href={`/media/media-releases/${mediaReleasesBottom.data.attributes.media_release.data.id}`}
              passHref
            >
              <div className="bg-primary h-72 xl:h-80 transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105">
                <div className="px-8 text-white">
                  <div className="flex flex-row pb-4 mt-6 uppercase font-mulish-bold place-content-between">
                    {mediaReleasesDateBottom}
                  </div>
                  <div className="pb-1 text-xl lg:text-2xl xl:text-3xl font-mulish-bold line-clamp-3">
                    {
                      mediaReleasesBottom.data.attributes.media_release.data
                        .attributes.title
                    }
                  </div>
                  <div className="text-xs text-justify xl:pb-1 md:text-sm xl:text-base line-clamp-2 font-mulish-semibold mb-6">
                    {plainTextBottom}
                  </div>
                  <RightArrow>Read full article</RightArrow>
                </div>
              </div>
            </Link>
            <div className="flex flex-col items-center float-center mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 lg:text-2xl font-mulish-extralight">
              <ArrowCircleRightIcon
                className="w-12 h-12 ml-2 lg:w-16 lg:h-16"
                aria-hidden="true"
              />
              View All News
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

WhatsHappening.propTypes = {
  contentHubs: PropTypes.object.isRequired,
  mediaReleasesTop: PropTypes.object.isRequired,
  mediaReleasesBottom: PropTypes.object.isRequired,
};

export default WhatsHappening;
