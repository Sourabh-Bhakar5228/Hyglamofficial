import React from "react";

const InspirationSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Inspiration
          </h2>
          <p className="text-lg mb-6">
            Every girl carries a spark of{" "}
            <span className="font-semibold">Durga</span> within her. Whether she
            is studying, working, nurturing her family, or chasing her dreams,
            her strength comes from the same source of energy Maa Durga
            symbolizes.
          </p>
          <ul className="space-y-3 text-lg">
            <li>✨ Gentle, yet powerful.</li>
            <li>✨ Loving, yet fierce.</li>
            <li>✨ Calm, yet unstoppable.</li>
          </ul>
          <p className="mt-6 text-lg">
            Hyglam celebrates that spark with every design.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/assets/images/durgama.png" // <-- replace with your actual image path
            alt="Maa Durga"
            className="rounded-2xl shadow-lg w-full object-contain h-[400px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
