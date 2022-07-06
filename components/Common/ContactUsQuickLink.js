import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactUsQuickLink = () => (
  <Link href="/contact-us" passHref>
    <div className="fixed right-0 z-50 items-center hidden cursor-pointer bottom-6 sm:flex">
      <div className="absolute right-0 z-10 w-full h-4 mr-16 lg:h-8 lg:mr-24">
        <Image
          src="/img/contact-us/speech-bubble.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="relative right-0 z-10 mr-4 text-white font-mulish-bold lg:text-xl">
        Contact Us!
      </div>
      <div className="absolute right-0 z-0 w-40 h-32 lg:w-56 lg:h-48">
        <Image
          src="/img/contact-us/contact-us-quicklink.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  </Link>
);

export default ContactUsQuickLink;
