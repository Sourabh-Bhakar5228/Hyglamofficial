import React from "react";

const InspirationSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Durga Maa – A Symbol of Empowerment
          </h2>
          <p className="text-lg mb-6">
            Durga Maa embodies strength, courage, and resilience, inspiring
            women to embrace their inner power. She is a timeless symbol of
            confidence, determination, and the ability to overcome challenges.
            Just as Durga Maa triumphs over obstacles; she encourages every
            woman to stand tall, assert herself, and celebrate her
            individuality. Her energy resonates with empowerment, making her a
            guiding inspiration for women to lead with confidence in all aspects
            of life.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="/assets/images/durgama.png"
            alt="Maa Durga"
            className="rounded-2xl shadow-lg max-h-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
