import { FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Junior React Developer @ Veneer Solutions",
    avatar: "SM",
    avatarBg: "bg-indigo-500",
    quote:
      "I had been searching on generic job boards for months with no luck. Found my current role on React Jobs within two weeks. The listings are focused and the contact info is right there — no applying into a void.",
  },
  {
    name: "James Okafor",
    role: "Frontend Engineer @ Dolor Cloud",
    avatar: "JO",
    avatarBg: "bg-orange-500",
    quote:
      "As someone switching careers into React, I needed a place where even internships and junior roles were easy to find. React Jobs had exactly that. Landed my first frontend role three months after graduating.",
  },
  {
    name: "Lena Hoffmann",
    role: "Remote React Dev @ Port Solutions",
    avatar: "LH",
    avatarBg: "bg-pink-500",
    quote:
      "I specifically wanted remote React work. Filtering by Remote on React Jobs gave me exactly what I was looking for — no noise, no irrelevant office jobs. Got hired in 3 weeks.",
  },
]

function Testimonials() {
  return (
    <section className="bg-indigo-50 py-16 px-6">
      <div className="container m-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-3">
            Developers Who Found Their Role
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real stories from developers who used React Jobs to land their next opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-indigo-300 text-2xl" />

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed flex-1">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`${t.avatarBg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
