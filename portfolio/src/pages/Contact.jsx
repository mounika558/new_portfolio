import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-12 py-16 mt-12  min-h-screen text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-white mt-4 text-base lg:text-xl leading-6">
          Have a question or want to work together? Feel free to reach out to me using the form below or through social media.
        </p>
      </div>

      <div className=" p-8  rounded-3xl  gap-12 max-w-xl flex mx-auto items-center justify-center text-center  border-solid bg-black">
       <div>
          <h3 className="text-xl  mb-4 lg:text-xl text-pink-900 font-extrabold tracking-wide">Contact Information</h3>
          <p className="text-white mb-6 text-base leading-6 ">
            I'm currently available for intership and full-time positions. If you have a project that needs some creative touch, I'd love to hear about it!
          </p>

          <div className="mb-4 text-base text-white">
            <h4 className="font-semibold">Email</h4>
            <p className="text-white">mounikakishor2004@gmail.com</p>
          </div>
          
          <div className="mb-4 text-base space-y-3 text-white">
            <h4 className="font-semibold">Location</h4>
            <p className="text-white">Coimbatore</p>
            <p className="text-white">Preferred location to work :  Coimbatore | Chennai | Bangalore</p>

          </div>

          <div className="mb-4 text-center flex items-center justify-center gap-4 text-base">
            <h4 className="font-semibold text-white">Social Media</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-white hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-400 hover:text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-900 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
