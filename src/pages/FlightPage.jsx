import React, { useState } from "react";
import { BiPlanet, BiHotel, BiCar, BiTrip, BiSearch, BiCalendar, BiUser } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { RiShipLine } from "react-icons/ri";
import TravelerModal from "../components/TravelModal";

const FlightPage = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round");
  
    const [from, setFrom] = useState("DEL");
    const [to, setTo] = useState("HYD");
  
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
  
    const handleSwap = () => {
      const temp = from;
      setFrom(to);
      setTo(temp);
    };
  

  return (
    <div className="w-full bg-[#f4f7f9] font-sans">
     
      <div className="relative w-full bg-gradient-to-r from-[#0046ad] to-[#002b70] min-h-[300px] md:min-h-[400px] p-4 md:p-8">
     
             <div className="absolute inset-0 opacity-10">
               <BiPlanet className="absolute top-10 left-10 text-white" size={40} />
               <BiPlanet className="absolute bottom-20 right-20 text-white" size={60} />
             </div>
     
           </div>

           <div className="max-w-7xl mx-auto px-4 -mt-50 md:-mt-30 relative z-20">

        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-lg flex p-1 w-full md:w-fit mx-auto overflow-x-auto">

          <button
            onClick={() => setActiveTab("flights")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
              activeTab === "flights"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
          >
            <BiPlanet /> Flights
          </button>

          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
              activeTab === "hotels"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
          >
            <BiHotel /> Hotels
          </button>

          {/* <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
            <FaCar /> Cars
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
            <FaShip /> Cruise
          </button> */}

        </div>

        {/* MAIN BOX */}
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">

          {activeTab === "flights" && (
            <>
              <div className="flex gap-6 mb-6 text-sm font-semibold">
                <label>
                  <input
                    type="radio"
                    checked={tripType === "round"}
                    onChange={() => setTripType("round")}
                  /> Round Trip
                </label>

                <label>
                  <input
                    type="radio"
                    checked={tripType === "one"}
                    onChange={() => setTripType("one")}
                  /> One Way
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

                {/* From / To */}
                <div className="md:col-span-4 flex relative h-16">
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-1/2 border rounded-l-lg p-2 bg-gray-100"
                  />

                  <div
                    onClick={handleSwap}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full p-2 cursor-pointer"
                  >
                    <BsArrowLeftRight />
                  </div>

                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-1/2 border  rounded-r-lg p-6 bg-gray-100"
                  />
                </div>

                {/* Departure */}
                <div className="md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center">
                  <label className="text-[10px] text-gray-500 uppercase font-bold">
                    Departure
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="bg-transparent outline-none text-sm cursor-pointer font-bold"
                  />
                </div>

                {/* Return */}
                <div className={`md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center ${
                  tripType === "one" ? "opacity-50 pointer-events-none" : ""
                }`}>
                  <label className="text-[10px] text-gray-500 uppercase font-bold">
                    Return
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    disabled={tripType === "one"}
                    className="bg-transparent outline-none cursor-pointer text-sm font-bold"
                  />
                </div>

                {/* Traveler */}
                <div className="md:col-span-2 ">
                  <TravelerModal />
                </div>

                {/* Button */}
                <button className="md:col-span-2 bg-blue-600 text-white cursor-pointer rounded-lg py-3">
                  Search Flights
                </button>

              </div>
            </>
          )}

          {/* HOTEL UI */}
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input type="text" placeholder="City / Hotel" className="border p-3 rounded-lg bg-gray-100" />
              <input type="date" className="border p-3 rounded-lg bg-gray-100" />
              <input type="date" className="border p-3 rounded-lg bg-gray-100" />
              <button className="bg-blue-600 text-white rounded-lg py-3">
                Search Hotels
              </button>
            </div>
          )}

        </div>
      </div>


      {/* --- 4. FLIGHT DEALS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-center text-blue-600 uppercase tracking-tight">Handpicked Top Flight Deals</h2>
        <p className="text-center text-gray-500 mt-2">Get access to unbeatable flight offers tailored to your travel needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {[
            { from: 'LAX', to: 'LAS', price: '$87.99*', date: '02 May 2026 - 04 May 2026' },
            { from: 'DEN', to: 'HOU', price: '$131.97*', date: '05 May 2026 - 11 May 2026' },
            { from: 'NYC', to: 'CLE', price: '$142.38*', date: '08 May 2026 - 10 May 2026' },
            { from: 'NYC', to: 'CLE', price: '$142.38*', date: '08 May 2026 - 10 May 2026' },
            { from: 'NYC', to: 'CLE', price: '$142.38*', date: '08 May 2026 - 10 May 2026' },
            { from: 'NYC', to: 'CLE', price: '$142.38*', date: '08 May 2026 - 10 May 2026' },
            { from: 'NYC', to: 'CLE', price: '$142.38*', date: '08 May 2026 - 10 May 2026' },
            { from: 'BOS', to: 'CHI', price: '$181.19*', date: '02 Jun 2026 - 06 Jun 2026' }
          ].map((deal, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400">{deal.date}</p>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold">{deal.from}</span>
                  <div className="flex-1 border-t-2 border-dashed border-gray-200 w-12"></div>
                  <span className="text-xl font-bold">{deal.to}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">RoundTrip</p>
                <p className="text-2xl font-black text-green-600">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightPage;

