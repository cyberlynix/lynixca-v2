import {useState} from "react";
import Link from "next/link";
import CyberImage from "@/components/CyberImage";

export default function Navbar() {

    const [collapsed, setCollapsed] = useState(false);
    const [authDropdown, setAuthDropdown] = useState(false);

    return (
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-dark md:h-20 min-h-20 items-center">
            <div className="flex flex-col max-w-screen-xl h-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-semibold font-cyber tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                    >
                        Lynix<span className="text-green-600">.ca</span>
                    </Link>
                    <button onClick={() => setCollapsed(!collapsed)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" aria-label="Toggle Nav">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {!collapsed  && <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />}
                            {collapsed  && <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />}
                        </svg>
                    </button>
                </div>
                <nav className={`${collapsed ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row h-full`}>
                    <Link className="nav-link" href="/blog">
                        Blog
                    </Link>
                    <Link className="nav-link" href="/fursona">
                        My Fursona
                    </Link>
                    <Link className="nav-link" href="/about">
                        About
                    </Link>
                    <Link className="nav-link" href="/contact">
                        Contact
                    </Link>
                    {/* Check if the user is authenticated */}
                    <div className="relative hidden">
                        <button onClick={() => setAuthDropdown(!authDropdown)} className="auth-btn h-full flex items-center">
                            <CyberImage
                                src="/logo.png"
                                alt="Lynix"
                                containerClassName="h-6 w-6 mr-2"
                                imageClassName="rounded-full"
                            />
                            <span>
                {"{"}
                                {"{"} $username {"}"}
                                {"}"}
              </span>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-4 h-4 transition-transform duration-200 transform ml-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {authDropdown &&
                            <div className="absolute right-0 w-full mt-0 origin-top-right shadow-lg md:w-48 z-30">
                                <div className="bg-white shadow dark:bg-dark">
                                    <Link className="dropdown-link" href="#">
                                        Account Settings
                                    </Link>
                                    <Link className="dropdown-link" href="#">
                                        API Keys
                                    </Link>
                                    <Link className="dropdown-link" href="#">
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
}
