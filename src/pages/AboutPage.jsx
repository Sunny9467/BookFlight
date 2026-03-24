import React from 'react';
import Testimonial from '../components/Testimonial';
import FaqPage from './FaqPage';

const AboutPage = () => {
  return (
   <>
   <section>
     <div className="bg-white font-sans">
      
      {/* 1. HERO BANNER SECTION */}
      {/* Isme background image aur centered text hai jaisa image_e5e0c7.jpg mein dikh raha hai */}
      <div className="relative w-full h-[300px] md:h-[250px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="About Us Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay taaki 'About Us' saaf dikhe */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-normal">
          About Us
        </h1>
      </div>

      {/* 2. MAIN CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Image */}
          {/* Image layout handle karne ke liye */}
          <div className="w-[250px] h-[150px]">
            <div className="rounded-sm overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
                alt="Our Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              About CheapFlightsFares
            </h2>
            
            <div className="text-gray-600 space-y-5 leading-relaxed text-sm md:text-base">
              <p>
                Cheapflightsfares started off in <strong>2014</strong> with the clear objective of providing unmatched flight deals to people who are looking for inexpensive flight tickets for their domestic and international travel needs.
              </p>
              
              <p>
                The company has been a steady progress ever since under the able leadership of Tanya Chadha, the woman behind this success story and the owner of the company.
              </p>

              <h3 className="text-xl font-bold text-gray-800 pt-4">
                Value-based Travel at Affordable Prices
              </h3>
              
              <p>
                At CheapFlightsFares, we are passionate about travel. We believe that journeys can be life enriching and are happy to assist you in making your travel arrangements. From exotic beach destinations to places brimming with a rich cultural heritage, we help our customers find the perfect trip in absolutely any part of the world.
              </p>
              
              <p>
                Traveling within a specific budget is not only desired but also necessary for you to get the most out of your vacation. Having a deep understanding of all the factors of traveling, we are committed towards our objective of making your travel desires come true. In our travel portal, you can search a wide array of flight, hotel and rental car deals at prices that fit your budget.
              </p>

              <p>
                We roll out competitive prices on flight tickets, hotel rooms and rental cars from some of the most trusted global brands. We offer you exciting deals to kick-off your vacation, so that it doesn't put a hole in your pocket. You can rest assured that along with price savings you get to enjoy the exceptional services we provide to you throughout the duration of your trip.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
     <FaqPage/>
    <Testimonial/>
   
   </section>
   </>
  );
};

export default AboutPage;