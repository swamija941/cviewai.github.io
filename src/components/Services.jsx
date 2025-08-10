import React from "react";

const services = [
  {
    title: "Fractional Financial Stewardship Services",
    description:
      "Get strategic financial leadership and planning without the cost of a full-time executive. Ideal for growing non-profits.",
    icon: "📊",
  },
  {
    title: "System & Process Optimization",
    description:
      "Streamline your non profit operations with optimized systems and processes for greater efficiency and accuracy.",
    icon: "🤖",
  },
];

const Services = () => (
  <section className="bg-gray-50 py-20" id="services">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Comprehensive Suite of Services
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
