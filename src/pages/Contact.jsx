import React from 'react';
import ContactForm from '../components/Contactform';
import Service3  from '../components/Service3';

import MapComponent from '../components/Map';
// Guarantees component to be added by you

function Contact() {
  return (
    <div className='max-w-7xl justify-self-center'>
      {/* Contact Form with Image */}
      <ContactForm />
      
      
      <Service3/>
      <MapComponent />
    </div>
  );
}

export default Contact;
