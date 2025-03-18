import React from 'react'
import { Link } from 'react-router-dom'

const navItems = [
    { name: 'Company', path: '/company' },
    { name: 'Feature', path: '/feature' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Log In', path: '/login' },
]

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center px-10 py-4">
      {/* Logo */}
      <div className="text-[45px] font-bold font-montserrat">
        Fine <span className="text-[#293FCC]">Fin</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-[40px] text-lg text-gray-900 text-center items-center font-poppins">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="hover:text-blue-600 transition text-[18px] text-[#090F4E] font-regular">
              {item.name}
            </Link>
          </li>
        ))}

        {/* Try Free Button */}
        <button className="bg-[#293FCC] text-white px-[48px] py-[12px] rounded-lg text-[18px] font-medium hover:bg-blue-700 transition font-poppins">
            Try Free
        </button>
      </ul>
      
    </nav>
  )
}

export default Navbar