import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Macro shot of molten beauty wax"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCApaZKx54QaTLv1LpTZstN0RJmokVZfPX5AcH0e6iixdHakWrcwNP36inFqwkfrOLTyMcSNPNM_9agGCDP8fucVLK-3OEKR5Uz93bI1UaKPSfOA9aNf1AzUdQq4VOdjU-C3iBCLNjrq8nrdgifrqyjiyInoqpBhI-I-ckaEw5KRP5nvykUgF2hptN7XVJO_bj1-Qlj6o6VOZknu5IIWCbqc_IhNY854eNHu3YXSzjh5aKVbpx-K0B1yAKAwfPyAx5stC8yuW5LsgW2"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="font-display-lg text-4xl md:text-6xl text-white mb-6 font-bold uppercase tracking-wider leading-tight">
          ІДЕАЛЬНО ГЛАДКА ШКІРА В СЕРЦІ ОЛЕКСІЇВКИ
        </h1>
        <p className="font-body-lg text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          Професійна воскова депіляція WaxButterfly. М'яко, швидко та безпечно.
        </p>
        <div className="flex justify-center">
          <a
            className="bg-primary text-on-primary px-10 py-5 rounded-lg text-center font-bold text-lg hover:opacity-90 transition-all shadow-xl"
            href="#booking"
          >
            Записатися онлайн
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
