import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import images from '../assets';
import Logo from '../assets/myLogo.svg';
import Button from './Button';

const SOCIAL_MEDIA = [
  images.instagram,
  images.telegram,
  images.discord,
  images.twitter,
];

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  const theme = useTheme();
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex-row md:flex-col sm:px-4 px-16">
        <Link href="/" className="cursor-pointer ">
          <div className="flex">
            <Logo className="w-6 h-6 " alt="logo" />
            <p className="ml-2 font-mono font-medium dark:text-white text-nft-black-1">
              NFT-EXCHANGE
            </p>
          </div>
        </Link>
        {/* First Paragraph */}
        <div>
          <div className="cursor-pointer">
            <p className="font-poppins dark:text-white text-nft-black-1 text-base mt-6">
              Get the latest updates
            </p>
          </div>
        </div>
        <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
          <input
            type="email"
            placeholder="Your Email"
            className="h-full flex-1 w-full dark:bg-nft-black-2 font-poppins bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
          />
          <div>
            <Button btnTitle="Email me" classStyles="rounded-md" />
          </div>
        </div>
      </div>
      {/* Second Paragraph */}
      <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
        <FooterLinks
          heading="NFT_EXCHANGE"
          items={['Explore', 'How it works', 'Contact Us']}
        />
      </div>
      {/* Second Paragraph */}
      <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
        <FooterLinks
          heading="Support"
          items={['Help Center', 'Terms of service', 'Legal', 'Privacy policy']}
        />
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold">
            NFT-EXCHAGE, Inc, All Rights Reserved{' '}
          </p>
          <div className="mx-2 cursor-pointer flex">
            {SOCIAL_MEDIA.map((image, index) => (
              <div key={index} className="mx-1">
                <Image
                  src={image}
                  width={24}
                  height={24}
                  objectFit="contain"
                  className={theme === 'light' && 'filter invert'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
