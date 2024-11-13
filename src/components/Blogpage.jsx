import Heroscroll from "../components/Heroscroll";
import React, { useState } from "react";
import ShiponeImage from '../assets/Shipone.jpg';

const Blogpage = ({
  title,
  subtitle,
  rating,
  logo1,
  logo1txt,
  logo2,
  logo2txt,
  logo3,
  logo3txt,
  logo4,
  logo4txt,
  logo5,
  logo5txt,
  logo6,
  logo6txt,
  h1,
  p1,
  h2,
  p2,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
  h3,
  h3img,
  p3,
  h4,
  p4,
  logo7,
  logo7txt,
  logo8,
  logo8txt,
  logo9,
  logo9txt,
  logo10,
  logo10txt,
  logosub,
  cardtitle,
  cardimg1,
  cardtitle1,
  cardsubtitle1,
  cardimg2,
  cardtitle2,
  cardsubtitle2,
  cardimg3,
  cardtitle3,
  cardsubtitle3,
  h5,
  p5,
  subcard1icon,
  subcard1title,
  subcard1subtitle,
  subcard2title,
  subcard2icon,
  subcard2subtitle,
  subcard3icon,
  subcard3title,
  subcard3subtitle,
  subcarddescription,
  h6,
  p6,
  menu1img,
  menu2img,
  menu3img,
  menu1title,
  menu2title,
  menu3title,
  menu1sub,
  menu2sub,
  menu3sub,
  m1t1,
  m1t2,
  m1t3,
  m1t4,
  m1t5,
  m1t6,
  m1t7,
  m2t1,
  m2t2,
  m2t3,
  m2t4,
  m2t5,
  m2t6,
  m2t7,
  m3t1,
  m3t2,
  m3t3,
  m3t4,
  m3t5,
  m3t6,
  m3t7,
  h7img,
  h7,
  p7,
  p7t1,
  p7t1sub,
  p7t2,
  p7t2sub,
  p7t3,
  p7t3sub,
  p7sub,
  imgp7,
  h8,
  p8,
  h9,
  p9,
  b1,
  b1t,
  b1sub,
  b2,
  b2t,
  b2sub,
  b3,
  b3t,
  b3sub,
  b4,
  b4t,
  b4sub,
  b5,
  b5t,
  b5sub,
  b6,
  b6t,
  b6sub,
  b7,
  b7t,
  b7sub,
  b8,
  b8t,
  b8sub,
  b9,
  b9t,
  b9sub,
  b10,
  b10t,
  b10sub,
  b11,
  b11t,
  b11sub,
  b12,
  b12t,
  b12sub,
  h10,
  p10,
  p10img1,
  p10t1,
  p10sub1,
  p10img2,
  p10t2,
  p10sub2,
  h11,
  p11,
  p11img1,
  p11t1,
  p11sub1,
  p11img2,
  p11t2,
  p11sub2,
  p11img3,
  p11t3,
  p11sub3,
  p11img4,
  p11t4,
  p11sub4,
  h12,
  p12,
  p12img1,
  p12t1,
  p12sub1,
  p12img2,
  p12t2,
  p12sub2,
  p12img3,
  p12t3,
  p12sub3,
}) => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  // Handlers for toggling visibility
  const handleToggle1 = () => setShowAnswer1(!showAnswer1);
  const handleToggle2 = () => setShowAnswer2(!showAnswer2);
  const handleToggle3 = () => setShowAnswer3(!showAnswer3);

  return (
    <section className="flex flex-col max-w-7xl container p-5 ">
      {/* section1 */}
      <div className="w-full">
  {/* Container for small screens with background image and opacity */}
  <div
    className="bg-cover bg-center h-1/2 border-2 relative sm:block lg:hidden" // Visible on small screens only
    style={{
      backgroundImage: `url(${ShiponeImage})`, // Dynamically set background image
    }}
  >
    {/* Background overlay for opacity on small screens */}
    <div className="absolute inset-0 bg-white opacity-40"></div> {/* Only affects small screens */}

    {/* Content that remains unaffected by the background image opacity */}
    <div className="relative z-10 p-4">
      <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl title-font font-medium mb-4">
        {title}
      </h1>
      <div className="overflow-hidden py-5">{subtitle}</div>
      <div className="flex py-2 pb-8 text-sm sm:text-lg px-1">{rating}</div>
    </div>
  </div>

  {/* Container for large screens (with background image hidden) */}
  <div className="relative bg-cover bg-center h-1/2  hidden lg:block"
   
  >
    {/* Content that remains unaffected by the background image */}
    <div className="relative z-10 p-4">
      <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl title-font font-medium mb-4">
        {title}
      </h1>
      <div className="overflow-hidden py-5">{subtitle}</div>
      <div className="flex py-2 pb-8 text-sm sm:text-lg px-1">{rating}</div>
    </div>
  </div>

  {/* Hero Component: Show only on large/medium screens */}
  <div className="container hidden lg:block sm:hidden">
    <div className="w-full pb-10">
      <Heroscroll />
    </div>
  </div>
</div>




      {/* section2 */}
      <div className=" flex-wrap gap-10 py-10 justify-evenly grid lg:grid-cols-3 grid-cols-2 self-center">
        <div className="flex gap-5">
          <div className=" self-center">
            <img src={logo1} alt="" srcSet="" className="w-10" />
          </div>
          <div className="self-center">{logo1txt}</div>
        </div>
        <div className="flex gap-5">
          <div className=" self-center">
            <img src={logo2} alt="" srcSet="" className="w-10" />
          </div>
          <div className="self-center ">{logo2txt}</div>
        </div>

        <div className="flex gap-5">
          <div className=" self-center">
            <img src={logo3} alt="" srcSet="" className="w-10" />
          </div>
          <div className="self-center ">{logo3txt}</div>
        </div>

        <div className="flex gap-5">
          <div className=" self-center ">
            <img src={logo4} alt="" srcSet="" className="w-10" />
          </div>

          <div className="self-center ">{logo4txt}</div>
        </div>

        <div className="flex gap-5">
          <div className="self-center">
            <img src={logo5} alt="" srcSet="" className="w-10" />
          </div>

          <div className="self-center">{logo5txt}</div>
        </div>

        <div className="flex gap-5">
          <div className=" self-center">
            <img src={logo6} alt="" srcSet="" className="w-10" />
          </div>
          <div className="self-center">{logo6txt}</div>
        </div>
      </div>

{/* section3 */}
          <div>
        <div className="flex  mt-10 ">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl  lg:text-3xl title-font font-medium mb-4">
            {h1}
          </h1>
        </div>
        <div className="flex  ">{p1}</div>
      </div>
     {/* //faqs  section 4*/}
      <div>
        <div className="flex mt-10">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
            {h2}
          </h1>
        </div>
        <div className="flex">{p2}</div>

        <div className="">
          {/* Question 1 */}
          <div className="flex flex-col p-3 border-b-2">
            <h1
              className="text-gray-900 text-2xl sm:text-3xl md:text-1xl lg:text-2xl title-font font-medium mb-4 cursor-pointer"
              onClick={handleToggle1} // Toggle on click
            >
              {question1}
            </h1>
            {showAnswer1 && <div className="flex ">{answer1}</div>}{" "}
            {/* Show answer if true */}
          </div>
          {/* Question 2 */}
          <div className="flex flex-col  p-3 border-b-2">
            <h1
              className="text-gray-900 text-2xl sm:text-3xl md:text-1xl lg:text-2xl title-font font-medium mb-4 cursor-pointer"
              onClick={handleToggle2} // Toggle on click
            >
              {question2}
            </h1>
            {showAnswer2 && <div className="flex  ">{answer2}</div>}{" "}
            {/* Show answer if true */}
          </div>
          {/* Question 3 */}
          <div className="flex flex-col p-3 border-b-2">
            <h1
              className="text-gray-900 text-2xl sm:text-3xl md:text-1xl lg:text-2xl title-font font-medium mb-4 cursor-pointer"
              onClick={handleToggle3} // Toggle on click
            >
              {question3}
            </h1>
            {showAnswer3 && <div className="flex ">{answer3}</div>}{" "}
            {/* Show answer if true */}{" "}
          </div>
        </div>
      </div>
     {/* one img and text block  */}
      <div className=" mt-10">
        <div className="flex flex-col md:flex-row ">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
            {h3}
          </h1>
        </div>

        <div className="flex flex-col  md:flex-col lg:flex-row">
          {/* Image section section5 */}
          <div className="lg:w-1/3 md:w-full mb-5 md:mb-0 flex justify-center">
            <img src={h3img} alt="" className="rounded-xl w-full" />
          </div>

          {/* Text section */}
          <div className="w-full md:w- p-5 flex items-center">
            <p className="text-lg text-gray-700">{p3}</p>
          </div>
        </div>
      </div>
    
      {/* overview of dubai canal  section6 */}
      <div className="   mt-10">
        <div className="">
          <div className=" ">
            <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl  lg:text-3xl title-font font-medium mb-4">
              {h4}
            </h1>
          </div>
         <div className=" ">{p4}</div>
            <div className="max-w-7xl justify-self-center p-5 ">
            <div className="  grid lg:grid-rows-1 lg:grid-cols-4 grid-rows-1 grid-cols-2  gap-5">
       
             
          <div className=" justify-items-center border-2 rounded-lg w-full px-5 gap-5">
          <div className="justify-self-center">
                <img src={logo7} alt="" srcSet="" className="full" />
              </div>
              <div className=" self-center">{logo7txt}</div>
            </div>
            <div className=" justify-items-center flex-1 border-2 rounded-lg w-full px-5 gap-5">
            <div className="justify-self-center">
                <img src={logo8} alt="" srcSet="" className="" />
              </div>
              <div className=" self-center">{logo8txt}</div>
            </div>
            <div className=" justify-items-center flex-1 border-2 rounded-lg w-full px-5 gap-5">
            <div className="justify-self-center">
                <img src={logo9} alt="" srcSet="" className="" />
              </div>
              <div className=" self-center">{logo9txt}</div>
            </div>
            <div className=" justify-items-center flex-1 border-2 rounded-lg w-full px-5 gap-5">
              <div className="justify-self-center">
                <img src={logo10} alt="" srcSet="" className="" />
              </div>
              <div className=" self-center">{logo10txt}</div>
            </div>
          </div>
          </div>
         

          <div>{logosub}</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="mt-5 mb-10 text-center">
    <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
      {cardtitle}
    </h1>
  </div>

  <div className="gap-6 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
    
    <div className="border-2 flex flex-col justify-between p-5 mb-6">
      <img
        src={cardimg1}
        alt=""
        className="w-full h-32 object-cover object-top"
      />
      <div className="font-semibold mt-5">{cardtitle1}</div>
      <div className="mt-2">{cardsubtitle1}</div>
    </div>

    <div className="border-2 flex flex-col justify-between p-5 mb-6">
      <img
        src={cardimg2}
        alt=""
        className="w-full h-32 object-cover object-top"
      />
      <div className="font-semibold mt-5">{cardtitle2}</div>
      <div className="mt-2">{cardsubtitle2}</div>
    </div>

    <div className="border-2 flex flex-col justify-between p-5 mb-6">
      <img
        src={cardimg3}
        alt=""
        className="w-full h-32 object-cover object-top"
      />
      <div className="font-semibold mt-5">{cardtitle3}</div>
      <div className="mt-2">{cardsubtitle3}</div>
    </div>

  </div>
</div>



      <div className=" mt-10 mb-5">
       
        <div className="flex">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl  lg:text-3xl title-font font-medium mb-4">
            {h5}
          </h1>
        </div>
        <div className="">{p5}</div>

        <div className="  ">
          <div className="flex lg:justify-start flex-wrap">
            <div className="border-2 m-5 lg:w-1/3  ">
              <div className="  flex  p-5 ">
                <div className=" self-center">
                  <img src={subcard1icon} alt="" srcSet="" />
                </div>
                <div className="self-center p-5 font-semibold text-2xl text-gray-500">
                  {subcard1title}
                </div>
              </div>

              <div className=" pt-0 p-5">{subcard1subtitle}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="border-2 m-5 lg:w-1/3">
              <div className="  flex p-5 ">
                <div className=" self-center">
                  <img src={subcard2icon} alt="" srcSet="" />
                </div>
                <div className="self-center p-5 font-semibold text-2xl text-gray-500">
                  {subcard2title}
                </div>
              </div>

              <div className=" pt-0 p-5">{subcard2subtitle}</div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border-2 m-5 md:w-full lg:w-1/3 ">
              <div className="  flex p-5 ">
                <div className=" self-center">
                  <img src={subcard3icon} alt="" srcSet="" />
                </div>
                <div className="self-center p-5 font-semibold text-2xl text-gray-500">
                  {subcard3title}
                </div>
              </div>

              <div className=" pt-0 p-5">{subcard3subtitle}</div>
            </div>
          </div>
        </div>
    
      </div>
   
      {/* menu */}
      <div className="mt-6 sm:mt-10">
  <div>
    <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl title-font font-medium mb-4">
      {h6}
    </h1>
  </div>
  <div className="flex mt-4 mb-4 text-sm sm:text-base md:text-lg">{p6}</div>

  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
    {/* Menu 1 */}
    <div className="w-full">
      <div>
        <img src={menu1img} alt="" className="rounded-lg w-full object-cover" />
      </div>
      <div className="pt-5 font-semibold text-lg sm:text-xl md:text-2xl">
        {menu1title}
      </div>
      <div className="text-sm sm:text-base md:text-lg">{menu1sub}</div>
      <div className="p-2 sm:p-4">✓{m1t1}</div>
      <div className="p-2 sm:p-4">✓{m1t2}</div>
      <div className="p-2 sm:p-4">✓{m1t3}</div>
      <div className="p-2 sm:p-4">✓{m1t4}</div>
      <div className="p-2 sm:p-4">✓{m1t5}</div>
      <div className="p-2 sm:p-4">✓{m1t6}</div>
      <div className="p-2 sm:p-4">✓{m1t7}</div>
    </div>

    {/* Menu 2 */}
    <div className="w-full">
      <div>
        <img src={menu2img} alt="" className="rounded-lg w-full object-cover" />
      </div>
      <div className="pt-5 font-semibold text-lg sm:text-xl md:text-2xl">
        {menu2title}
      </div>
      <div className="text-sm sm:text-base md:text-lg">{menu2sub}</div>
      <div className="p-2 sm:p-4">✓{m2t1}</div>
      <div className="p-2 sm:p-4">✓{m2t2}</div>
      <div className="p-2 sm:p-4">✓{m2t3}</div>
      <div className="p-2 sm:p-4">✓{m2t4}</div>
      <div className="p-2 sm:p-4">✓{m2t5}</div>
      <div className="p-2 sm:p-4">✓{m2t6}</div>
      <div className="p-2 sm:p-4">✓{m2t7}</div>
    </div>

    {/* Menu 3 */}
    <div className="w-full">
      <div>
        <img src={menu3img} alt="" className="rounded-lg w-full object-cover" />
      </div>
      <div className="pt-5 font-semibold text-lg sm:text-xl md:text-2xl">
        {menu3title}
      </div>
      <div className="text-sm sm:text-base md:text-lg">{menu3sub}</div>
      <div className="p-2 sm:p-4">✓{m3t1}</div>
      <div className="p-2 sm:p-4">✓{m3t2}</div>
      <div className="p-2 sm:p-4">✓{m3t3}</div>
      <div className="p-2 sm:p-4">✓{m3t4}</div>
      <div className="p-2 sm:p-4">✓{m3t5}</div>
      <div className="p-2 sm:p-4">✓{m3t6}</div>
      <div className="p-2 sm:p-4">✓{m3t7}</div>
    </div>
  </div>
</div>


      <div className="  pb-10">
  <div>
    {/* Header Section */}
    <div className="mt-10">
      <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
        {h7}
      </h1>
    </div>
    <div>
      {/* Main Paragraph */}
      <div className="flex">{p7}</div>

      {/* Content and Image Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Text Content */}
        <div className="flex flex-col justify-start w-full lg:w-1/2">
          <div className="flex  mt-5 text-lg font-semibold">
            {p7t1}
          </div>
          <div className="flex  mt-5">{p7t1sub}</div>
          <div className="flex  mt-5 text-lg font-semibold">
            {p7t2}
          </div>
          <div className="flex  mt-5">{p7t2sub}</div>
          <div className="flex  mt-5 text-lg font-semibold">
            {p7t3}
          </div>
          <div className="flex mt-5">{p7t3sub}</div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-5 lg:mt-0">
          <img src={imgp7} alt="" className="rounded-lg w-full max-w-md object-cover" />
        </div>
      </div>
    </div>
  </div>

  {/* Second Section */}
  <div className="p-5  mt-10 border-2">
    <div>
      <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
        {h8}
      </h1>
    </div>
    <div>{p8}</div>
  </div>
</div>


      <div className=" mt-10">
  <div>
    <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
      {h9}
    </h1>
  </div>
  <div className="flex">{p9}</div>

  <div className="flex flex-wrap mt-10">
  <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
  <div className="flex">
    <div className="p-3">
      <img 
        src={b1} 
        className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100" 
        alt="" 
        srcSet="" 
      />
    </div>
    <div className="self-center">{b1t}</div>
  </div>
  <div>{b1sub}</div>
</div>

<div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b2} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b2t}</div>
      </div>
      <div>{b2sub}</div>
    </div>
    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b3} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b3t}</div>
      </div>
      <div>{b3sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b4} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b4t}</div>
      </div>
      <div>{b4sub}</div>
    </div>
    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b5} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b5t}</div>
      </div>
      <div>{b5sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b6} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b6t}</div>
      </div>
      <div>{b6sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b7} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b7t}</div>
      </div>
      <div>{b7sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b8} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b8t}</div>
      </div>
      <div>{b8sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b9} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b9t}</div>
      </div>
      <div>{b9sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b10} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b10t}</div>
      </div>
      <div>{b10sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b11} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b11t}</div>
      </div>
      <div>{b11sub}</div>
    </div>

    <div className="w-full border-2 sm:w-1/2 lg:w-1/4 p-5 hover:bg-orange-400 hover:text-white group transition-transform duration-300">
      <div className="flex">
        <div className="p-3">
          <img src={b12} alt=""  className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"  srcSet="" />
        </div>
        <div className="self-center">{b12t}</div>
      </div>
      <div>{b12sub}</div>
    </div>
  </div>
