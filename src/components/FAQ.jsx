import React, { useState } from "react";

const faqs = [
 /* {
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with a wide range of industries, including technology, e-commerce, healthcare, finance, and manufacturing. Our solutions are adaptable and can be tailored to meet the unique needs of any business.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "Data security is our top priority. We employ end-to-end encryption, access controls, and regular security audits to protect your data. We are fully compliant with industry standards like GDPR and CCPA.",
  },
  {
    question: "What is the typical implementation timeline?",
    answer:
      "The timeline for implementation varies depending on the complexity of the project. A typical data analytics project can take anywhere from 4 to 8 weeks, while a custom AI model can take 3 to 6 months. We work closely with you to establish a clear timeline and milestones.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer a range of support packages to ensure that you continue to get the most value from our solutions. Our support team is available to assist you with any questions or issues that may arise.",
  },*/
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-2xl text-indigo-600">
                  {openIndex === i ? "-" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
