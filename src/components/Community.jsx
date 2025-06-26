import { communityFeatures } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Community = () => {
  return (
    <Section id="community">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-5xl"
          title="Join the Global Cybersecurity & AI Community"
          text="Connect with security professionals, AI researchers, and open-source contributors from around the world. Collaborate on cutting-edge projects and shape the future of digital security."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {communityFeatures.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.title}
                </h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="opacity-80"
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Learn More
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[2rem]"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-n-6/50 rounded-2xl">
            <div className="text-left">
              <h4 className="h6 mb-2 text-color-1">Ready to contribute?</h4>
              <p className="body-2 text-n-3">Join our community and start making an impact today</p>
            </div>
            <button className="px-6 py-3 bg-n-7 hover:bg-n-6 border border-n-6 hover:border-n-5 text-white rounded-lg font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Community;