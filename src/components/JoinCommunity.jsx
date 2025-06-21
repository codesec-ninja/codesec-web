import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    interests: [],
    experience: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterestChange = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        github: "",
        interests: [],
        experience: "",
        motivation: "",
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const interestOptions = [
    "Cybersecurity Research",
    "AI/ML Security",
    "Threat Intelligence",
    "Penetration Testing",
    "Cryptography",
    "Open Source Development",
    "Security Automation",
    "Incident Response",
  ];

  const experienceLevels = [
    "Student/Beginner",
    "Junior Professional (1-3 years)",
    "Mid-level Professional (3-7 years)",
    "Senior Professional (7+ years)",
    "Researcher/Academic",
  ];

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" id="join">
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Join the CodeSec Community"
          text="Become part of the world's largest open-source cybersecurity and AI research community. Connect, collaborate, and contribute to the future of digital security."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
            <div className="relative bg-n-8/90 backdrop-blur-sm border border-n-6/30 rounded-[1rem] p-8 lg:p-12">
              {submitStatus === "success" && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎉</div>
                    <h4 className="text-green-400 font-semibold mb-2">Welcome to CodeSec!</h4>
                    <p className="text-green-300 text-sm">
                      Your application has been submitted. Check your email for next steps and community access links.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="h5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-n-1 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-7/70 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-n-1 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-7/70 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="github" className="block text-sm font-medium text-n-1 mb-2">
                      GitHub Username
                    </label>
                    <input
                      type="text"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-7/70 transition-all duration-300"
                      placeholder="Your GitHub username (optional)"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <h3 className="h5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Areas of Interest
                  </h3>
                  <p className="text-sm text-n-4">Select all that apply:</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                          formData.interests.includes(interest)
                            ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/50 text-color-1"
                            : "bg-n-7/30 border-n-6/50 text-n-3 hover:border-n-6 hover:bg-n-7/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div className="space-y-4">
                  <h3 className="h5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Experience Level
                  </h3>
                  
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-lg text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-7/70 transition-all duration-300"
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level} className="bg-n-8">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Motivation */}
                <div className="space-y-4">
                  <h3 className="h5 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Why do you want to join?
                  </h3>
                  
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-7/70 transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your goals, what you hope to contribute, and what you'd like to learn from the community..."
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? "Submitting..." : "Join Community"}
                  </Button>
                </div>
              </form>

              {/* Community Benefits */}
              <div className="mt-12 pt-8 border-t border-n-6/50">
                <h4 className="h6 mb-6 text-center text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  What you'll get as a member:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm border border-n-6/30 rounded-xl">
                    <div className="text-2xl mb-2">🚀</div>
                    <h5 className="font-semibold text-color-1 mb-2">Project Access</h5>
                    <p className="text-sm text-n-3">Contribute to cutting-edge open-source security projects</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-cyan-900/20 to-transparent backdrop-blur-sm border border-n-6/30 rounded-xl">
                    <div className="text-2xl mb-2">🧠</div>
                    <h5 className="font-semibold text-color-2 mb-2">Research Opportunities</h5>
                    <p className="text-sm text-n-3">Collaborate on groundbreaking cybersecurity research</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-n-6/30 rounded-xl">
                    <div className="text-2xl mb-2">🌐</div>
                    <h5 className="font-semibold text-color-3 mb-2">Global Network</h5>
                    <p className="text-sm text-n-3">Connect with security professionals worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default JoinCommunity;