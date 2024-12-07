import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="col-span-1 lg:col-span-12 row-span-9 bg-black text-white rounded-lg overflow-hidden">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex justify-center items-start flex-col p-8">
          <h1 className="text-7xl uppercase font-bold">let's <span className="font-[Sperry]">connect</span></h1>
          <p className="text-sm lg:text-xl font-light">Say hello at <a href="" className="underline">akhtartanweel@gmail.com</a></p>
          <p className="text-sm lg:text-xl font-light">For more info, here's my <a href="" className="underline">resume</a></p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <form className="w-full lg:w-[60%] p-8 rounded-xl backdrop-blur lg bg-gradient-to-br from-black/40 to-black/20 lg:border lg:border-white/10 shadow-lg">
              <h2 className="text-5xl font-bold mb-6 text-center font-[Sperry] tracking-wide uppercase">
                Contact me
              </h2> 

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Subject..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="2"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4">
          <span className="text-sm capitalize">
            © 2024 MyPortfolio. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
