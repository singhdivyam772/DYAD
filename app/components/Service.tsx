"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import React from "react";
const Service = () => {
  const limitedAboutSubData = serviceData.slice(0, 3);

  while (limitedAboutSubData.length > 3) {
    limitedAboutSubData.push(...limitedAboutSubData);
  }
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  return (
    <section
      id="services"
      className="text-gray-600  font-cabinetgrotesk body-font"
    >
      <div className="container px-5 flex justify-center mt-12 items-center flex-col py-18 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className=" bg-gradient-text bg-clip-text text-transparent text-3xl font-semibold title-font mb-4 text-gray-900">
            SERVICES
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            We offer expert guidance for startups, helping you navigate
            early-stage challenges, from business planning to market entry
            strategies. Our consulting services are designed to accelerate
            growth, streamline operations, and set your business on a path to
            success. Let us help you turn your vision into a thriving
            enterprise.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="relative w-[95%]  shadow-custom h-[29rem] md:mb-10"
          // onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className=" w-[30rem] h-full">
            {serviceData?.map((data) => (
              <CarouselItem key={data.id} className="flex gap-4 py-2 ">
                <div className="flex flex-col w-[30rem]  h-[28rem] items-center justify-center rounded-xl shadow-xl px-4 py-2">
                  <Image
                    alt="service"
                    className="flex-shrink-0 rounded-lg w-4/5 h-1/2 object-cover object-center mb-4"
                    src={data.image}
                    width={800}
                    height={600}
                  />

                  <h2 className="title-font font-semibold text-lg py-2 text-gray-900">
                    {data.title}
                  </h2>
                  <p className="text-[1rem] py-1 mb-4">{data.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-indigo-300 " />
          <CarouselNext className="bg-indigo-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default Service;

const serviceData = [
  {
    id: 0,
    title: "Startup Services Consulting",
    description:
      "We offer guidance for startups, focusing on business planning and market entry strategies. Our services help accelerate growth and turn your vision into a successful enterprise.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1931518415/display_1500/stock-photo-business-network-concept-group-of-people-shaking-hands-customer-support-human-relationship-1931518415.jpg",
  },
  {
    id: 1,
    title: " Full Revenue Cycle Management (RCM)",
    description:
      "  We offer complete revenue cycle management, optimizing every step from patient registration to payment collection. Our services enhance efficiency and revenue, helping your healthcare organization succeed.",
    image:
      "https://www.shutterstock.com/image-photo/responsibility-center-management-business-concept-600nw-1337404751.jpg",
  },
  {
    id: 2,
    title: " Analytics & Transparent Reporting",
    description:
      "  We provide robust analytics and transparent reporting solutions, enabling data-driven decision-making. Our services help you gain insights into performance and operations, fostering accountability and strategic growth.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2299264157/display_1500/stock-photo-ev-electric-vehicle-technology-industry-concept-futuristic-virtual-graphic-touch-user-interface-on-2299264157.jpg",
  },

  {
    id: 4,
    title: " Physician: Onboarding, Credentialing, Privileging",
    description:
      " We streamline the onboarding, credentialing, and privileging processes for physicians. Our services ensure compliance and efficiency, allowing healthcare organizations to integrate qualified professionals quickly and effectively.",
    image:
      "https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
  },
  {
    id: 5,

    title: " Specialty Coding & Billing",
    description:
      "We offer specialized coding and billing services to ensure accuracy and compliance in your healthcare claims. Our expertise streamlines the billing process, maximizes reimbursements, and reduces claim denials for your organization.",
    image:
      "https://img.freepik.com/free-photo/medical-report-record-form-history-patient-concept_53876-121210.jpg?size=626&ext=jpg&ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
  },
  {
    id: 6,

    title: " PI & WC Lien Management",
    description:
      "We provide comprehensive lien management services for personal injury (PI) and workers' compensation (WC) cases. Our expertise ensures efficient tracking and resolution of liens, optimizing financial outcomes for your healthcare organization.",
    image:
      "https://www.shutterstock.com/image-photo/blockchain-technology-concept-revolutionizing-industries-260nw-2481711293.jpg",
  },
  {
    id: 7,
    // title: "SERVICES",
    title: " Physician: Licensing & Payor Enrollment",
    description:
      "We facilitate the licensing and payor enrollment process for physicians, ensuring compliance and timely access to insurance networks. Our services streamline registration, allowing healthcare providers to focus on patient care.",
    image:
      "https://img.freepik.com/free-photo/medical-enrollment-form-document-medicare-concept_53876-132712.jpg?ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
  },
  {
    id: 3,
    title: " Digital Marketing & Social Media Strategy",
    description:
      "  We develop tailored digital marketing and social media strategies to enhance your online presence. Our services drive engagement, increase brand visibility, and help you connect effectively with your target audience.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2473413003/display_1500/stock-photo-human-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of-products-2473413003.jpg",
  },
];
