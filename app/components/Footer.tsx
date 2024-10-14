import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import Logo from "../../public/assets/Logo.svg";
import LinkedIn from "../../public/assets/Linkedin.svg"; // Ensure this path is correct
import Instagram from "../../public/assets/Instagram.svg"; // Ensure this path is correct
import Email from "../../public/assets/Email.svg"; // Ensure this path is correct

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-[80px] pb-[40px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-2">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <p className="font-bold text-[#36485C] text-[20px]">Your Company Name</p>
        </div>

        <ul className="flex flex-col items-center gap-y-4 pt-[32px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
          <li>
            <Link href="/features" className="hover:text-[#0085FF] transition duration-200">Features</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-[#0085FF] transition duration-200">Pricing</Link>
          </li>
          <li>
            <Link href="/enterprise" className="hover:text-[#0085FF] transition duration-200">Enterprise</Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-[#0085FF] transition duration-200">Careers</Link>
          </li>
        </ul>

        <p className="pt-[32px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-[30px] pt-[40px]">
          <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedIn} alt="LinkedIn" width={40} height={40} className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" width={40} height={40} className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="mailto:youremail@example.com">
            <Image src={Email} alt="Email" width={40} height={40} className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
