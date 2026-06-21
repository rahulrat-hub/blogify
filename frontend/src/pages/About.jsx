import React from "react";
import about from '../assets/about.jpg'

function About() {
  return (
    <div className="min-h-screen  bg-white text-black dark:bg-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 uppercase font-semibold tracking-wider">
              About Us
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-4">
              Welcome to Blogify
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Blogify is a platform where ideas become stories. We believe
              everyone has something valuable to share, whether it's personal
              experiences, knowledge, or creative thoughts.
            </p>

            <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Explore Blogs
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt=""
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={about}
            alt=""
            className="rounded-3xl shadow-lg"
          />

          <div>
            <p className="text-blue-600 uppercase font-semibold">
              Our Journey
            </p>

            <h2 className="text-4xl font-bold mt-4">
              How Blogify Started
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Blogify was created with a simple mission: to make blogging easy,
              accessible, and enjoyable for everyone. Whether you're a beginner
              or an experienced writer, Blogify provides a space to express
              yourself and connect with readers worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="mt-2 text-gray-600">Blogs Published</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="mt-2 text-gray-600">Readers</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">200+</h3>
            <p className="mt-2 text-gray-600">Writers</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="mt-2 text-gray-600">Categories</p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Blogify?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              ✍ Easy Writing
            </h3>
            <p className="text-gray-600">
              Create and publish blogs with a clean and intuitive editor.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              🌎 Global Reach
            </h3>
            <p className="text-gray-600">
              Share your thoughts with readers from around the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              🚀 Fast & Secure
            </h3>
            <p className="text-gray-600">
              Enjoy a seamless blogging experience with modern technology.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;