import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const locations = [
  {
    name: 'Madison',
    address: '123 Madison Avenue, New York, NY 10016',
    phone: '(123) 456-7890',
    email: 'madison@restochain.com',
    hours: 'Monday - Friday: 10:00 AM - 10:00 PM\nSaturday - Sunday: 11:00 AM - 11:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870123456789!2d-73.987654321!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d12345%3A0xabcdef123456789!2s123%20Madison%20Ave%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=123+Madison+Avenue,+New+York,+NY+10016',
  },
  {
    name: 'Broadway',
    address: '456 Broadway, New York, NY 10012',
    phone: '(987) 654-3210',
    email: 'broadway@restochain.com',
    hours: 'Monday - Friday: 9:00 AM - 9:00 PM\nSaturday - Sunday: 10:00 AM - 10:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870123456789!2d-73.987654321!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d12345%3A0xabcdef123456789!2s456%20Broadway%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=456+Broadway,+New+York,+NY+10012',
  },
];

const LocationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-12 bg-gray-100">
        <Helmet>
          <title>Our Locations - Resto Chain</title>
          <meta name="description" content="Find our restaurant locations and get directions." />
        </Helmet>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Locations</h1>
          <div className="space-y-12">
            {locations.map((location, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Address:</strong> {location.address}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Phone:</strong> {location.phone}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Email:</strong> {location.email}
                  </p>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-700 whitespace-pre-line">{location.hours}</p>
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
                  >
                    Get Directions
                  </a>
                </div>
                <div>
                  <iframe
                    title={`Google Map - ${location.name}`}
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;