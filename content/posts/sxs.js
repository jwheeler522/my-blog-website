import React from 'react';
import SideBySideComparison from './SideBySideComparison';

const Sxs = () => {
  const maverickDetails = {
    name: 'Can-Am Maverick X3 Turbo RR',
    specs: [
      { label: 'Engine', value: '195hp, 3-cylinder, 900cc turbocharged engine' },
      { label: 'Torque', value: '135 lb-ft' },
      { label: 'Top Speed', value: '85-90 mph' },
      { label: 'Transmission', value: 'CVT with quick-shift paddle controls' },
    ],
    description: 'The Maverick X3 is a raw powerhouse, thanks to its turbocharged engine. The 195 horsepower and 135 lb-ft of torque make it perfect for tackling massive dunes and technical trails at breakneck speeds. Instant acceleration makes it the ultimate thrill ride.',
    suspension: {
      name: 'Suspension',
      specs: [
        { label: 'Suspension', value: 'Dynamic Power Steering (DPS) with Fox 2.5 Podium shocks' },
        { label: 'Travel', value: '22 inches front, 24 inches rear' },
        { label: 'Wheelbase', value: '102 inches' },
      ],
      description: 'Can-Am’s Fox shocks give you superior damping and rebound control, handling big impacts with ease. Whether you\'re blasting through whoops or jumping dunes, the X3 delivers stability like no other.',
    },
  };

  const rzrDetails = {
    name: 'Polaris RZR Pro R',
    specs: [
      { label: 'Engine', value: '225hp, 4-cylinder, 2.0L naturally aspirated engine' },
      { label: 'Torque', value: '144 lb-ft' },
      { label: 'Top Speed', value: '80-85 mph' },
      { label: 'Transmission', value: 'PVT automatic with Lock & Ride technology' },
    ],
    description: 'Polaris brings precision and longevity with its 225 horsepower engine. Engineered for endurance, it delivers smooth power with impressive torque at lower RPMs, providing better throttle control on rocky terrain and sharp turns.',
    suspension: {
      name: 'Suspension',
      specs: [
        { label: 'Suspension', value: 'Walker Evans Racing 3.0 shocks with high-speed compression adjustment' },
        { label: 'Travel', value: '24 inches front, 29 inches rear' },
        { label: 'Wheelbase', value: '104 inches' },
      ],
      description: 'The Pro R’s suspension is built for extreme control. With the longest rear travel in the market, it absorbs even the harshest drops. The Walker Evans shocks let you fine-tune for any terrain, giving you a smoother, more controlled ride.',
    },
  };

  const featuredProducts = [
    {
      name: 'Product 1',
      image: '../images/golfFun.webp',
      price: '29.99',
      link: 'https://example.com/product1',
    },
    {
      name: 'Product 2',
      image: '../images/golfFun.webp',
      price: '39.99',
      link: 'https://example.com/product2',
    },
  ];

  return (
    <div className="App">
      <SideBySideComparison
        title="Maverick vs. RZR: The Ultimate Showdown of Top-End Side-by-Sides"
        date="October 31, 2023"
        image="../images/golfFun.webp"
        maverickDetails={maverickDetails}
        rzrDetails={rzrDetails}
        featuredProducts={featuredProducts}
      />
    </div>
  );
};

export default Sxs;
