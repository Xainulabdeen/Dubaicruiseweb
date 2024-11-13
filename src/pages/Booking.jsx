import React, { useState } from 'react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [cruiseDetails, setCruiseDetails] = useState('');
  const [formData, setFormData] = useState({
    cruiseType: '',
    date: '',
    fullName: '',
    contactNo: '',
    location: '',
    adults: '',
    children: '',
    email: ''
  });

  // Cruise information based on selection
  const cruiseTimings = {
    'Dubai Canal': 'Dubai Canal Cruise is only operated on the timings mentioned below:\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM',
    'Dubai Creek': 'Dubai Creek Cruise is only operated on the timings mentioned below:\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM',
    'Dubai Marina': 'Dubai Marina Cruise is only operated on the timings mentioned below:\nBoarding on Cruise: 08:00 PM\nDeparture of Cruise: 08:30 PM\nReturn: 10:30 PM'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCruiseSelect = (e) => {
    const selectedCruise = e.target.value;
    setFormData({ ...formData, cruiseType: selectedCruise });
    setCruiseDetails(cruiseTimings[selectedCruise]);
  };

  const handleNext = () => {
    if (step === 1 && formData.cruiseType && formData.date) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Here you would normally handle form submission (e.g., sending the data to a server)
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {step === 1 ? (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Which Cruise Dinner You Want to Book?</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select a Cruise*</label>
            <select
              name="cruiseType"
              value={formData.cruiseType}
              onChange={handleCruiseSelect}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            >
              <option value="">Select a Cruise</option>
              <option value="Dubai Canal">Dubai Canal</option>
              <option value="Dubai Creek">Dubai Creek</option>
              <option value="Dubai Marina">Dubai Marina</option>
            </select>
          </div>

          {cruiseDetails && (
            <div className="mb-4 p-4 border border-blue-500 bg-blue-50 text-blue-700 rounded-md">
              <p className="text-sm sm:text-base">{cruiseDetails}</p>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Date*</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <button
            onClick={handleNext}
            className="bg-orange-500 text-white py-3 px-6 rounded-md"
          >
            Next
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Book Dubai Dhow Cruise</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Contact No*</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location*</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Adults*</label>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Children</label>
            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-4 px-5 rounded-md"
          >
            Book this Tour
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
