import { n8nSymbol, check } from "../assets";
import { collaborationTools, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses className="bg-gradient-to-b from-n-7 to-n-8">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Collaborative Development Ecosystem
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5 text-n-1">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button onClick={() => window.open('https://github.com/codesec-community', '_blank')}>
            Explore Projects
          </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6/50 rounded-full -translate-x-1/2 scale:75 md:scale-100 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm">
            <div className="flex w-60 aspect-square m-auto border border-n-6/50 rounded-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={n8nSymbol}
                    width={48}
                    height={48}
                    alt="CodeSec"
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collaborationTools.map((tool, index) => (
                <li
                  key={tool.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7/80 backdrop-blur-sm border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    } hover:bg-n-6/80 transition-colors duration-300`}
                  >
                    <img
                      className="m-auto opacity-80"
                      width={tool.width}
                      height={tool.height}
                      alt={tool.title}
                      src={tool.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;