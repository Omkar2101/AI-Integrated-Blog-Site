import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-900 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -m-6">
          {/* Company Info */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" className="animate-fadeIn" />
              </div>
              <p className="text-sm mb-6 leading-relaxed text-gray-300">
                Providing exceptional healthcare solutions by connecting patients with experienced doctors and hospitals. Your health, our commitment.
              </p>
              <p className="text-sm">&copy; Copyright 2024. All Rights Reserved by Slack.</p>
            </div>
          </div>

          {/* Links - Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-400">
              Company
            </h3>
            <ul>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  Careers
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  Press
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-300" to="/">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-400">
              Support
            </h3>
            <ul>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  FAQs
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  Help Center
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-base hover:text-gray-300" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-300" to="/">
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-400">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with the latest healthcare news, tips, and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="w-full mt-6 flex justify-center lg:justify-start lg:w-full">
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f text-lg"></i>
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <i className="fab fa-twitter text-lg"></i>
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <i className="fab fa-linkedin-in text-lg"></i>
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <i className="fab fa-instagram text-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
