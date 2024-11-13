import React from 'react'
import Blogpage from '../components/Blogpage';
import logo1 from '../assets/logo1.png'
import  logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import defaultimg from '../assets/h3img.webp'
import defaulticon  from '../assets/defaulticon.png'
import Booktime from '../components/Booktime'
const  MarinaCruise = () => {
  const data = [{
    title: "Exploring the Waterways in Dubai Canal Cruise",                // Title
    subtitle: "Enjoy the Ultimate Crushing Experience Around Highest Skyscrapers",   // Subtitle
    rating: "4.3K (1193 Ratings)★★★★★",                            // Rating
    imgone: "imgone.png",                     // Image One
    imgtwo: "imgtwo.png",                     // Image Two
    imgthree: "imgthree.png",                 // Image Three
    logo1: logo1,                       // Logo 1
    logo1txt: "Instant confirmation",                  // Logo 1 Text
    logo2: logo2,                       // Logo 2
    logo2txt: "2 hours",                  // Logo 2 Text
    logo3: logo3,                       // Logo 3
    logo3txt: "Mobile tickets",                  // Logo 3 Text
    logo4: logo4,                       // Logo 4
    logo4txt: "Welcome Drinks",                  // Logo 4 Text
    logo5:logo5,                       // Logo 5
    logo5txt: "Meals included",                  // Logo 5 Text
    logo6: logo6,                       // Logo 6
    logo6txt: "Tanura Dance",                  // Logo 6 Text
    h1: "Why you Should take a Cruise While Traveling to Dubai?",                     // Heading 1
    p1: "Taking a cruise while exploring Dubai isn’t just about offering captivating views; it’s about unlocking the city’s soul from a unique and inspiring vantage point. Imagine gently gliding along the Dubai Canal, the iconic skyline gradually unfolding before you, each majestic skyscraper like the Burj Khalifa and Burj Al Arab reaching for the clouds. This breathtaking panorama is just the beginning of an unforgettable journey that makes a Dubai Canal cruise the perfect complement to your Dubai adventure.",                // Paragraph 1
    h2: "Choosing the Right Cruise for You",                     // Heading 2
    p2: "Taking a cruise while traveling to Dubai offers a captivating experience with its breathtaking scenery of the Arabian Gulf. As you approach Dubai’s coastline, you’ll be mesmerized by the iconic skyline adorned with majestic skyscrapers like the Burj Khalifa and Burj Al Arab. Cruising allows you to witness this remarkable city from a unique perspective, providing unforgettable moments and photo opportunities. Moreover, you can relax and indulge in luxurious amenities on the cruise ship while enjoying the warm Arabian Sea breeze, creating an unparalleled travel experience to complement your visit to Dubai.",                // Paragraph 2
    question1: "Dubai Canal Cruise",                  // Question 1
    answer1: "The Dubai Canal Cruise offers a delightful experience along the iconic Dubai Water Canal. It is the smallest of the three cruises, providing an intimate setting for passengers. The cruise covers prominent areas like Business Bay, Sheikh Zayed Road, and Jumeirah, offering stunning views of the city’s architectural wonders. With comfortable seating, live entertainment, and dining options, it ensures a memorable experience, albeit on a smaller scale.",              // Answer 1
    question2: "Dubai Creek Cruise​",                  // Question 2
    answer2: "The Dubai Creek Cruise takes you on a journey along the historic Dubai Creek, offering a glimpse into Old Dubai’s charm. The cruise covers the bustling waterfront souks, Al Fahidi Historical Neighborhood, and Dubai Creek Golf & Yacht Club. Onboard, you can enjoy a buffet dinner of international and local cuisine, accompanied by live music. The Dubai Creek Cruise combines tradition, heritage, and culinary delights to create a captivating experience.",              // Answer 2
    question3: "Dubai Marina Cruise​",                  // Question 3
    answer3: "The Dubai Marina Cruise offers a journey through the glamorous and modern Dubai Marina. It is the largest of the three cruises, showcasing the city’s luxurious skyscrapers and vibrant atmosphere. The cruise covers Jumeirah Beach Residence (JBR) and Palm Jumeirah, providing stunning views of iconic landmarks like the Burj Al Arab. Onboard, you can enjoy comfortable seating, live entertainment, and a delightful dining experience with international cuisine. The Dubai Marina Cruise offers a grand and elegant journey, surrounded by opulence and beauty.",              // Answer 3
    h3: "Exploring the Dubai Canal Area",                  // Heading 3
    h3img:defaultimg,                       // Heading 3 Image
    p3: "Exploring the Dubai Canal area is an exciting experience that immerses you in the heart of modern Dubai. This vibrant district is renowned for its luxurious waterfront developments, inspiring skyscrapers, and an array of entertainment options. Walking along the Canal Walk, you'll encounter a bustling walkway lined with trendy cafes, restaurants, and boutique shops, offering a world-class shopping experience",                // Paragraph 3
    h4: "Overview of the Dubai Canal Cruise",                  // Heading 4
    p4: "A Dubai Water Canal cruise is a great way to see some of the city’s most iconic landmarks and experience its unique culture. Cruises typically last for about two hours and depart from either Dubai Marina or Deira. As you cruise down the canal, you will see:",                // Paragraph 4
    logo7:defaulticon,                       // Logo 7
    logo7txt: "Dubai Spice Souk",                  // Logo 7 Text
    logo8: defaulticon,                       // Logo 8
    logo8txt: "Ibn Battuta Mall",                  // Logo 8 Text
    logo9: defaulticon,                       // Logo 9
    logo9txt: "Dubai Fountain",                  // Logo 9 Text
    logo10: defaulticon,                     // Logo 10
    logo10txt: "JW Marriott",                // Logo 10 Text
    logosub: "You will also pass by traditional dhows and abras, still used as water taxis today.",        // Logos Section Subtitle
    cardtitle: "Here are some of the things you can expect on a Dubai Water Canal cruise:",                   // Card Title
    cardimg1: defaultimg,                 // Card Image 1
    cardtitle1: "Stunning views of Dubai's skyline",                // Card Title 1
    cardsubtitle1: "As you cruise down the canal, you will see some of the city's most iconic landmarks, including the Burj Khalifa & Dubai Mall.",         // Card Subtitle 1
    cardimg2: defaultimg,                 // Card Image 2
    cardtitle2: "A glimpse into Dubai's history",                // Card Title 2
    cardsubtitle2: "The canal is home to several historical & cultural attractions. You will be able to learn about Dubai's rich history & culture.",         // Card Subtitle 2
    cardimg3: defaultimg,                 // Card Image 3
    cardtitle3: "A delicious meal & live entertainment",                // Card Title 3
    cardsubtitle3: "Most cruises offer a buffet dinner with a variety of international delicious dishes, as well as traditional music and dancing.",         // Card Subtitle 3
    h5: "How to Book Your Cruise in Dubai Canal",                  // Heading 5
    p5: "Booking your cruise in Dubai Marina through DubaiCruise.com is a convenient and efficient process. With DubaiCruise.com, you can enjoy an easy, flexible, and fast booking experience with a variety of options to suit your budget and preferences.",                // Paragraph 5
    subcard1icon: defaulticon,         // Subcard 1 Icon
    subcard1title: "Visit Website",         // Subcard Title 1
    subcard1subtitle: "Start by visiting the official website of DubaiCruise.com, where you'll find a user-friendly interface and a wide range of cruise options.",   // Subcard Subtitle 1
    subcard2icon: defaulticon,         // Subcard 2 Icon
    subcard2title: "Choose Cruise",         // Subcard Title 2
    subcard2subtitle: "Browse through the available cruise options on DubaiCruise.com, which include shared cruises, private charters, dhow cruises, and more.",   // Subcard Subtitle 2
    subcard3icon: defaulticon,         // Subcard 3 Icon
    subcard3title: "Select Date/Time",         // Subcard Title 3
    subcard3subtitle: "Select the date and time that suits you best. DubaiCruise.com offers cruises throughout the year, ensuring flexibility in planning your trip.",   // Subcard Subtitle 3
    subcarddescription: "DubaiCruise.com ensures a seamless booking process,allowing you to reserve your cruise in Dubai Canal with ease",
    h6: "Dubai Canal Cruise Food Menu",                  // Heading 6
    p6: "The Dubai Canal Cruise menu typically offers a variety of options to cater to both vegetarian and non-vegetarian preferences, including BBQ selections. Here is an overview of what you can expect:",                // Paragraph 6
    menu1img:defaultimg,                 // Menu 1 Image
    menu2img: defaultimg,                 // Menu 2 Image
    menu3img: defaultimg,                 // Menu 3 Image
    menu1title: "Vegetarian Options",                // Menu 1 Title
    menu2title: "Non-Veg Options",                // Menu 2 Title
    menu3title: "BBQ Options",                // Menu 3 Title
    menu1sub: "Guests can enjoy a variety of delicious vegetarian dishes which may include:",               // Menu 1 Subtitle
    menu2sub: "Savor a variety of grilled meats and seafood to satisfy your Non-veg needs:",               // Menu 2 Subtitle
    menu3sub: "Enjoy a variety of grilled meats, seafood, & vegetables, BBQ to perfection.",               // Menu 3 Subtitle
    m1t1: " Vegetable Spring Rolls",
     m1t2: " Hummus", 
     m1t3: "Fattoush with Pita Bread Croutons3",
      m1t4: "Coleslaw",
       m1t5: " Garden Fresh Green Salad", 
       m1t6: " Delicious Arabic Bread (Kubboos)",
        m1t7: " Vegetable Biryani", // m1t items
    m2t1: " Chicken Shish Tawook", 
    m2t2: "Grilled Fish",
     m2t3: " Butter Chicken", 
     
     m2t4: "Lamb Kebab", 
     m2t5: "Prawns Tandoori",
      m2t6: " Chicken Biryani",
       m2t7: "Mutton Rogan Josh", // m2t items
    m3t1: "Chicken BBQ",
     m3t2: " Beef BBQ",
      m3t3: "Juicy BBQ Pulled Pork",
       m3t4: "Grilled Shrimp Skewers",
        m3t5: "Tandoori Lamb Chops",
         m3t6: "BBQ Corn on the Cob", 
         m3t7: "Prawns BBQ", // m3t items
    h7img: defaultimg,                       // Heading 7 Image
    h7: "The ideal time to take acruise from Dubai Canal",                  // Heading 7
    p7: "The ideal time to visit Dubai canal is during the cooler months of November to April, when the temperatures are mild and the weather is pleasant. During the summer months, the temperatures can soar to 50 degrees Celsius or higher, making it very uncomfortable to be outdoors.",                // Paragraph 7
    p7t1: "Summers (May to October)",                       // P7 Title 1
    p7t1sub: "Summer in Dubai is hot and humid, with temperatures often reaching 50 degrees Celsius or higher. There is very little rain during the summer months, and the sun can be very strong.",           // P7 Title 1 Subtitle
    p7t2: "Winters (November to April)",                       // P7 Title 2
    p7t2sub: "Winter in Dubai is a mild and pleasant season, with temperatures averaging 20 degrees Celsius. There is an average of 10 days of rain per month during the winter month",           // P7 Title 2 Subtitle
    p7t3: "Spring (March to April)",                       // P7 Title 3
    p7t3sub: "Spring in Dubai is a beautiful time of year, with mild temperatures and lush green landscapes. The average temperature in April is 25 degrees Celsius, and there is an average of 10 days of rain per month.",           // P7 Title 3 Subtitle
    p7sub: "Overall, the best time to visit Dubai is during the cooler months of November to April. However, Dubai has something to offer visitors year-round, so no matter when you decide to visit, you are sure to have a great time.",                      // P7 Subtitle
    imgp7: defaultimg,                       // Image P7
    h8: "Additional tip",                  // Heading 8
    p8: "If you're planning on taking a sunset cruise, be sure to book your tickets in advance, as these cruises tend to be very popular and crowdy all the time.",                // Paragraph 8
    h9: "Top Sights or Attractions to See on the Cruise",                  // Heading 9
    p9: "During a Dubai Marina Cruise, you’ll have the opportunity to see several top sights and attractions that contribute to the city’s iconic skyline and vibrant atmosphere. Here are some of the notable sights you can expect to see:",                // Paragraph 9
    b1: defaulticon, b1t: "Downtown Dubai", b1sub: "Downtown Dubai is truly a city within a city. Whether you want a place to relax or enjoy the views, it offers something for everyone.",     // Button 1 Data
    b2: defaulticon, b2t: "Burj Khalifa", b2sub: "It is a popular tourist destination. It is a mixed-use building in Dubai, UAE. It is also the world’s tallest structure ever made.",     // Button 2 Data
    b3: defaulticon, b3t: "DFC Mall", b3sub: "It is an iconic shopping destination in the heart of DFC. Find everything you need conveniently located under one roof.",     // Button 3 Data
    b4: defaulticon, b4t: "Dubai Creek Harbour", b4sub: "Dubai Creek Harbour is a 6-square-kilometer waterfront mixed-use community that is located in the heart of Dubai.",     // Button 4 Data
    b5: defaulticon, b5t: "JW Marriott", b5sub: "JW Marriott is an American multinational hospitality company that operates and franchises luxury hotels and resorts.",     // Button 5 Data
    b6: defaulticon, b6t: "Sheikh Zayed Road", b6sub: "It is home to most of Dubai’s skyscrapers, including the UAE Tower, which also connects the Palm Jumeirah & Dubai Pier.",     // Button 6 Data
    b7: defaulticon, b7t: "Safa Park", b7sub: "Safa Park is a great place in Dubai to escape the hustle & bustle of the city & enjoy some fresh air & sunshine.",     // Button 7 Data
    b8: defaulticon, b8t: "Water Canal bridges", b8sub: "The Dubai Water Canal bridges are popular tourist destinations and an essential part of the city’s architecture.",     // Button 8 Data
    b9: defaulticon, b9t: "Dubai Design District", b9sub: "Dubai Design District is a home to a variety of design-related businesses, including fashion boutiquess, & design studios.",     // Button 9 Data
    b10: defaulticon, b10t: "Dubai Waterfall", b10sub: "Observe the sleek and luxurious yachts stopped at the marina, showcasing the city’s love for marine leisure and recreation.", // Button 10 Data
    b11: defaulticon, b11t: "Rolex twin Towers", b11sub: "The Rolex Twin Towers Are a Pair of 102-meter-tall Skyscrapers. They are located in the Deira district of Dubai.", // Button 11 Data
    b12: defaulticon, b12t: "Abra Marina Station", b12sub: "Abra Marina Station Is a Water Taxi Station in Dubai. The Station Is Open 24 Hours a Day, 7 days a week.", // Button 12 Data
    h10: "Sitting Option: Upper Deck and Lower Deck Relaxation",                // Heading 10
    p10: "During a Dubai Marina Canal, passengers can choose between the upper deck and lower deck for their relaxation and enjoyment, each offering distinct features to cater to different preferences.",              // Paragraph 10
    p10img1: defaultimg,                   // P10 Image 1
    p10t1: "Upper Deck: Open Sitting & Views",                     // P10 Title 1
    p10sub1: "The upper deck of the cruise provides an open-air setting, allowing passengers to soak in the panoramic views of Dubai Canal. It offers a spacious area with unobstructed views, providing an ideal setting to enjoy the stunning skyline, feel the gentle breeze, and bask in the warmth of the sun. The upper deck is perfect for those who enjoy an open-air experience, offering a  sense of freedom and a chance to appreciate the natural beauty. Passengers can relax on comfortable seating and unwind while taking in the sights.",                // P10 Subtitle 1
    p10img2: defaultimg,                   // P10 Image 2
    p10t2: "Lower Deck: Peaceful & Air Conditioned",                     // P10 Title 2
    p10sub2: "The lower deck offers a sheltered & air-conditioned environment. It provides a cool & comfortable space for passengers to relax away from the elements. The lower deck typically features indoor seating areas with large windows, allowing passengers to still enjoy the views while being shielded from the sun or extreme weather. This area provide a calm & cozy atmosphere, Passengers can comfortably unwind, chat, and enjoy the cruise while being sheltered from external factors. Whether you prefer the open views & outdoor experience of the upper deck or the cool & sheltered a calm & cozy atmosphere, Passengers can comfortably unwind, chat, and enjoy the cruise while being sheltered from external factors. Whether you prefer the open views and outdoor experience of the upper deck or the cool and sheltered ambiance of the lower deck, both options ensure a delightful and comfortable setting to relax, enjoy the cruise, and create lasting memories in Dubai Canal.",                // P10 Subtitle 2
    h11: "Celebrate in Style on a Dubai Canal Cruise",                // Heading 11
    p11: "Dubai Canal Cruises offer a range of options to enhance your experience and cater to various occasions. Here are some gatherings options available on additional charges:",              // Paragraph 11
    p11img1: defaultimg,                   // P11 Image 1
    p11t1: "Birthday Celebrations",                     // P11 Title 1
    p11sub1: "You can celebrate your birthday on a Dubai Canal Cruise with special decorations, personalized cakes, and dedicated seating arrangements. Cruise operators often provide customizable birthday packages to make your celebration memorable. Note that additional charges may apply for decorations and personalized services.",                // P11 Subtitle 1
    p11img2: defaultimg,                   // P11 Image 2
    p11t2: "Wedding Anniversaries",                     // P11 Title 2
    p11sub2: "Celebrate your wedding anniversary in style aboard a Dubai Canal Cruise. Enjoy a romantic setting, breathtaking views, and a dedicated dining experience. Some our cruise operators may offer anniversary packages that include private seating, special menus, and even live music or entertainment to create a truly memorable celebration.",                // P11 Subtitle 2
    p11img3: defaultimg,                   // P11 Image 3
    p11t3: "Business Meetings",                     // P11 Title 3
    p11sub3: "Dubai Canal Cruises can provide a unique venue for business meetings or corporate gatherings. Enjoy a productive and inspiring environment with stunning views as your backdrop. Our cruise also offer facilities such as audiovisual equipment, comfortable seating arrangements, and catering services to ensure a seamless and professional experience.",                // P11 Subtitle 3
    p11img4:defaultimg,                   // P11 Image 4
    p11t4: "Corporate Parties",                     // P11 Title 4
    p11sub4: "Dubai Canal Cruises are ideal for hosting corporate parties and team-building events. Enjoy a festive atmosphere with colleagues or business partners while cruising along the Canal. Many cruises offer tailored packages with entertainment options like live music, DJs, dance floors, and catering services to create an enjoyable and memorable corporate event.",                // P11 Subtitle 4
    h12: "Entertainment Options on Dubai Canal Cruise",                // Heading 12
    p12: "Embarking on a Dubai Canal Cruise is not just a visual and culinary treat, but also a musical delight that adds an extra layer of enjoyment to the overall experience. A Dubai Canal Cruise offers a musical delight for its passengers, with various entertainment options that cater to diverse musical preferences. As guests step aboard, they are greeted by captivating melodies and the enchanting sounds of live music floating through the air. The cruise takes great pride in featuring talented musicians who create a captivating ambiance with their melodic tunes. So, Cruise and Dine on Dubai Canal Cruise and make your Dubai trip Unforgettable.",              // Paragraph 12
    p12img1: defaultimg,                   // P12 Image 1
    p12t1: "Tanura Dance",                     // P12 Title 1
    p12sub1: "Tanura dance is a captivating and mesmerizing traditional folk-dance form that is often showcased as part of cultural performances on the Dubai Canal Cruise. Originating from Egypt & inspired by the Sufi tradition, Tanura dance is characterized by the swirling & twirling movements of the performers dressed in colorful costumes.",                // P12 Subtitle 1
    p12img2: defaultimg,                   // P12 Image 2
    p12t2: "Live Music",                     // P12 Title 2
    p12sub2: "Embarking on a Dubai Canal Cruise is not just a visual and culinary treat, but also a musical delight that adds an extra layer of enjoyment to the overall experience. A Dubai Canal Cruise offers a musical delight for its passengers according to their tastes, with various entertainment options that cater to diverse musical preferences.",                // P12 Subtitle 2
    p12img3: defaultimg,                   // P12 Image 3
    p12t3: "Horse Show",                     // P12 Title 3
    p12sub3: "In Horse Show, the performers enter the stage dressed in horse costumes to begin the show. They form a line and bow to the audience before beginning a series of horse-like acts. The performance is usually performed to music, and the artists frequently interact with the audience. They also invite the audience to take part in the show."                 // P12 Subtitle 3
  }];
  
  return (
   <>
 <div className='flex flex-col max-w-7xl justify-self-center sm:flex-col md:flex-col lg:flex-row'>

    
   <div className='w-full'>

   <div className="">
          {data.map((item, index) => (
            <Blogpage
  key={index}
  title={item.title}
  subtitle={item.subtitle}
  rating={item.rating}
  logo1={item.logo1}
  logo1txt={item.logo1txt}
  logo2={item.logo2}
  logo2txt={item.logo2txt}
  logo3={item.logo3}
  logo3txt={item.logo3txt}
  logo4={item.logo4}
  logo4txt={item.logo4txt}
  logo5={item.logo5}
  logo5txt={item.logo5txt}
  logo6={item.logo6}
  logo6txt={item.logo6txt}
  h1={item.h1}
  p1={item.p1}
  h2={item.h2}
  p2={item.p2}
  question1={item.question1}
  answer1={item.answer1}
  question2={item.question2}
  answer2={item.answer2}
  question3={item.question3}
  answer3={item.answer3}
  h3={item.h3}
  h3img={item.h3img}
  p3={item.p3}
  h4={item.h4}
  p4={item.p4}
  logo7={item.logo7}
  logo7txt={item.logo7txt}
  logo8={item.logo8}
  logo8txt={item.logo8txt}
  logo9={item.logo9}
  logo9txt={item.logo9txt}
  logo10={item.logo10}
  logo10txt={item.logo10txt}
  logosub={item.logosub}
  cardtitle={item.cardtitle}
  cardimg1={item.cardimg1}
  cardtitle1={item.cardtitle1}
  cardsubtitle1={item.cardsubtitle1}
  cardimg2={item.cardimg2}
  cardtitle2={item.cardtitle2}
  cardsubtitle2={item.cardsubtitle2}
  cardimg3={item.cardimg3}
  cardtitle3={item.cardtitle3}
  cardsubtitle3={item.cardsubtitle3}
  h5={item.h5}
  p5={item.p5}
  subcard1icon={item.subcard1icon}
  subcard1title={item.subcard1title}
  subcard1subtitle={item.subcard1subtitle}
  subcard2icon={item.subcard2icon}
  subcard2title={item.subcard2title}
  subcard2subtitle={item.subcard2subtitle}
  subcard3icon={item.subcard3icon}
  subcard3title={item.subcard3title}
  subcard3subtitle={item.subcard3subtitle}
  subcarddescription={item.subcarddescription}
  h6={item.h6}
  p6={item.p6}
  menu1img={item.menu1img}
  menu2img={item.menu2img}
  menu3img={item.menu3img}
  menu1title={item.menu1title}
  menu2title={item.menu2title}
  menu3title={item.menu3title}
  menu1sub={item.menu1sub}
  menu2sub={item.menu2sub}
  menu3sub={item.menu3sub}
  m1t1={item.m1t1}
  m1t2={item.m1t2}
  m1t3={item.m1t3}
  m1t4={item.m1t4}
  m1t5={item.m1t5}
  m1t6={item.m1t6}
  m1t7={item.m1t7}
  m2t1={item.m2t1}
  m2t2={item.m2t2}
  m2t3={item.m2t3}
  m2t4={item.m2t4}
  m2t5={item.m2t5}
  m2t6={item.m2t6}
  m2t7={item.m2t7}
  m3t1={item.m3t1}
  m3t2={item.m3t2}
  m3t3={item.m3t3}
  m3t4={item.m3t4}
  m3t5={item.m3t5}
  m3t6={item.m3t6}
  m3t7={item.m3t7}
  h7img={item.h7img}
  h7={item.h7}
  p7={item.p7}
  p7t1={item.p7t1}
  p7t1sub={item.p7t1sub}
  p7t2={item.p7t2}
  p7t2sub={item.p7t2sub}
  p7t3={item.p7t3}
  p7t3sub={item.p7t3sub}
  p7sub={item.p7sub}
  imgp7={item.imgp7}
  h8={item.h8}
  p8={item.p8}
  h9={item.h9}
  p9={item.p9}
  b1={item.b1}
  b1t={item.b1t}
  b1sub={item.b1sub}
  b2={item.b2}
  b2t={item.b2t}
  b2sub={item.b2sub}
  b3={item.b3}
  b3t={item.b3t}
  b3sub={item.b3sub}
  b4={item.b4}
  b4t={item.b4t}
  b4sub={item.b4sub}
  b5={item.b5}
  b5t={item.b5t}
  b5sub={item.b5sub}
  b6={item.b6}
  b6t={item.b6t}
  b6sub={item.b6sub}
  b7={item.b7}
  b7t={item.b7t}
  b7sub={item.b7sub}
  b8={item.b8}
  b8t={item.b8t}
  b8sub={item.b8sub}
  b9={item.b9}
  b9t={item.b9t}
  b9sub={item.b9sub}
  b10={item.b10}
  b10t={item.b10t}
  b10sub={item.b10sub}
  b11={item.b11}
  b11t={item.b11t}
  b11sub={item.b11sub}
  b12={item.b12}
  b12t={item.b12t}
  b12sub={item.b12sub}
  h10={item.h10}
  p10={item.p10}
  p10img1={item.p10img1}
  p10t1={item.p10t1}
  p10sub1={item.p10sub1}
  p10img2={item.p10img2}
  p10t2={item.p10t2}
  p10sub2={item.p10sub2}
  h11={item.h11}
  p11={item.p11}
  p11img1={item.p11img1}
  p11t1={item.p11t1}
  p11sub1={item.p11sub1}
  p11img2={item.p11img2}
  p11t2={item.p11t2}
  p11sub2={item.p11sub2}
  p11img3={item.p11img3}
  p11t3={item.p11t3}
  p11sub3={item.p11sub3}
  p11img4={item.p11img4}
  p11t4={item.p11t4}
  p11sub4={item.p11sub4}
  h12={item.h12}
  p12={item.p12}
  p12img1={item.p12img1}
  p12t1={item.p12t1}
  p12sub1={item.p12sub1}
  p12img2={item.p12img2}
  p12t2={item.p12t2}
  p12sub2={item.p12sub2}
  p12img3={item.p12img3}
  p12t3={item.p12t3}
  p12sub3={item.p12sub3}
/>

          ))}
        </div>



 </div>

 <div className=" sm:w-full md:w-full lg:w-1/3 lg:max-h-screen lg:sticky -top-10 bottom-0 mb-32 self-start overflow-y-scroll scrollbar-hide "> {/* Adjusted overflow and bottom */}
  {/* Content of Booktime */}
  <Booktime />
</div>


   
   </div>
   </>
  )
}

export default  MarinaCruise;
