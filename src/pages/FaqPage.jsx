import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp, BiSupport, BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a flight on Cheapflightsfares?",
      answer: "Booking is simple! Enter your departure city, destination, and dates in the search box on our homepage. Browse the available deals, select your preferred flight, and follow the prompts to enter traveler details and payment information."
    },
    {
      question: "Can I make changes to my flight reservation?",
      answer: "Yes, changes can be made depending on the airline's policy. Some tickets are non-refundable, while others allow changes with a fee. You can contact our customer support for assistance with modifications."
    },
    {
      question: "What is the 'Gift Rewards' program?",
      answer: "Our Gift Rewards program allows you to earn up to $100* in travel credits after every flight booking during the spring season. These credits can be used for future travel arrangements."
    },
    {
      question: "Is it safe to book through this portal?",
      answer: "Absolutely. We are highly rated on Trustpilot, Reviews.io, and Google with thousands of verified customer reviews. We use secure encryption for all transactions to protect your data."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7. You can call us at +1-216-302-2732 or use the 'Chat' button on our website for real-time assistance."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f4f7f9] min-h-screen font-sans">
      
     
      <div className="bg-[#002b70] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Find answers to frequently asked questions about bookings, rewards, and our services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6  -mt-10 pb-20">
      
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl  border border-gray-100 shadow-sm overflow-hidden"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <BiChevronUp className="text-blue-600 cursor-pointer" size={28} />
                ) : (
                  <BiChevronDown className="text-gray-400 cursor-pointer" size={28} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-4 rounded-full text-white">
              <BiSupport size={32} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800">Still have questions?</h3>
              <p className="text-gray-600">Our customer support is happy to help you 24/7.</p>
            </div>
          </div>
          <button className="bg-[#002b70] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">
           <Link to="/contact-us"> Contact Us</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FaqPage;