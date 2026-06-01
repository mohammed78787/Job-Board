import { FaReact, FaSearch, FaBriefcase, FaUsers, FaRocket, FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const features = [
  {
    icon: <FaSearch className="text-indigo-500 text-3xl" />,
    title: "Find React Jobs",
    desc: "Browse a curated list of React developer positions — from internships to senior roles, remote to on-site.",
  },
  {
    icon: <FaBriefcase className="text-orange-500 text-3xl" />,
    title: "Post Opportunities",
    desc: "Employers can list open positions in minutes. Reach React developers who are actively looking for their next role.",
  },
  {
    icon: <FaUsers className="text-pink-500 text-3xl" />,
    title: "Built for the Community",
    desc: "React Jobs is built specifically for the React ecosystem — no noise, no irrelevant listings, just React.",
  },
  {
    icon: <FaRocket className="text-cyan-500 text-3xl" />,
    title: "Fast & Simple",
    desc: "No sign-up required to browse. Clean, distraction-free interface so you can focus on what matters — finding the right job.",
  },
]

const whyItems = [
  "Focused exclusively on React roles",
  "Browse without creating an account",
  "Post a job listing in under a minute",
  "Clean UI with no ads or distractions",
  "Filter by job type — Full-Time, Part-Time, Remote, Internship",
  "Direct contact info on every listing",
]

function About() {
  return (
    <div className="bg-indigo-50 min-h-screen">

      {/* Hero */}
      <section className="bg-indigo-700 text-white py-20 px-6">
        <div className="container m-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-500 p-4 rounded-full">
              <FaReact
                className="text-white text-5xl"
                style={{ animation: "spin 8s linear infinite" }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The Job Board for <br />
            <span className="text-indigo-300">React Developers</span>
          </h1>
          <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            React Jobs connects talented React developers with companies that are actively hiring.
            Whether you're looking for your first role or your next big opportunity — you're in the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/jobs"
              className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              to="/AddJob"
              className="bg-indigo-500 border border-indigo-400 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-600 transition-colors"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="container m-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The React job market is huge — but finding the right role buried inside a generic job board
            is frustrating. React Jobs exists to cut through the noise. Every single listing on this platform
            is React-focused, so developers can spend less time filtering and more time applying.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="container m-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">
            What React Jobs Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why React Jobs */}
      <section className="py-16 px-6">
        <div className="container m-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                Why React Jobs?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Generic job boards show you thousands of irrelevant listings.
                React Jobs is laser-focused — every listing is a React opportunity,
                so every search result is relevant to you.
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Start Browsing
              </Link>
            </div>
            <ul className="space-y-4">
              {whyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-500 text-xl shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container m-auto max-w-3xl">
          <div className="bg-indigo-700 text-white rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Role?</h2>
            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              Hundreds of React developers have found their next opportunity here.
              Browse open positions now or post a job to find your next hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link
                to="/AddJob"
                className="bg-indigo-500 border border-indigo-400 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-600 transition-colors"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
