import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 mt-16">
        <div className="w-full px-6 max-w-[1100px] mx-auto text-white grid lg:grid-cols-6 
        py-16 grid-cols-2 gap-8 lg:gap-0">
            <div>
                <h2 className="font-bold mb-2">Solutions</h2>
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer hover:text-gray-400">Travel</li>
                    <li className="cursor-pointer hover:text-gray-400">Booking</li>
                    <li className="cursor-pointer hover:text-gray-400">Flights</li>
                    <li className="cursor-pointer hover:text-gray-400">Cruises</li>
                    <li className="cursor-pointer hover:text-gray-400">Ground</li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold mb-2">Company</h2>
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer hover:text-gray-400">Pricing</li>
                    <li className="cursor-pointer hover:text-gray-400">Documentation</li>
                    <li className="cursor-pointer hover:text-gray-400">Tours</li>
                    <li className="cursor-pointer hover:text-gray-400">Places</li>
                    <li className="cursor-pointer hover:text-gray-400">Refunds</li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold mb-2">Suport</h2>
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer hover:text-gray-400">About</li>
                    <li className="cursor-pointer hover:text-gray-400">Blog</li>
                    <li className="cursor-pointer hover:text-gray-400">Jobs</li>
                    <li className="cursor-pointer hover:text-gray-400">Press</li>
                    <li className="cursor-pointer hover:text-gray-400">Partnes</li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold mb-2">Legal</h2>
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer hover:text-gray-400">Claims</li>
                    <li className="cursor-pointer hover:text-gray-400">Privacy</li>
                    <li className="cursor-pointer hover:text-gray-400">Terms</li>
                    <li className="cursor-pointer hover:text-gray-400">Policies</li>
                    <li className="cursor-pointer hover:text-gray-400">Conditions</li>
                </ul>
            </div>
            <div className="col-span-2 flex flex-col gap-3">
                <h2 className="font-bold">SUBSCRIBE TO OUR NEWSLETTERS</h2>
                <p>The Latest deals, articles and resources sent to your inbox.</p>
                <form className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter email." 
                        className="p-2 rounded-lg outline-none focus:border-blue-600 border-4
                        text-black w-full"
                    />
                    <button className="py-2 px-4 border-2 rounded-lg hover:bg-blue-600 w-full
                    duration-200">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div className="w-full max-w-[1100px] mx-auto px-6 py-8 flex justify-between text-white
        border-t-4 flex-col sm:flex-row border-black/30">
            <div className="text-center">
                <p className="text-gray-400">
                    &copy; 2024  Experiences, All rights reserved
                </p>
            </div>
            <div className="flex justify-between w-full max-w-[400px] mx-auto text-gray-400
            items-center">
                <FaFacebook 
                    className="cursor-pointer hover:opacity-[0.5] hover:scale-[1.1] duration-300" 
                    size={25}
                />
                <FaInstagram 
                    className="cursor-pointer hover:opacity-[0.5] hover:scale-[1.1] duration-300" 
                    size={25}
                />
                <FaTwitter 
                    className="cursor-pointer hover:opacity-[0.5] hover:scale-[1.1] duration-300" 
                    size={25}
                />
                <FaPinterest 
                    className="cursor-pointer hover:opacity-[0.5] hover:scale-[1.1] duration-300" 
                    size={25}
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer;