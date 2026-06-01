import { FaSearch, FaClipboardList, FaPaperPlane } from "react-icons/fa"

const steps = [
  {
    icon: <FaSearch className="text-white text-2xl" />,
    bg: "bg-indigo-500",
    step: "01",
    title: "Browse Listings",
    desc: "Explore React job listings filtered by type — Full-Time, Part-Time, Remote, or Internship. No account needed.",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    bg: "bg-orange-500",
    step: "02",
    title: "Read the Details",
    desc: "Click any listing to see the full job description, salary range, location, and company information.",
  },
  {
    icon: <FaPaperPlane className="text-white text-2xl" />,
    bg: "bg-pink-500",
    step: "03",
    title: "Apply Directly",
    desc: "Contact the employer directly using the email or phone number listed. No middleman, no delays.",
  },
]

function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-indigo-50">
      <div className="container m-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-3">How It Works</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Finding your next React role takes three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-indigo-200 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className={`${step.bg} w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4`}>
                {step.icon}
              </div>
              {/* Step number */}
              <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">
                Step {step.step}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
