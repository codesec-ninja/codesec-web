import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10 bg-gray-800 text-white">
      <div className="container flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-10">
        
        {/* Company Information */}
        <div className="text-center sm:text-left animate-fade-in">
          <p className="text-xl font-bold animate-bounce">Codesec</p>
          <p className="mt-2 text-sm">Your tagline or brief description goes here.</p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Codesec. All rights reserved.
          </p>
        </div>
        
        {/* Quick Links */}
        <ul className="flex flex-col sm:flex-row gap-5 mt-4 sm:mt-0 animate-fade-in">
          <li>
            <Link to="./PrivacyPolicy" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">
              Terms of Service
            </Link>
          </li>
        </ul>
        
        {/* Contact Information */}
        <div className="text-center sm:text-left mt-4 sm:mt-0 animate-fade-in">
          <p className="font-semibold">Contact Us</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">
            Email: <a href="mailto:info@yourcompany.com" className="hover:underline">info@yourcompany.com</a>
          </p>
          <p className="text-sm">Address: 123 Business Rd, City, Country</p>
        </div>

        {/* Social Media Links */}
        <ul className="flex gap-5 mt-4 animate-fade-in">
          {socials.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-110"
                aria-label={item.title}
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            </li>
          ))}
        </ul>
        
        {/* Newsletter Signup (Optional) */}
        <div className="mt-4 text-center sm:text-left animate-fade-in">
          <p className="font-semibold">Subscribe to our newsletter</p>
          <form action="#" method="POST" className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
              required
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Footer;
