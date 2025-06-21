import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-gradient-to-t from-n-8 to-transparent">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. <span className="text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">CodeSec Community</span>. Open Source & Free Forever.
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/codesec-community/code-of-conduct" className="hover:underline me-4 md:me-6 hover:text-color-1 transition-colors" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
          </li>
          <li>
            <a href="https://github.com/codesec-community/contributing" className="hover:underline me-4 md:me-6 hover:text-color-1 transition-colors" target="_blank" rel="noopener noreferrer">Contributing</a>
          </li>
          <li>
            <a href="https://github.com/codesec-community" className="hover:underline me-4 md:me-6 hover:text-color-1 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-color-1"
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