import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { codesec } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (item) => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleNavigation = (item) => {
    if (item.external) {
      window.open(item.url, '_blank', 'noopener noreferrer');
    } else if (item.url.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.url);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(item.url);
    }
    handleClick(item);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6/50 lg:bg-n-8/80 lg:backdrop-blur-md ${
        openNavigation ? "bg-n-8" : "bg-n-8/80 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center px-4 lg:px-7.5 xl:px-10 max-lg:py-4">
        <button 
          className="block w-[10rem] md:w-[12rem] xl:mr-8" 
          onClick={() => navigate('/')}
        >
          <img src={codesec} width={190} height={40} alt="CodeSec Community" className="w-full h-auto" />
        </button>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8/95 backdrop-blur-md lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`block relative font-code text-xl md:text-2xl lg:text-xs uppercase text-n-1 transition-all duration-300 hover:text-gradient hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-4 md:py-6 lg:py-6 lg:-mr-0.25 lg:font-semibold ${
                  (item.url === location.pathname) || 
                  (item.url.startsWith('#') && location.pathname === '/' && location.hash === item.url)
                    ? "z-2 lg:text-gradient lg:bg-gradient-to-r lg:from-purple-400 lg:to-cyan-400 lg:bg-clip-text lg:text-transparent"
                    : "lg:text-n-1/70"
                } lg:leading-5 lg:hover:text-n-1 xl:px-8`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <button
          onClick={() => window.open('https://github.com/codesec-community', '_blank', 'noopener noreferrer')}
          className="button hidden mr-4 lg:mr-8 text-n-1/50 transition-all duration-300 hover:text-gradient hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent lg:block text-xs font-code font-bold uppercase tracking-wider"
        >
          GitHub
        </button>
        
        <Button 
          className="hidden lg:flex bg-n-7 hover:bg-n-6 border border-n-6 hover:border-n-5" 
          onClick={() => navigate('/join')}
          size="md"
        >
          Join Community
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
          size="sm"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;