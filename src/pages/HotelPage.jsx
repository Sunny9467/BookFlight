import React, { useState, useRef, useEffect } from "react";
import { BiCalendar, BiMap, BiUser } from "react-icons/bi";
import HotelDeals from "../components/HotelDeals";

export default function HotelPage() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showGuest, setShowGuest] = useState(false);
  const guestRef = useRef();

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const citiesList = [
    "Delhi", "Mumbai", "Bangalore", "Chennai",
    "New York", "Los Angeles", "Chicago",
    "London", "Dubai", "Paris"
  ];

  const fetchCities = (value) => {
    setCity(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = citiesList.filter((c) =>
      c.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestRef.current && !guestRef.current.contains(e.target)) {
        setShowGuest(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <img
          src="/Images/hotel Banner 1920x450.jpg.jpeg"
          alt="hotel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Book Hotels Easily
            </h1>
            <p className="text-sm md:text-lg">
              Find best hotel deals worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 md:-mt-32 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

            <div className="md:col-span-4 relative">
              <div className="flex items-center border rounded-lg p-3 bg-gray-100 h-14">
                <BiMap className="text-blue-500 mr-2" size={20} />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => fetchCities(e.target.value)}
                  placeholder="Enter City"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              {suggestions.length > 0 && (
                <div className="absolute w-full bg-white shadow-lg mt-1 z-50 max-h-40 overflow-y-auto">
                  {suggestions.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setCity(item);
                        setSuggestions([]);
                      }}
                      className="p-2 cursor-pointer hover:bg-blue-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-2 border rounded-lg p-3 bg-gray-100 h-14 flex items-center">
              <BiCalendar className="text-blue-500 mr-2" />
              <input type="date" className="bg-transparent outline-none w-full" />
            </div>

            <div className="md:col-span-2 border rounded-lg p-3 bg-gray-100 h-14 flex items-center">
              <BiCalendar className="text-blue-500 mr-2" />
              <input type="date" className="bg-transparent outline-none w-full" />
            </div>

            <div
              ref={guestRef}
              className="md:col-span-2 relative"
            >
              <div
                onClick={() => setShowGuest(!showGuest)}
                className="border rounded-lg p-3 bg-gray-100 h-14 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <BiUser className="text-blue-500" />
                  <span className="text-sm">
                    {rooms}R {adults}A {children}C
                  </span>
                </div>
              </div>

              {showGuest && (
                <div className="absolute w-full bg-white shadow-lg p-4 mt-1 z-50 space-y-3">

                  {[
                    { label: "Rooms", value: rooms, set: setRooms, min: 1 },
                    { label: "Adults", value: adults, set: setAdults, min: 1 },
                    { label: "Children", value: children, set: setChildren, min: 0 }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{item.label}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            item.set(Math.max(item.min, item.value - 1));
                          }}
                          className="px-2 bg-gray-200"
                        >-</button>

                        <span>{item.value}</span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            item.set(item.value + 1);
                          }}
                          className="px-2 bg-gray-200"
                        >+</button>
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>

            <button className="md:col-span-2 bg-blue-600 hover:bg-blue-400 text-white rounded-lg h-14">
              Search Hotels
            </button>

          </div>
        </div>
      </div>

      {/* DEALS */}
      <HotelDeals />
    </>
  );
}