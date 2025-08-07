import React from "react";

const services = [
  {
    title: "Data Analytics and Insights",
    description:
      "We turn your raw data into actionable intelligence. Our team of experts uses advanced analytics techniques to uncover trends, patterns, and opportunities that drive informed decision-making.",
    icon: "📊",
  },
  {
    title: "AI-Driven Automation",
    description:
      "Streamline your operations and increase efficiency with our AI-powered automation solutions. From back-office tasks to customer-facing processes, we help you automate workflows and reduce manual effort.",
    icon: "🤖",
  },
  {
    title: "Custom AI Models",
    description:
      "Leverage the power of artificial intelligence with custom models built for your specific needs. We design, develop, and deploy bespoke AI solutions that integrate seamlessly with your existing systems.",
    icon: "💡",
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
      <div className="grid md:grid-cols-3 gap-8">
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