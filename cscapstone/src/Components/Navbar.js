import React from "react";

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md">
            <div className="container mx-auto py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    <a href="/">We Find It</a>
                </div>
                <ul className="flex space-x-10 list-none">
                    <li>
                        <a href="/newoffer" className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-200">
                            NEW OFFER!
                        </a>
                    </li>
                    <li>
                        <a href="/request" className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-200">
                            REQUEST
                        </a>
                    </li>
                    <li>
                        <a href="/offer" className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-200">
                            OFFER
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;