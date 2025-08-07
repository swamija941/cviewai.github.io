import React from "react";

const testimonials = [
 /* {
    quote:
      "CrystalView's data analytics platform has been a game-changer for our marketing team. We can now visualize our campaign performance in real-time and make data-driven decisions that have significantly improved our ROI.",
    name: "Sarah Johnson",
    title: "CMO at Innovate Inc.",
  },
  {
    quote:
      "The AI automation solution developed by CrystalView has saved us countless hours of manual work. Our team can now focus on strategic initiatives instead of getting bogged down in repetitive tasks.",
    name: "Michael Chen",
    title: "COO of Global Logistics",
  },
  {
    quote:
      "Working with CrystalView has been a true partnership. Their team took the time to understand our unique challenges and delivered a custom AI model that has exceeded our expectations. I highly recommend their services.",
    name: "David Rodriguez",
    title: "CEO of Tech Solutions",
  },
  */
];

const Testimonials = () => (
  <section className="bg-gray-50 py-20" id="testimonials">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-left flex flex-col"
          >
            <p className="text-gray-600 italic mb-6 flex-grow">“{t.quote}”</p>
            <div>
              <p className="font-bold text-lg text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
