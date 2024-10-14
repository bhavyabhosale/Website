import Image from "next/image";
import Arrow from '../../public/assets/arrow.png';
import Link from 'next/link'; // Import Link for navigation

export function Cta() {
  return (
    <section
      className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]"
      aria-labelledby="cta-heading"
    >
      <h1
        id="cta-heading"
        className="text-white text-[32px] font-bold lg:text-[56px] leading-[64px]"
      >
        Monitor your website like a pro
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[20px]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <Link href="#contact" passHref>
          <button
            className="flex items-center justify-center gap-x-3 py-[16px] px-[32px] bg-white rounded-[8px] text-pink-500 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Try for free"
          >
            Try for free
          </button>
        </Link>

        <Link href="#contact" passHref>
          <button
            className="flex items-center justify-center gap-x-3 py-[16px] px-[32px] bg-white rounded-[8px] text-pink-500 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Contact Sales"
          >
            Contact Sales
            <span>
              <Image src={Arrow} alt="Arrow icon leading to sales contact" width={24} height={24} loading="lazy" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}