import {
    Link
} from "react-router-dom";

import img from '/headshot.jpg'

function Mainpage() {
    return (
        <div className="flex border border-black h-screen bg-gradient-to-r from-gray-900 to-gray-800 transition">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            {/* <img src={img} className="mx-auto mt-2 rounded-md h-64 w-60" alt="img" /> */}
            <h1 className="mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl italic dark:text-white">Websites done right.</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Hi, I'm Rosalva Hazel Martinez, I'm a full stack web developer using technology and innovation to unlock long-term value and smooth sailing deliverables.</p>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">I enjoy building anything from small buisness sites to rich interactive web applications.</p>
            <img src={img} className="mx-auto mt-2 rounded-md h-64 w-60 mb-8" alt="img" />
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">If you are a buisness seeking a web precense or an employer looking to hire, you can get in touch with me here.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to="/email" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                    I need a website
                </Link>
                <Link to="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    I'm looking to hire
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Mainpage;