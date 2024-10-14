"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const items = [
  {
    question: "What features does your service offer?",
    answer:
      "Our service includes real-time website monitoring, performance analytics, uptime tracking, and alert notifications for any downtime.",
    link: "#features", // Link to features page
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach out to our customer support team through our contact page or directly via email at support@example.com.",
    link: "#contact", // Link to contact page
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. You can sign up on our homepage.",
    link: "#contact", // Link to signup page
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. For more details, please visit our payment options page.",
    link: "#contact", // Link to payment options page
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings without any penalties.",
    link: "#faq", // Link to FAQ page
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          If you have any questions regarding our services, feel free to browse through the FAQs below.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                  <Link href="#contact" className="text-[#EB2891] underline mt-2 block">
                    Learn more
                  </Link>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
