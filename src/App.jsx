import { Routes, Route } from "react-router-dom";
import { MDXProvider } from '@mdx-js/react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Community from "./components/Community";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Roadmap from "./components/Roadmap";
import Resources from "./components/Resources";
import Projects from "./components/Projects";
import Research from "./components/Research";
import JoinCommunity from "./components/JoinCommunity";

// Import MDX pages
import CommunityPage from "./pages/CommunityPage.mdx";
import ProjectsPage from "./pages/ProjectsPage.mdx";
import ResearchPage from "./pages/ResearchPage.mdx";
import ResourcesPage from "./pages/ResourcesPage.mdx";
import BlogPage from "./pages/BlogPage.mdx";

// MDX components for styling
const mdxComponents = {
  h1: (props) => <h1 className="h1 mb-6 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" {...props} />,
  h2: (props) => <h2 className="h2 mb-4 text-n-1" {...props} />,
  h3: (props) => <h3 className="h3 mb-3 text-n-1" {...props} />,
  h4: (props) => <h4 className="h4 mb-2 text-n-1" {...props} />,
  h5: (props) => <h5 className="h5 mb-2 text-n-1" {...props} />,
  h6: (props) => <h6 className="h6 mb-2 text-n-1" {...props} />,
  p: (props) => <p className="body-2 mb-4 text-n-3 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-4 text-n-3 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4 text-n-3 space-y-2" {...props} />,
  li: (props) => <li className="body-2 text-n-3" {...props} />,
  a: (props) => <a className="text-color-1 hover:text-n-1 transition-colors underline" {...props} />,
  code: (props) => <code className="px-2 py-1 bg-n-7 text-color-1 rounded text-sm font-code" {...props} />,
  pre: (props) => <pre className="p-4 bg-n-7 rounded-lg overflow-x-auto mb-4 border border-n-6" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-color-1 pl-4 italic text-n-3 mb-4" {...props} />,
  hr: (props) => <hr className="border-n-6 my-8" {...props} />,
  table: (props) => <table className="w-full border-collapse border border-n-6 mb-4" {...props} />,
  th: (props) => <th className="border border-n-6 px-4 py-2 bg-n-7 text-n-1 font-semibold" {...props} />,
  td: (props) => <td className="border border-n-6 px-4 py-2 text-n-3" {...props} />,
};

const HomePage = () => (
  <>
    <Hero />
    <Community />
    <Projects />
    <Research />
    <Collaboration />
    <Resources />
    <Membership />
    <Roadmap />
  </>
);

const App = () => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-gradient-to-br from-n-8 via-n-8 to-n-7">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/join" element={<JoinCommunity />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </MDXProvider>
  );
};

export default App;