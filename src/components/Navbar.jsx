import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const links = [
  { to: '/', label: 'Home' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/AddJob', label: 'Add Job' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const activeClass = ({ isActive }) =>
    `text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 transition-colors duration-200
    ${isActive ? 'bg-black' : ''}`

  const mobileActiveClass = ({ isActive }) =>
    `block text-white hover:bg-indigo-800 rounded-md px-4 py-3 transition-colors duration-200 text-base font-medium
    ${isActive ? 'bg-black' : ''}`

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="text-white text-2xl font-bold hidden sm:block">
              React Jobs
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={activeClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-indigo-800 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 border-t border-indigo-500 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
