import Heading from "./Heading";
import Section from "./Section";
import { roadmapItems } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading 
        tag="Our Vision" 
        title="Community Roadmap" 
        text="Our journey to build the world's largest open-source cybersecurity and AI research community"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmapItems.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20" : "bg-n-6/50"
              } hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-500`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full opacity-20">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full opacity-80"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;