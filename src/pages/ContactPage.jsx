import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useGSAP(() => {
    gsap.fromTo(
      ".heading-text",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".contact-info p",
      {
        opacity: 0,
        x: -30
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5
      }
    );

    gsap.fromTo(
      ".contact-form",
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.8
      }
    );

    gsap.fromTo(
      ".form-element",
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1
      }
    );

    gsap.fromTo(
      ".footer-text",
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 1.5
      }
    );
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bd011e86-c946-4175-bfab-39f3d97a0d1b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      navigate('/');
    }
  };

  return (
    <div className="col-span-1 lg:col-span-12 row-span-9 bg-black text-white rounded-lg overflow-hidden">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex justify-center items-start flex-col p-8">
            <h1 className="text-7xl uppercase font-bold heading-text">
              let's <span className="font-[Sperry]">connect</span>
            </h1>
            <div className="contact-info">
              <p className="text-sm lg:text-xl font-light">
                Say hello at{" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akhtartanweel@gmail.com" className="underline">
                  akhtartanweel@gmail.com
                </a>
              </p>
              <p className="text-sm lg:text-xl font-light">
                For more info, here's my{" "}
                <a href="/tanweel resume.pdf" download={"Tanweel_Resume.pdf"} className="underline">
                  resume
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <form
              onSubmit={onSubmit}
              className="contact-form w-full lg:w-[60%] p-8 rounded-xl backdrop-blur lg bg-gradient-to-br from-black/40 to-black/20 lg:border lg:border-white/10 shadow-lg"
            >
              <h2 className="text-5xl font-bold mb-6 text-center font-[Sperry] tracking-wide uppercase form-element">
                Contact me
              </h2>
              <div className="space-y-4">
                <div className="form-element">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-element">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-element">
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Subject..."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="form-element">
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-element w-full py-2 px-4 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4">
          <span className="text-sm capitalize footer-text">
            © 2024 MyPortfolio. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
