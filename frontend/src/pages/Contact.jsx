import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import about from '../assets/about.jpg'

function Contact() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="w-full bg-white text-black dark:bg-gray-900 dark:text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              Contact Me
            </p>

            <h1 className="text-5xl font-bold mt-4 text-gray-900">
              Let's Connect!
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Have a question, suggestion, or just want to say hello?
              Feel free to reach out anytime.
            </p>

            <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get In Touch
            </button>
          </div>

          <div>
            <img
              src={about}
              alt=""
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-8 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-6">
              I'd Love To Hear From You
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-3 rounded-lg w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-3 rounded-lg w-full"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border p-3 rounded-lg w-full"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="border p-3 rounded-lg w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">

            <div className="bg-white p-5 rounded-xl shadow-md flex gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">hello@blogify.com</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md flex gap-4">
              <Phone className="text-green-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md flex gap-4">
              <MapPin className="text-orange-500" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Dehradun, India</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md flex gap-4">
              <Clock className="text-purple-600" />
              <div>
                <h3 className="font-semibold">Response Time</h3>
                <p className="text-gray-600">Within 24 Hours</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-white text-black dark:bg-gray-900 dark:text-white text-center">
        <h2 className="text-4xl font-bold">
          Follow & Stay Updated
        </h2>

        <p className="text-gray-600 mt-4">
          Join me on social media for the latest stories and updates.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <button className="w-12 h-12 rounded-full border">B</button>
          <button className="w-12 h-12 rounded-full border">L</button>
          <button className="w-12 h-12 rounded-full border">O</button>
          <button className="w-12 h-12 rounded-full border">G</button>
        </div>
      </section>

    </div>
  );
}

export default Contact;