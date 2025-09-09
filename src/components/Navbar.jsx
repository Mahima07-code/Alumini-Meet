import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-[#4B3621] text-pink-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Alumni Network</h1>

                {/* Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/alumni"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Directory
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/achievements"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/career"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-300"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar