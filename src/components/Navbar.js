import React from "react";

const Navbar = () => {
    return (
        
        <nav class="">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="#" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-red-400 mx-1.5 sm:mx-6">Work</a>

                <a href="#About" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-400 mx-1.5 sm:mx-6">About</a>
            </div>
        </nav>
    );
}
export default Navbar;
