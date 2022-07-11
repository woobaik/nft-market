import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';
import Logo from '../assets/myLogo.svg';
import { Button } from '.';

const MenuItems = ({ isMobile, active, setActive, isNavOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/created-nfts';
      case 2:
        return '/my-nfts';
      default:
        return '/';
    }
  };

  return (
    <ul className="flex flexCenter">
      {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((element, index) => (
        <li
          key={index}
          className={`cursor-pointer font-poppins text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            active === element
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
          } ${isNavOpen && 'mt-4'}`}
          onClick={() => setActive(element)}
        >
          <Link href={generateLink(index)}>{element}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnect = true;
  return hasConnect ? (
    <Button
      btnTitle="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setActive(null);
        router.push('/create-ntf');
      }}
    />
  ) : (
    <Button
      btnTitle="Connected"
      classStyles="mx-2 rounded-xl"
      onClick={() => setActive(null)}
    />
  );
};

const NavBar = () => {
  const { theme, setTheme } = useTheme('dark');
  const router = useRouter();
  const [active, setActive] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="p-4 flexBetween z-10 w-full border-b-2 dark:bg-nft-dark dark:border-nft-black-1 border-nft-gray-1 ">
      <div>
        <Link href="/" className="cursor-pointer ">
          <div className="flex flex-row cursor-pointer md:hidden">
            <Logo className="w-6 h-6 " alt="logo" />
            <p className="ml-2 font-mono font-medium dark:text-white text-nft-black-1">
              NFT-EXCHANGE
            </p>
          </div>
        </Link>
        <Link href="/" className="cursor-pointer ">
          <div className="hidden cursor-pointer md:flex">
            <Logo className="w-6 h-6 " alt="logo" />
          </div>
        </Link>
      </div>
      <div className="md:hidden flex">
        <MenuItems active={active} setActive={setActive} />
        <div className="ml-4">
          <ButtonGroup setActive={setActive} router={router} />
        </div>
      </div>
      <div className="hidden md:flex ml-2">
        {isNavOpen ? (
          <Image
            src={images.cross}
            onClick={() => setIsNavOpen(false)}
            width={25}
            height={25}
            alt="Close Nav"
            className={`cursor-pointer ${
              theme !== 'dark' ? 'filter invert' : null
            }`}
            objectFit="contain"
          />
        ) : (
          <Image
            src={images.menu}
            width={25}
            height={25}
            objectFit="contain"
            alt="menu"
            className={`cursor-pointer ${
              theme !== 'dark' ? 'filter invert' : null
            }`}
            onClick={() => setIsNavOpen(true)}
          />
        )}
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 top-10 dark:bg-nft-dark nav-h flex justify-between flex-col z-999">
          <div className="p-4 flex-1">
            <MenuItems
              isNavOpen={isNavOpen}
              active={active}
              setActive={setActive}
              isMobile
            />
          </div>
          <div className="p-4 border-5 dark:border-nft-black-1 border-nft-gray-1">
            <ButtonGroup router={router} setActive={setActive} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
