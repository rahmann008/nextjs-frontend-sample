import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import formattedDate from '../../../utils/formattedDate';
import RightArrow from '../../Common/RightArrow';

const ContentHubsPostPreview = ({ contentHub }) => {
  const date = formattedDate(contentHub.attributes.published_date);
  const coverImage = `${process.env.STRAPI_API_URL}${contentHub.attributes.cover_image.data.attributes.url}`;
  const { type } = contentHub.attributes;
  const { topic } = contentHub.attributes;

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
      case 'Human Resource':
        typeColor = 'bg-orange-500 ';
        break;
      default:
        typeColor = 'bg-violet-500';
    }
    return typeColor;
  };

  return (
    <Link href={`/media/content-hubs/${contentHub.id}`} passHref>
      <div className="">
        <div className="py-4 transition duration-500 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105">
          <div className="relative">
            <div
              className={`absolute z-10 top-0 right-0 px-4 py-1 mt-2 mr-2 ${getStatusColour(
                topic
              )} rounded-2xl`}
            >
              <span className="text-white font-mulish-semibold">{topic}</span>
            </div>
            <div className="overflow-hidden text-center">
              <Image
                src={coverImage}
                alt="Cover image of article"
                objectFit="cover"
                width={1500}
                height={1000}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-row pb-4 mt-6 text-gray-500 uppercase font-mulish-bold place-content-between">
            {date}
            {type === 'Blog' ? (
              <div className="relative float-right w-6 h-6">
                <Image
                  src="/img/media/content-hubs/articles-icon.png"
                  alt="Article icon"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            ) : (
              <div className="relative float-right w-6 h-6">
                <Image
                  src="/img/media/content-hubs/podcast-icon.png"
                  alt="Podcast icon"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            )}
          </div>
          <div className="mb-4 text-2xl line-clamp-2 lg:text-3xl xl:text-4xl font-mulish-bold">
            {contentHub.attributes.title}
          </div>
          <div className="text-xs text-justify xl:pb-1 md:text-sm xl:text-base line-clamp-2 font-mulish-semibold">
            {contentHub.attributes.content}
          </div>
          <div className="my-4 text-xs text-left text-gray-600 md:text-base font-mulish-semibold">
            <span className="mr-2 sm:mr-4 lg:mr-6">
              {contentHub.attributes.country}
            </span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">{type}</span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">{topic}</span>
          </div>
          {type === 'Blog' && topic !== 'Success Stories' ? (
            <RightArrow>Read full article</RightArrow>
          ) : (
            ''
          )}
          {topic === 'Success Stories' ? (
            <div className="flex flex-row items-center justify-start text-xs duration-500 cursor-pointer lg:hover:translate-x-6 md:text-sm xl:text-base font-mulish-semibold text-emerald-600">
              More Details
              <ArrowCircleRightIcon className="w-4 h-4 ml-1 sm:ml-2 sm:h-5 sm:w-5" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Link>
  );
};

ContentHubsPostPreview.propTypes = {
  contentHub: PropTypes.object.isRequired,
};

export default ContentHubsPostPreview;
