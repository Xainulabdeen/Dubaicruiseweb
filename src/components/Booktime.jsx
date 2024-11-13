import React, { useState } from 'react';

const CruiseBooking = () => {
  const [selectedCruise, setSelectedCruise] = useState('');
  const [date, setDate] = useState('');

  const cruiseTimings = {
    'Dubai Canal Cruise': 'Dubai Canal Cruise is only operated on the timings mentioned below:\n\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM',
    'Dubai Creek Cruise': 'Dubai Creek Cruise is only operated on the timings mentioned below:\n\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM',
    'Dubai Marina Cruise': 'Dubai Marina Cruise is only operated on the timings mentioned below:\n\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM',
  };

  return (
    <div className="flex flex-col  sticky gap-3 justify-self-center container   p-5 ">
      {/* Form Section */}
      <div className="w-full  bg-white pt-3 mt-3 p-6 rounded-lg border-2">
        <h2 className="text-xl font-bold mb-4">AED 29 <span className="line-through text-gray-500">AED 55</span></h2>
        <p className="bg-green-100 text-green-800 p-2 rounded-md mb-4">You save 50%</p>

        <form>
          {/* Select Cruise Input */}
          <label htmlFor="cruise" className="block font-semibold mb-2">Which Cruise Dinner You Want to Book? *</label>
          <select 
            id="cruise" 
            value={selectedCruise} 
            onChange={(e) => setSelectedCruise(e.target.value)} 
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Select your Tour</option>
            <option value="Dubai Canal Cruise">Dubai Canal Cruise</option>
            <option value="Dubai Creek Cruise">Dubai Creek Cruise</option>
            <option value="Dubai Marina Cruise">Dubai Marina Cruise</option>
          </select>
          {!selectedCruise && <p className="text-red-500 mb-4">This field is required.</p>}

          {/* Display Timings based on selection */}
          {selectedCruise && (
            <div className="bg-gray-100 p-4 mb-4 rounded-lg">
              <p className="whitespace-pre-wrap">{cruiseTimings[selectedCruise]}</p>
            </div>
          )}

          {/* Date Input */}
          <label htmlFor="tour-date" className="block font-semibold mb-2">Select Your Tour Date *</label>
          <input 
            type="date" 
            id="tour-date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="w-full p-2 border rounded mb-4"
          />
          {!date && <p className="text-red-500 mb-4">This field is required.</p>}

          <button type="submit" className="w-full  bg-orange-500  py-2 px-5  text-white p-2 rounded-lg">
          <a href="/booking"> Book Now</a>
          </button>
        </form>
      </div>

      {/* Info Section */}
      <div className=" top-0 mt-4 md:mt-0 border-2 w-full bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Why Dubai Cruise.com?</h3>
        <ul className="list-none space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>Trusted platform used by 100K+ people, each month</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>Get the lowest prices and last minute availability</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>Discover and connect with 10,000+ experiences</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>Browse verified reviews and professional photographs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>Have a question? Live chat with our experts 24/7</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CruiseBooking;
