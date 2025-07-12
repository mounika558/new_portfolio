import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-12 py-16 mt-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-gray-600 mt-4 text-xs leading-6">
          Have a question or want to work together? Feel free to reach out to me using the form below or through social media.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-6 text-xs leading-6">
            I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, I'd love to hear about it!
          </p>

          <div className="mb-4 text-xs">
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-700">mounika2004@gmail.com</p>
          </div>

          <div className="mb-4 text-xs">
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-700">Coimbatore</p>
          </div>

          <div className="mb-4  text-xs">
            <h4 className="font-semibold">Social Media</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-800 hover:text-black" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-900 hover:text-sky-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="space-y-6  text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium ">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white  px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
