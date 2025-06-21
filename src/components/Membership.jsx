import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import MembershipList from "./MembershipList";
import { LeftLine, RightLine } from "./design/Pricing";

const Membership = () => {
  return (
    <Section className="overflow-hidden bg-gradient-to-b from-n-8 to-n-7" id="membership">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1 opacity-60"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full opacity-40"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Join the Community"
          title="Open Source Membership"
          text="Choose your level of involvement in our open-source cybersecurity and AI research community. All tiers are completely free and open to everyone."
        />

        <div className="relative">
          <MembershipList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="text-xs font-code font-bold tracking-wider uppercase border-b border-color-1 text-color-1 hover:text-n-1 hover:border-n-1 transition-colors duration-300"
            onClick={() => window.open('https://github.com/codesec-community', '_blank')}
          >
            View Community Guidelines
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Membership;