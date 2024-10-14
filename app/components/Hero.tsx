import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg"; 
import CNN from "../../public/assets/CNN.svg"; 
import Clutch from "../../public/assets/Clutch.svg"; 

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          {/* Link to the contact page */}
          <Link href="#contact">
            <button className="flex items-center justify-center w-1/2 lg:w-fit py-4 px-8 border border-[#4328EB] text-[#4328EB] rounded-[4px] transition duration-300 hover:bg-[#4328EB] hover:text-white lg:px-10">
              Try for free
            </button>
          </Link>

          <Link href="#features">
            <button className="flex items-center justify-center w-1/2 lg:w-fit py-4 px-8 border border-[#4328EB] text-[#4328EB] rounded-[4px] transition duration-300 hover:bg-[#4328EB] hover:text-white lg:px-10">
              View Features
              <span className="ml-2">
                <Image src={BlurArrow} alt="Learn more" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient Background"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="Hero Visual"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>

            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              {/* Links for each company logo */}
              <Link href="https://www.google.com" target="_blank">
                <Image src={Google} alt="Google Logo" />
              </Link>
              <Link href="https://slack.com" target="_blank">
                <Image src={Slack} alt="Slack Logo" />
              </Link>
              <Link href="https://www.trustpilot.com" target="_blank">
                <Image src={Trustpilot} alt="Trustpilot Logo" />
              </Link>
              <Link href="https://www.cnn.com" target="_blank">
                <Image src={CNN} alt="CNN Logo" />
              </Link>
              <Link href="https://clutch.co" target="_blank">
                <Image src={Clutch} alt="Clutch Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