</div>

     
      <div className=" mt-10">
  <div>
    <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
      {h10}
    </h1>
  </div>
  <div>
    <div className="flex">{p10}</div>

    {/* First Row */}
    <div className="flex flex-col lg:flex-row">
      <div className="pt-5 w-full lg:w-1/3">
        <img src={p10img1} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pl-5 pt-5 font-semibold">{p10t1}</div>
        <div className="pl-5 pt-5">{p10sub1}</div>
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="pt-5 w-full lg:w-1/3">
        <img src={p10img2} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pr-5 pt-5 font-semibold">{p10t2}</div>
        <div className="pr-5 pt-5">{p10sub2}</div>
      </div>
    </div>
  </div>
</div>

   
      <div className=" mt-10">
  <div className="flex">
    <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
      {h11}
    </h1>
  </div>
  <div className="flex">{p11}</div>
  <div>
    {/* First Section */}
    <div className="flex flex-col lg:flex-row border-b-2">
      <div className="pt-5 w-full lg:w-1/3">
        <img src={p11img1} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pl-5 pt-5 font-semibold">{p11t1}</div>
        <div className="pl-5 pt-5">{p11sub1}</div>
      </div>
    </div>

    {/* Second Section */}
    <div className="flex flex-col lg:flex-row-reverse border-b-2">
      <div className="w-full lg:w-1/3 pt-5">
        <img src={p11img2} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pr-5 pt-5 font-semibold">{p11t2}</div>
        <div className="pr-5 pt-5">{p11sub2}</div>
      </div>
    </div>

    {/* Third Section */}
    <div className="flex flex-col lg:flex-row border-b-2">
      <div className="pt-5 w-full lg:w-1/3">
        <img src={p11img3} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pl-5 pt-5 font-semibold">{p11t3}</div>
        <div className="pl-5 pt-5">{p11sub3}</div>
      </div>
    </div>

    {/* Fourth Section */}
    <div className="flex flex-col lg:flex-row-reverse border-b-2">
      <div className="w-full lg:w-1/3 pt-5">
        <img src={p11img4} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full lg:w-2/3 self-center">
        <div className="text-xl pr-5 pt-5 font-semibold">{p11t4}</div>
        <div className="pr-5 pt-5">{p11sub4}</div>
      </div>
    </div>
  </div>
