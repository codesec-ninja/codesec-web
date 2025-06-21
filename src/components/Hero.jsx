import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons, communityStats } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Generating from "./Generating";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-7">
            Open Source {` `}
            <span className="inline-block relative">
              Cybersecurity{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            {` `} & AI Research Community
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join thousands of security professionals, AI researchers, and developers building the future of digital security through open collaboration, cutting-edge research, and innovative AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => navigate('/join')} white>
              Join Community
            </Button>
            <Button onClick={() => window.open('https://github.com/codesec-community', '_blank')}>
              View Projects
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="relative z-1 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-n-8/50 backdrop-blur-sm border border-n-6/50">
              <div className="text-2xl md:text-3xl font-bold text-color-1 mb-1">{stat.number}</div>
              <div className="text-sm text-n-3">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8/90 backdrop-blur-sm rounded-[1rem] border border-n-6/30">
              <div className="h-[1.4rem] bg-gradient-to-r from-n-10/80 to-n-10/60 rounded-t-[0.9rem] backdrop-blur-sm" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] opacity-80"
                  width={1024}
                  height={490}
                  alt="AI Security"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-n-8/80 via-transparent to-transparent" />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 bg-n-8/90 backdrop-blur-sm border border-n-6/50" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/60 backdrop-blur-md border border-n-1/20 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex bg-n-9/60 backdrop-blur-md border border-n-1/20"
                    title="AI Security Research"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full opacity-50"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;