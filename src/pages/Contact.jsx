import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    // Here you can later connect to an email service like EmailJS
    setSubmitted(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section className="bg-indigo-50 min-h-screen py-16">
      <div className="container m-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have a question or want to post a job? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-indigo-700 text-white p-8 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

              <div className="flex items-start gap-4 mb-6">
                <FaEnvelope className="text-indigo-300 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-indigo-200 text-sm">contact@reactjobs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <FaPhone className="text-indigo-300 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-indigo-200 text-sm">+1 (555) 555-5555</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarker className="text-indigo-300 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-indigo-200 text-sm">Remote — Worldwide</p>
                </div>
              </div>
            </div>

            <p className="text-indigo-300 text-sm mt-10">
              We typically respond within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4 mb-4 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submitForm}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Write your message here..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
