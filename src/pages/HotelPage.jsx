import React from 'react'
import { BiCalendar, BiMap, BiUser } from 'react-icons/bi'
import HotelDeals from '../components/HotelDeals'

export default function HotelPage() {
    return (
        <>
            <div className="w-full bg-[#f4f7f9] font-sans">

               
                <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
                    
                    <img
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
                        alt="Hotel Resort Pool"
                        className="w-full h-full object-cover"
                    />

                    
                    <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        <span className="w-2.5 h-2.5 bg-white rounded-full shadow-md"></span>
                        <span className="w-2.5 h-2.5 bg-white/50 rounded-full"></span>
                        <span className="w-2.5 h-2.5 bg-white/50 rounded-full"></span>
                    </div>

                    
                    <div className="absolute bottom-0 left-0 w-full bg-[#002b70]/95 py-8 px-4 border-t border-white/10">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-2 items-center">

                            {/* Destination Input */}
                            <div className="w-full md:flex-1 bg-white rounded-sm flex items-center px-4 py-3 h-12">
                                <BiMap className="text-blue-500 mr-2" size={20} />
                                <input
                                    type="text"
                                    placeholder="Your Destination"
                                    className="w-full outline-none text-gray-700 text-sm font-medium"
                                />
                            </div>

                            {/* Check-in Date */}
                            <div className="w-full md:w-44 bg-white rounded-sm flex items-center px-4 py-3 h-12">
                                <BiCalendar className="text-blue-500 mr-2" size={20} />
                                <input
                                    type="text"
                                    placeholder="03-26-2026"
                                    className="w-full outline-none text-gray-700 text-sm font-medium"
                                />
                            </div>

                            {/* Check-out Date */}
                            <div className="w-full md:w-44 bg-white rounded-sm flex items-center px-4 py-3 h-12">
                                <BiCalendar className="text-blue-500 mr-2" size={20} />
                                <input
                                    type="text"
                                    placeholder="03-31-2026"
                                    className="w-full outline-none text-gray-700 text-sm font-medium"
                                />
                            </div>

                            {/* Rooms/Guests Selector */}
                            <div className="w-full md:w-60 bg-white rounded-sm flex items-center px-4 py-3 h-12">
                                <BiUser className="text-blue-500 mr-2" size={20} />
                                <div className="text-sm text-gray-600 font-medium truncate">
                                    1 Room, 2 Adults, 0 Chi...
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className="w-full md:w-32 bg-[#0066ee] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-sm transition-all h-12 uppercase text-sm tracking-wider">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        <HotelDeals/>
        </>
    )
}




