import Image from "next/image";
import Check from "../../public/assets/check.svg";
import Link from "next/link"; // Import Link for navigation

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px] bg-gray-50">
      <h1 className="text-black text-center font-bold text-3xl lg:text-[48px]">
        Flexible Plans for You
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-gray-700 lg:text-[20px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-lg shadow-lg bg-[#F9F9F9] p-6 flex flex-col lg:justify-between transition-all duration-300 hover:bg-[#e27739] hover:text-white">
          <div>
            <h3 className="font-semibold text-black text-[20px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-black lg:text-[18px]"> {/* Changed text color to black */}
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-3xl font-semibold lg:text-[36px] text-black">
              0$<span className="text-gray-500">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-black"> {/* Changed text color to black */}
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Access to basic features
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                1 user account
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Community support
              </li>
            </ul>
          </div>
          <Link
            href="#contact"
            className="mt-[16px] rounded-md bg-black py-[14px] text-white font-medium text-center transition duration-300 hover:bg-[#cc7024] shadow-md" // Changed button background to black
          >
            Start Trial
          </Link>
        </div>

        <div className="w-full rounded-lg shadow-lg bg-[#F9F9F9] p-6 flex flex-col transition-all duration-300 hover:bg-[#e27739] hover:text-white">
          <div>
            <h3 className="font-semibold text-black text-[20px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-black lg:text-[18px]"> {/* Changed text color to black */}
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-3xl font-semibold text-black lg:text-[36px]">
              500$<span className="text-gray-500">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-black"> {/* Changed text color to black */}
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                All features in Free Trial
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Up to 5 user accounts
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Email support
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Analytics dashboard
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Custom integrations
              </li>
            </ul>
          </div>
          <Link
            href="#contact"
            className="mt-[16px] rounded-md bg-black py-[14px] text-white font-medium text-center transition duration-300 hover:bg-[#cc7024] shadow-md" // Changed button background to black
          >
            Get Started
          </Link>
        </div>

        <div className="w-full rounded-lg shadow-lg bg-[#F9F9F9] p-6 flex flex-col lg:justify-between transition-all duration-300 hover:bg-[#e27739] hover:text-white">
          <div>
            <h3 className="font-semibold text-black text-[20px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-black lg:text-[18px]"> {/* Changed text color to black */}
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-3xl font-semibold lg:text-[36px] text-black">Custom</h2>

            <p className="pt-4 text-[16px] text-black">
              Tailored solutions for your business needs.
            </p>
            <p className="pt-2 text-[16px] text-black">
              Get dedicated support, advanced features, and team management tools.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-[16px] rounded-md bg-black py-[14px] text-white font-medium text-center transition duration-300 hover:bg-[#cc7024] shadow-md" // Changed button background to black
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}