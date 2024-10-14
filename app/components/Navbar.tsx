import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features", href: "#features" }, // Updated for smooth scrolling
  { name: "Pricing", href: "#pricing" },   // Updated for smooth scrolling
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-white shadow-md px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="h-8 w-auto" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              <p className="text-[#36485C] font-medium cursor-pointer hover:text-[#0085FF] transition duration-300 ease-in-out">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 items-center">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2 hover:bg-[#F0F4FF] rounded-full p-2 transition duration-300 ease-in-out">
          <Image src={User} alt="User Profile" className="h-6 w-6" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden cursor-pointer" />
      </div>
    </nav>
  );
}