</div>

 
      <div className=" mt-10">
  <div className="flex">
    <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl title-font font-medium mb-4">
      {h12}
    </h1>
  </div>
  <div className="flex">{p12}</div>

  {/* Flexbox for large screens, stacked layout for small screens */}
  <div className="flex flex-col lg:flex-row gap-5 mt-5">
    
    {/* Item 1 */}
    <div className="lg:w-1/3 w-full">
      <div>
        <img src={p12img1} alt="" className="rounded-2xl w-full object-cover" />
      </div>
      <div className="flex text-xl font-semibold pt-5 pb-5">
        {p12t1}
      </div>
      <div className="flex">{p12sub1}</div>
    </div>

    {/* Item 2 */}
    <div className="lg:w-1/3 w-full">
      <div>
        <img src={p12img2} alt="" className="rounded-2xl w-full object-cover" />
      </div>
      <div className="flex text-xl font-semibold pt-5 pb-5">
        {p12t2}
      </div>
      <div className="flex">{p12sub2}</div>
    </div>

    {/* Item 3 */}
    <div className="lg:w-1/3 w-full">
      <div>
        <img src={p12img3} alt="" className="rounded-2xl w-full object-cover" />
      </div>
      <div className="flex text-xl font-semibold pt-5 pb-5">
        {p12t3}
      </div>
      <div className="flex">{p12sub3}</div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Blogpage;
