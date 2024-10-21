import React from 'react';
import Shipone from '../assets/Shipone.jpg';
import Card from '../components/Card'; // Assuming Card is a custom component
import Shiptwo from '../assets/Shiptwo.jpg';
import Shipthree from '../assets/Shipthree.jpg';
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection';
import Service2 from '../components/Service2';
import Price from '../components/Price'
import Spincard from '../components/FlipsSection';
import ComboSection from '../components/ComboSection';
import Sightseeingsection from '../components/Sightseeingsection';
import Faqs from '../components/Faqs';
import BlogScroll from '../components/BlogScroll';
import QuickLinks from '../components/QuickLinks';
const Home = () => {
  const cruiseData = [
    {
      imageSrc:Shipone , // Ensure correct path to the image
      title: 'Dubai Creek Cruise with Live Entertainment',
      subHeadings: ['Inclusions', 'Sightseeing', 'Food Menu', 'Cruise Location'],
      content: [
        "2-Hour Luxury Cruise on a Traditional Dhow through Dubai Marina. International & Arabic Buffet Dinner (Veg & non-Veg) Welcome Drinks, Unlimited Soft drinks, Tea & Coffee Live Entertainment Performance (Tanura Dance & Horse Show) Light background music Children under 3 are free of charge.",
        'Deira Souq, Dhow Wharfage, The fishing harbor, Al Fahidi historical neighborhood, Abra Marine station, Al Seef waterfront promenade, Rolex Twin Towers, Emirates NBD headquarters building, Dubai Municipality headquarters, Dubai Creek.',
        'Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. Non-Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. BBQ Menu: Grilled Meats, Seafood, Vegetables.',
        'Dubai Creek is located in the heart of Dubai, between the districts of Bur Dubai and Deira. Visitors can board from various locations. Some popular boarding points are located at: Al Seef Road, opposite the British Embassy, Bur Dubai; Dubai Old Town, Al Fahidi Historical District; Bur Dubai Marina, behind the Dubai World Trade Centre.'
      ],
      price: 29,
      discountPrice: 55,
      features: [
        { icon: '✔️', text: 'Instant Confirmation' },
        { icon: '📱', text: 'Mobile e-Ticket' },
        { icon: '⏳', text: '2-Hours Dinner Cruise' }
      ]
    },
    {
      imageSrc: Shiptwo,
      title: 'Dubai Marina Cruise with Live Performance',
      subHeadings: ['Inclusions', 'Sightseeing', 'Food Menu', 'Cruise Location'],
      content: [
        '2-Hour Luxury Cruise on a Traditional Dhow through Dubai Marina. International & Arabic Buffet Dinner (Veg & non-Veg) Welcome Drinks, Unlimited Soft drinks, Tea & Coffee Live Entertainment Performance (Tanura Dance & Horse Show) Light background music Children under 3 are free of charge.',
        'You can view vibrant places around Dubai Marina: Dubai Marina Mall, JBR Beach, Mohammad Bin Ahmed Al Mulla Mosque, Dubai Marina Yacht Club, Marina Skyline and Skyscrapers, Burj Al Arab, Atlantis, the Palm, Ain Dubai (Dubai Eye), Palm Jumeirah, Pier 7 Dubai Marina, Marina Walkway.',
        'Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. Non-Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. BBQ Menu: Grilled Meats, Seafood, Vegetables.',
        'The dinner cruise is parked in Dubai Marina approx 10 mins walk from Marina Mall. The exact location and Google map link will be provided once booking is confirmed. You can reach by Dubai metro, public bus, Dubai tram, and taxi. You can also use our transfer/pickup service.'
      ],
      price: 39,
      discountPrice: 65,
      features: [
        { icon: '✔️', text: 'Guaranteed Seating' },
        { icon: '📱', text: 'Mobile e-Ticket' },
        { icon: '⏳', text: '3-Hours Dinner Cruise' }
      ]
    },
    {
      imageSrc: Shipthree,
      title: 'Dubai Water Canal Cruise with Tanura Dance Show',
      subHeadings: ['Inclusions', 'Sightseeing', 'Food Menu', 'Cruise Location'],
      content: [
        '2-Hour Luxury Cruise on a Traditional Dhow through Dubai Marina. International & Arabic Buffet Dinner (Veg & non-Veg) Welcome Drinks, Unlimited Soft drinks, Tea & Coffee Live Entertainment Performance (Tanura Dance & Horse Show) Light background music Children under 3 are free of charge.',
        'View sites like Downtown Dubai, Burj Khalifa, DFC Mall, Dubai Creek Harbour, JW Marriott, Sheikh Zayed Road, Dubai Water Canal bridges, Dubai Waterfall, Dubai Design District, Safa Park.',
        'Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. Non-Vegetarian Menu: Starters, Salads, Main Course, Sides, Desserts. BBQ Menu: Grilled Meats, Seafood, Vegetables.',
        'The Dubai Water Canal is a 3.2 km man-made waterway that connects the Arabian Gulf to the Dubai Creek, located in the heart of Dubai, between the districts of Bur Dubai and Deira.'
      ],
      price: 19,
      discountPrice: 35,
      features: [
        { icon: '✔️', text: 'Sunset Views' },
        { icon: '📱', text: 'Mobile e-Ticket' },
        { icon: '⏳', text: '1-Hour Sunset Cruise' }
      ]
    }
  ];

  return (
    <>

<Hero/>
    <ServicesSection/>
    
    <div className="flex flex-col  gap-5 ">
      {cruiseData.map((data, index) => (
        <Card key={index} {...data} />
      ))}

     
    </div>
    <Service2/>

    <Price/>
    <Spincard/>
    <ComboSection/>
    <Sightseeingsection/>
    <Faqs/> 
   <BlogScroll/>
    <QuickLinks/>

  
   
    </>
    
  );
};

export default Home;
