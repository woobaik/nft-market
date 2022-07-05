import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/myLogo.svg';
import { Button } from '.';

const MenuItems = ({ isMobile, active, setActive }) => {
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
    <ul className="flex">
      {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((element, index) => (
        <ul
          key={index}
          className={`cursor-pointer font-poppins text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            active === element
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
          }`}
          onClick={() => console.log(element)}
        >
          <Link href={generateLink(index)}>{element}</Link>
        </ul>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(null);

  console.log({ theme });
  return (
    <nav className="p-4 flexBetween z-10 w-full border-b-2 dark:bg-nft-dark dark:border-nft-black-1 border-nft-gray-1">
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
      <div className="md:hidden">
        <MenuItems active={active} setActive={setActive} />
      </div>
      <Button />
    </nav>
  );
};

export default NavBar;
