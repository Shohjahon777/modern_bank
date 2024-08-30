import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState('uz');

  const handleLanguageChange = () => {
    const newLanguage = language === 'uz' ? 'ru' : 'uz';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hookbank" className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {t(`nav_${nav.id}`)}
            </a>
          </li>
        ))}
        <li
          onClick={handleLanguageChange}
          className='font-poppins font-normal cursor-pointer text-[16px] text-white ml-10'
        >
          {language === 'uz' ? 'Uz' : 'Ru'}
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {t(`nav_${nav.id}`)}
                </a>
              </li>
            ))}
            {/* Language Toggle in Sidebar */}
            <li
              onClick={handleLanguageChange}
              className='font-poppins font-normal cursor-pointer text-[16px] text-white mt-4'
            >
              {language === 'uz' ? 'Uz' : 'Ru'}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
