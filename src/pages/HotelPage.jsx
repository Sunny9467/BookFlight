import React, { useState, useRef, useEffect } from 'react'
import { BiCalendar, BiMap, BiUser } from 'react-icons/bi'
import HotelDeals from '../components/HotelDeals'

export default function HotelPage() {

  // ---------------- STATE ----------------
  const [city, setCity] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const [showGuest, setShowGuest] = useState(false)
  const guestRef = useRef()

  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  // ---------------- STATIC CITY LIST ----------------
  const citiesList = [
    "Delhi", "Mumbai", "Bangalore", "Chennai",
    "New York", "Los Angeles", "Chicago",
    "London", "Dubai", "Paris"
  ]

  // ---------------- SEARCH FUNCTION ----------------
  const fetchCities = (value) => {
    setCity(value)

    if (value.length === 0) {
      setSuggestions([])
      return
    }

    const filtered = citiesList.filter(c =>
      c.toLowerCase().includes(value.toLowerCase())
    )

    setSuggestions(filtered)
  }

  // ---------------- OUTSIDE CLICK CLOSE ----------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestRef.current && !guestRef.current.contains(e.target)) {
        setShowGuest(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <div className="w-full bg-[#f4f7f9] font-sans">

        <div className="relative w-full h-[450px] md:h-[550px] ">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
            alt="Hotel"
            className="w-full h-full object-cover"
          />

          {/* SEARCH BAR */}
          <div className="absolute bottom-0 left-0 w-full bg-[#002b70]/95 py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-2 items-center relative">

              {/* DESTINATION */}
              <div className="w-full md:flex-1 bg-white flex items-center px-4 py-3 h-12 relative">
                <BiMap className="text-blue-500 mr-2" size={20} />

                <input
                  type="text"
                  value={city}
                  onChange={(e) => fetchCities(e.target.value)}
                  placeholder="Your Destination"
                  className="w-full outline-none text-sm"
                />

                {/* DROPDOWN */}
                {suggestions.length > 0 && (
                  <div className="absolute top-12 left-0 w-full bg-white shadow-lg z-50 max-h-40 overflow-y-auto">
                    {suggestions.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setCity(item)
                          setSuggestions([])
                        }}
                        className="p-2 cursor-pointer hover:bg-blue-100 text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CHECK-IN */}
              <div className="w-full md:w-44 bg-white flex items-center px-4 py-3 h-12">
                <BiCalendar className="text-blue-500 mr-2" size={20} />
                <input type="date" className="w-full outline-none text-sm" />
              </div>

              {/* CHECK-OUT */}
              <div className="w-full md:w-44 bg-white flex items-center px-4 py-3 h-12">
                <BiCalendar className="text-blue-500 mr-2" size={20} />
                <input type="date" className="w-full outline-none text-sm" />
              </div>

              {/* GUESTS */}
              <div
                ref={guestRef}
                className="relative w-full md:w-60 bg-white px-4 py-3 h-12 flex items-center justify-between cursor-pointer"
                onClick={() => setShowGuest(!showGuest)}
              >
                <div className="flex items-center gap-2">
                  <BiUser className="text-blue-500" size={20} />
                  <span className="text-sm">
                    {rooms} Room, {adults} Adults, {children} Children
                  </span>
                </div>

                {/* DROPDOWN */}
                {showGuest && (
                  <div className="absolute top-14 left-0 w-full bg-white shadow-lg p-4 z-50 space-y-3">

                    {/* ROOMS */}
                    <div className="flex justify-between">
                      <span>Rooms</span>
                      <div className="flex gap-2">
                        <button onClick={() => setRooms(Math.max(1, rooms - 1))}>-</button>
                        <span>{rooms}</span>
                        <button onClick={() => setRooms(rooms + 1)}>+</button>
                      </div>
                    </div>

                    {/* ADULTS */}
                    <div className="flex justify-between">
                      <span>Adults</span>
                      <div className="flex gap-2">
                        <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                        <span>{adults}</span>
                        <button onClick={() => setAdults(adults + 1)}>+</button>
                      </div>
                    </div>

                    {/* CHILDREN */}
                    <div className="flex justify-between">
                      <span>Children</span>
                      <div className="flex gap-2">
                        <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                        <span>{children}</span>
                        <button onClick={() => setChildren(children + 1)}>+</button>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* BUTTON */}
              <button className="w-full md:w-32 bg-blue-600 hover:bg-blue-400 text-white font-bold h-12">
                Search
              </button>

            </div>
          </div>
        </div>
      </div>

      <HotelDeals />
    </>
  )
}