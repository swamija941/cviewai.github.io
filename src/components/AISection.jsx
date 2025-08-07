import React from "react";

const AISection = () => (
  <section className="bg-white py-20" id="ai">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2071&auto=format&fit=crop"
            alt="AI Advantage"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The CrystalView AI Advantage
          </h2>
          <p className="text-gray-600 mb-6">
            Our AI is not a one-size-fits-all solution. We fine-tune our models
            to understand the nuances of your business, ensuring higher
            accuracy and more relevant insights.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✔</span>
              <span>
                <strong>Domain-Specific Training:</strong> We train our models
                on your data to understand your industry's terminology and
                context.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✔</span>
              <span>
                <strong>Seamless Integration:</strong> Our APIs are designed for
                easy integration with your existing software and workflows.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✔</span>
              <span>
                <strong>Continuous Learning:</strong> Our models adapt and
                improve over time, learning from new data to provide
                ever-more-valuable insights.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AISection;