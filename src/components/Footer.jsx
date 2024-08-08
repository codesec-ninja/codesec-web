import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. <a href="https://codesec.me" className="hover:underline">CodeSec™</a>. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          
          <li>
            <a href="https://policy.codesec.me" className="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </li>
          <li>
            <a href="https://terms.codesec.me" className="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          </li>
        </ul>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
