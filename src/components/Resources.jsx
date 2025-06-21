import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";

const Resources = () => {
  const resourceCategories = [
    "Documentation & Guides",
    "Research Papers",
    "Code Examples",
    "Video Tutorials",
    "Community Discussions",
  ];

  const learningPaths = [
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn the basics of cybersecurity, threat modeling, and security best practices.",
      level: "Beginner",
      duration: "4 weeks",
      modules: 12,
    },
    {
      title: "AI Security Research",
      description: "Advanced topics in AI security, adversarial attacks, and defense mechanisms.",
      level: "Advanced",
      duration: "8 weeks",
      modules: 24,
    },
    {
      title: "Open Source Contribution",
      description: "How to contribute to open-source security projects and research initiatives.",
      level: "Intermediate",
      duration: "2 weeks",
      modules: 8,
    },
  ];

  return (
    <Section id="resources" className="bg-gradient-to-b from-n-7 to-n-8">
      <div className="container">
        <Heading
          title="Learning Resources"
          text="Access comprehensive learning materials, research papers, and community-driven content to advance your cybersecurity and AI knowledge."
        />

        <div className="relative">
          {/* Featured Resource */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-60"
                width={800}
                alt="Learning Resources"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Knowledge Hub
              </h4>
              <p className="body-3 mb-[3rem] text-n-3">
                Access our comprehensive collection of cybersecurity and AI resources, including research papers, tutorials, code examples, and community discussions.
              </p>
              <ul className="body-2">
                {resourceCategories.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6/50"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-n-3">{category}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Paths */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-3 mb-10">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="relative p-0.5 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
              >
                <div className="relative bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[1.5rem] p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      path.level === "Beginner" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                      path.level === "Intermediate" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                      "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}>
                      {path.level}
                    </span>
                    <div className="text-sm text-n-4">
                      {path.modules} modules
                    </div>
                  </div>

                  <h4 className="h5 mb-3 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {path.title}
                  </h4>
                  
                  <p className="body-2 text-n-3 mb-4">
                    {path.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-n-4 mb-6">
                    <span>Duration: {path.duration}</span>
                  </div>

                  <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-color-1 text-sm font-semibold rounded-lg hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative min-h-[25rem] border border-n-1/10 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover opacity-60"
                  width={630}
                  height={750}
                  alt="Research Papers"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Research Papers
                </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Access peer-reviewed research papers on cybersecurity, AI security, and emerging threats. Contribute to ongoing research initiatives.
                </p>
                <button className="self-start px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Browse Papers
                </button>
              </div>
            </div>

            <div className="p-4 bg-n-7/50 backdrop-blur-sm border border-n-6/30 rounded-3xl overflow-hidden lg:min-h-[25rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Community Tools
                </h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Access development tools, testing frameworks, and collaborative platforms used by our community for cybersecurity and AI research.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-n-8/50 rounded-xl border border-n-6/30">
                    <h6 className="font-semibold text-color-1 mb-2">Security Tools</h6>
                    <p className="text-sm text-n-4">Penetration testing, vulnerability scanning</p>
                  </div>
                  <div className="p-4 bg-n-8/50 rounded-xl border border-n-6/30">
                    <h6 className="font-semibold text-color-2 mb-2">AI Frameworks</h6>
                    <p className="text-sm text-n-4">TensorFlow, PyTorch, scikit-learn</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[15rem] bg-n-8/50 rounded-xl overflow-hidden">
                <img
                  src={service3}
                  className="w-full h-full object-cover opacity-60"
                  width={520}
                  height={400}
                  alt="Community Tools"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resources;