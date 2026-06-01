import { useState } from "react"
import { FaMapMarker } from "react-icons/fa"
import { Link } from "react-router-dom"

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false)
  const description = expanded
    ? job.description
    : job.description.substring(0, 90) + "..."

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="h-25">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="bg-cyan-500 hover:bg-sky-600 text-white px-1 py-1 rounded-lg text-center text-sm"
        >
          {expanded ? "less" : "more"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline pr-1 text-lg" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobCard
