import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Slider from 'react-slick';
import Banner from '../../components/Common/Banner';
import EdotcoLive from '../../components/Media/EdotcoLive';
import YoutubeEmbed from '../../components/Common/YoutubeEmbed';
import LinkedinEmbed from '../../components/Common/LinkedinEmbed';
import { YOUTUBE_API } from '../../utils/youtube';
import WhatsHappening from '../../components/Media/WhatsHappening';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import youtubeParser from '../../utils/youtubeParser';
import { carouselSettings } from '../../utils/carouselSettings';
import RelatedMediaMain from '../../components/Media/RelatedMediaMain';
import Feedback from '../../components/Common/Feedback';
import CoverImage from '../../components/Common/CoverImage';

const media = ({
  linkedins,
  youtubeMetadata,
  postResMediaReleasesTop,
  postResMediaReleasesBottom,
  postResContentHub,
  youtubeID,
}) => (
  <>
    <Head>
      <title>Media | edotco</title>
      <meta
        name="description"
        content="Building shard connectivity for a sustainable future"
      />
      <link rel="icon" href="/img/common/icon/edotco-logo.png" />
    </Head>
    <div>
      <CoverImage
        headerSmall="Overview of Our"
        header="Media"
        coverImage="/img/media/bg/media-overview-header.png"
      />
      <Banner subpage="Media" />
      <div className="flex justify-end">
        <div className="relative w-24 h-24 sm:w-44 sm:h-44">
          <Image
            src="/img/common/bg/right-down-quarter-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 mt-128 md:mt-164 z-10">
        <EdotcoLive />
      </div>
      <div className="mt-96 sm:mt-200">
        <div className="relative w-24 h-24 sm:w-44 sm:h-44">
          <Image
            src="/img/common/bg/quarter-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute w-24 h-24 sm:w-44 sm:h-44">
          <Image
            src="/img/common/bg/down-quarter-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <WhatsHappening
        contentHubs={postResContentHub}
        mediaReleasesTop={postResMediaReleasesTop}
        mediaReleasesBottom={postResMediaReleasesBottom}
      />
      <YoutubeEmbed youtubeMetadata={youtubeMetadata} embedId={youtubeID} />
      <div>
        <div className="absolute w-24 h-24 sm:w-44 sm:h-44">
          <Image
            src="/img/common/bg/down-quarter-wave-pattern.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="xl:hidden mb-12">
          <Slider {...carouselSettings}>
            <LinkedinEmbed linkedins={linkedins} postId={1} />
            <LinkedinEmbed linkedins={linkedins} postId={2} />
            <LinkedinEmbed linkedins={linkedins} postId={3} />
          </Slider>
        </div>
        <div className="hidden lg:h-192 xl:flex flex-col md:flex-row justify-center items-center">
          <LinkedinEmbed linkedins={linkedins} postId={1} />
          <LinkedinEmbed linkedins={linkedins} postId={2} />
          <LinkedinEmbed linkedins={linkedins} postId={3} />
        </div>
      </div>
      <RelatedMediaMain
        tileHeader={['In The News', 'Content Hub', 'Reports']}
        tileDescription={[
          'Browse through our articles and podcast lorempisum nec viverraeleifend lacus, vitae sit amet blandit dolor',
          'Browse through our success stories loremipsum nec viverraeleifend lacus, vitae sit amet blandit dolor',
          'Browse through our reports loremipsum nec viverra eleifend lacusvitae sit amet blandit dolor',
        ]}
        tileHref={[
          '/media/media-releases',
          '/media/content-hubs',
          '/media/reports',
        ]}
        tileImage={[
          '/img/media/media-releases/in-the-news-img.png',
          '/img/media/content-hubs/content-hub.png',
          '/img/media/reports/reports-img.png',
        ]}
        subpage
      />
      <Feedback />
    </div>
  </>
);

export async function getStaticProps() {
  const allPromises = [];
  const youtubeID = youtubeParser(
    (await axios.get(`${process.env.STRAPI_API_URL}/api/youtube`)).data.data
      .attributes.url
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/linkedins?populate=cover_image`
    )
  );
  allPromises.push(
    axios.get(
      `${YOUTUBE_API}?part=snippet%2Cstatistics&id=${youtubeID}&key=${process.env.YOUTUBE_API_KEY}`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-media-release-top?populate=*`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-media-release-bottom?populate=*`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/featured-content-hub?populate=*`
    )
  );
  const [
    postResLinkedin,
    postResYoutube,
    postResMediaReleasesTop,
    postResMediaReleasesBottom,
    postResContentHub,
  ] = await Promise.all(allPromises);

  return {
    props: {
      youtubeID,
      linkedins: postResLinkedin.data,
      youtubeMetadata: postResYoutube.data,
      postResMediaReleasesTop: postResMediaReleasesTop.data,
      postResMediaReleasesBottom: postResMediaReleasesBottom.data,
      postResContentHub: postResContentHub.data,
    },
    revalidate: 10,
  };
}

export default media;
