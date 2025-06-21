import { Routes, Route } from "react-router-dom";
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
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-gradient-to-br from-n-8 via-n-8 to-n-7">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinCommunity />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;