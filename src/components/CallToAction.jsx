import React from "react";

const CallToAction = () => (
  <section className="bg-indigo-600" id="contact">
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready to Unlock Your Potential?
      </h2>
      <p className="text-indigo-200 text-lg mb-8 max-w-3xl mx-auto">
        Let us help you harness the power of AI and data to transform your
        business. Get in touch with our team to learn more about our solutions
        and how we can help you achieve your goals.
      </p>
      <a
        href="mailto:contact@crystalview.ai"
        className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
      >
        Request a Consultation
      </a>
    </div>
  </section>
);

export default CallToAction;