import { FaBriefcase, FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa"

const stats = [
  { icon: <FaBriefcase className="text-indigo-500 text-3xl" />, value: "120+", label: "Jobs Posted" },
  { icon: <FaBuilding className="text-orange-500 text-3xl" />, value: "40+", label: "Companies Hiring" },
  { icon: <FaUsers className="text-pink-500 text-3xl" />, value: "800+", label: "Developers Registered" },
  { icon: <FaCheckCircle className="text-cyan-500 text-3xl" />, value: "60+", label: "Positions Filled" },
]

function StatsBar() {
  return (
    <section className="bg-white py-12 px-6 shadow-sm">
      <div className="container m-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {stat.icon}
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
