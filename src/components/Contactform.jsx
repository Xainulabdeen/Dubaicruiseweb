import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-10 px-14 ">
      {/* Contact Form */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-6">Keep in touch with us</h2>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700">Name*</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Address Line 1" />
          </div>
          <div className="flex space-x-4">
            <input type="text" className="w-1/2 border border-gray-300 p-2 rounded-md" placeholder="City" />
            <input type="text" className="w-1/2 border border-gray-300 p-2 rounded-md" placeholder="State / Province / Region" />
          </div>
          <div>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="Afghanistan">Afghanistan</option>
              {/* Add more countries */}
            </select>
          </div>
          <div>
              <button type="submit" className=" bg-orange-500  py-2 px-5  text-white rounded-lg">Submit</button>
          </div>
        
        </form>
      </div>
      
      {/* Image: Hidden on smaller screens */}
      <div className="hidden lg:block lg:w-2/3 m-10 ">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Scenic Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactForm;
