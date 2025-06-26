import { researchAreas } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Research = () => {
  return (
    <Section id="research">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-4xl"
          title="Cutting-Edge Security Research"
          text="Explore our research initiatives in AI-powered cybersecurity, quantum cryptography, and next-generation threat detection systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              className="group relative p-0.5 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-500"
            >
              <div className="relative bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[1.5rem] p-8 h-full overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-20`}>
                      <img
                        src={area.icon}
                        width={32}
                        height={32}
                        alt={area.title}
                        className="opacity-80"
                      />
                    </div>
                    <div>
                      <h4 className="h5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {area.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-n-4 mt-1">
                        <span>{area.papers} Papers</span>
                        <span>•</span>
                        <span>{area.contributors} Contributors</span>
                      </div>
                    </div>
                  </div>

                  <p className="body-2 text-n-3 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 px-4 bg-n-7 hover:bg-n-6 border border-n-6 hover:border-n-5 text-color-1 text-sm font-semibold rounded-lg transition-all duration-300">
                      View Research
                    </button>
                    <button className="py-3 px-4 bg-n-7 hover:bg-n-6 text-n-1 text-sm font-semibold rounded-lg transition-colors duration-300">
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm border border-n-6/30 rounded-2xl">
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-n-3 font-semibold">Published Papers</div>
            <div className="text-sm text-n-4 mt-1">Peer-reviewed research</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-cyan-900/20 to-transparent backdrop-blur-sm border border-n-6/30 rounded-2xl">
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-n-3 font-semibold">Active Researchers</div>
            <div className="text-sm text-n-4 mt-1">Global contributors</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-n-6/30 rounded-2xl">
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-n-3 font-semibold">Research Areas</div>
            <div className="text-sm text-n-4 mt-1">Cutting-edge topics</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-n-6/50 rounded-2xl">
            <h4 className="h4 mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Research Community
            </h4>
            <p className="body-2 text-n-3 mb-6 max-w-md">
              Collaborate with leading researchers and contribute to groundbreaking cybersecurity and AI research.
            </p>
            <button className="px-8 py-4 bg-n-7 hover:bg-n-6 border border-n-6 hover:border-n-5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg">
              Start Contributing
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Research;