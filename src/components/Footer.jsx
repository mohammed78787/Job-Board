import { Link } from "react-router-dom"
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-indigo-700 text-white mt-auto pb-5">
  
        {/* Divider + Copyright */}
        <div className="border-t border-indigo-500 mt-8 pt-6 text-center text-indigo-300 text-sm ">
          <p >&copy; {currentYear} React Jobs. All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer
