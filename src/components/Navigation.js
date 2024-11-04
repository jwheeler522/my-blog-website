<<<<<<< HEAD
import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
              Your Blog
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

=======
import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
              Your Blog
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
