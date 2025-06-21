import { featuredProjects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "AI Security", "Threat Intelligence", "Deep Learning", "Cryptography"];
  
  const filteredProjects = activeFilter === "All" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  return (
    <Section id="projects" className="bg-gradient-to-b from-n-8 to-n-7">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-4xl"
          title="Featured Open Source Projects"
          text="Explore our cutting-edge cybersecurity and AI projects. Contribute to the future of digital security through collaborative development."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-code text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                  : "bg-n-8/50 backdrop-blur-sm border border-n-6/50 text-n-3 hover:text-n-1 hover:border-n-6"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-0.5 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
            >
              <div className="relative bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[1.5rem] p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                    }`} />
                    <span className="text-xs font-code text-n-4 uppercase">{project.status}</span>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-xs font-semibold text-color-1 rounded-full border border-purple-500/30">
                    {project.category}
                  </span>
                </div>

                <h4 className="h5 mb-3 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </h4>
                
                <p className="body-2 text-n-3 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-n-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {project.contributors}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-n-7 rounded text-xs font-code">
                    {project.language}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    View Project
                  </button>
                  <button className="py-2 px-4 bg-n-7 hover:bg-n-6 text-n-1 text-sm font-semibold rounded-lg transition-colors duration-300">
                    Star
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;