import { check } from "../assets";
import { membershipTiers } from "../constants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const MembershipList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {membershipTiers.map((tier) => (
        <div
          key={tier.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8/90 backdrop-blur-sm border border-n-6/50 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 hover:border-n-6 transition-all duration-300 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{tier.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {tier.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            <div className="text-[2rem] leading-none font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              FREE
            </div>
          </div>

          <Button
            className="w-full mb-6"
            onClick={() => navigate('/join')}
            white={tier.id === "1"}
          >
            Join Now
          </Button>

          <ul>
            {tier.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6/50"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4 text-n-3">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MembershipList;