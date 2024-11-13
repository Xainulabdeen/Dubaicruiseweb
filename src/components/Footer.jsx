import React from 'react';
import Logo from "../assets/logo.png";
// Import your icons here (adjust the paths as necessary)
// import FacebookIcon from "../assets/icons/facebook.svg";
// import InstagramIcon from "../assets/icons/instagram.svg";
// import YouTubeIcon from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <div className="  bg-black justify-items-center ">
    <div className="max-w-7xl justify-self-center">
    <div className='bg-black text-white flex justify-self-center flex-col items-center  self-center'>
      <div className="p-8 flex flex-col lg:flex-row justify-between self-center items-start w-full">
        {/* Subscription Section */}
        <div className="lg:w-1/3 w-full mb-8 lg:mb-0 flex flex-col self-center items-start">
          <div className="w-1/2 mb-4">
            <img src={Logo} alt="Company Logo" className="" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-start">Contact Info</h3>
          <ul className="flex flex-col items-start gap-2 text-start">
            <li>sales@dubaicruise.com</li>
            <li>+971 52 52 52 746</li>
            <li>246, 14th floor, Regal Tower, Business Bay, Dubai</li>
            <li>Mon-Fri (9.00 am – 6:00 pm)</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="lg:w-2/3 w-full flex flex-col lg:flex-row justify-between items-end text-white">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h4 className="font-semibold mb-4">More About Cruises</h4>
            <ul className="list-disc pl-5">
              <li className="mb-2" >Birthday Party on Cruise</li>
              <li className="mb-2">Dinner Cruise in Dubai</li>
              <li className="mb-2">Things About Dhow Cruise</li>
              <li className="mb-2">Access to Marina Cruise</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h4 className="font-semibold mb-4">Must See Places</h4>
            <ul className="list-disc pl-5">
              <li className="mb-2">Best Must See Places</li>
              <li className="mb-2">Top Attractions of Dubai</li>
              <li className="mb-2">Desert Safari</li>
              <li className="mb-2">Dubai Marina Walk</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h4 className="font-semibold mb-4">Must Do Activities</h4>
            <ul className="list-disc pl-5">
              <li className="mb-2">Shopping Malls in Dubai</li>
              <li className="mb-2">Activities During Summer</li>
              <li className="mb-2">Visit Burj Khalifa</li>
              <li className="mb-2">Historic & Old Dubai</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer with Line */}
      <div className="flex justify-center items-center border-t border-gray-600 mt-8 pt-4 w-full">
        <div className="flex flex-col items-center w-full">
          <p className="text-sm mb-2 text-center">© 2024 Your Company. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Uncomment and use your icons here */}
            {/* <a href="#">
              <img src={FacebookIcon} alt="Facebook" className="h-4 w-4" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" className="h-4 w-4" />
            </a>
            <a href="#">
              <img src={YouTubeIcon} alt="YouTube" className="h-4 w-4" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
