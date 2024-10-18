"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Testimonial from "./components/Testimonial";

export default function Home() {
  const limitedAboutSubData = aboutSubData.slice(0, 3);

  while (limitedAboutSubData.length > 3) {
    limitedAboutSubData.push(...limitedAboutSubData);
  }
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <div className="">
      <Navbar />

      {/* main section */}
      <section
        id="home"
        className="text-gray-600 font-roboto body-font scroll-smooth overflow-hidden bg-[url('https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?size=626&ext=jpg&ga=GA1.2.506489367.1728115941&semt=ais_hybrid')]"
      >
        <div className="container  py-24 mx-auto">
          <div className=" w-[90%] mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              width={500}
              height={300}
              className="lg:w-1/2 w-full h-[34rem] object-cover object-center rounded-[6rem]"
              src="https://img.freepik.com/free-photo/side-view-doctor-writing-prescription_23-2148231339.jpg?ga=GA1.1.506489367.1728115941&semt=ais_hybrid"
            />
            <div className=" animated-element lg:w-1/2 w-full  lg:py-6 mt-6 lg:mt-12 relative  bg-cover bg-center ">
              <div className=" pl-4  bg-[#A3A3A3]/2 rounded-xl h-full">
                {" "}
                {/* <span className=" pl-4 text-[3rem]">👨🏻‍⚕️</span> */}
                <h1 className=" font-cabinetgrotesk   pl-4 bg-gradient-text bg-clip-text text-transparent  text-[2.8rem]  title-font font-semibold mb-1">
                  We Are Here To Change That Narrative
                </h1>
                <p className="leading-[2.2rem] font-cabinetgrotesk text-[1.4rem] py-2 pl-4">
                  At Dyad Practice Solutions, we understand the unique
                  challenges that physicians and practice administrators face
                  daily. The complexities of managing a practice's financial and
                  operational landscape often leave little time for what truly
                  matters ⎼ providing exceptional patient care. We are here to
                  change that narrative . . .
                </p>
                <button className="home-button mx-auto mt-8">
                  Know More
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about, service, contact  */}
      <section className="text-gray-600 font-cabinetgrotesk body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-wrap -m-3 ">
            {aboutData.map((data) => (
              <div
                key={data.id}
                className="p-4 lg:w-1/3 hover:scale-110 transition-all duration-700"
              >
                <div className="h-full bg-gray-100 gap-4 shadow-lg bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    DYAD
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {data.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{data.description}</p>
                  <a className="text-purple-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="text-gray-600 font-cabinetgrotesk mb-12 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" bg-gradient-text bg-clip-text text-transparent text-3xl font-semibold title-font mb-4 text-gray-900">
              ABOUT
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              At Dyad Practice Solutions, we recognize the challenges physicians
              and practice administrators face in managing financial and
              operational complexities, often at the expense of patient care.
              Inspired by the Dyad leadership model, we empower physicians by
              streamlining operations and safeguarding their financial
              well-being. We aim to change that narrative, transforming
              physician support through strategic partnerships that prioritize
              quality and transparency, allowing healthcare professionals to
              focus on delivering exceptional care.
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-start space-x-[6rem]">
            {aboutSubData.map((data) => (
              <div className="card" key={data.id}>
                <div className="card-inner ">
                  <div className="card-front shadow-2xl border-l-8  border-b-8  border-blue-500  py-4 opacity-85 flex flex-col">
                    <div className=" flex justify-center items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="text-brand-secondary text-blue-500 size-[24px]  z-10"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      <p className=" text-2xl font-semibold text-black">
                        {data.title}
                      </p>{" "}
                    </div>

                    <div className=" w-full h-full px-4 text-[18px]">
                      <p className=" pt-2">
                        {data.description}
                        <a className="text-purple-500  mx-auto inline-flex items-center">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-back border-l-8  border-b-8  border-blue-500  shadow-2xl  py-4 opacity-85 flex flex-col">
                    <div className=" w-full h-full px-4 text-[18px] ">
                      <p className=" pt-2">{data.description2}</p>
                      <p className=" pt-2">{data.description3}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* service */}
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

      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
}

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
      "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?b=1&s=612x612&w=0&k=20&c=U7i_Zhk7BuNqPpceKZbbzlGCuqn4P70mW6mRaRgnB20=",
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
      "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.webp?s=2048x2048&w=is&k=20&c=B0aClNHXUKSOsHPwEVuYWT2u_haG5YGGo24mrzhqcSw=",
  },
];

const aboutData = [
  {
    id: 0,
    title: "About",
    description:
      "DYAD delivers fast, accurate diagnostic testing with advanced technology and expert care. We offer a range of services, from routine tests to specialized diagnostics, ensuring accessible and reliable healthcare solutions.",
  },
  {
    id: 1,
    title: "Services",
    description:
      "At DYAD, we provide a variety of diagnostic services, including routine blood tests, advanced imaging, and specialized screenings. Our cutting-edge technology ensures precise results to support accurate diagnosis and effective treatment planning.",
  },
  {
    id: 2,
    title: "Contact",
    description:
      "Get in touch with DYAD for any inquiries or to schedule a diagnostic test. Reach us at +91-1111111111 or email us at dyad@gmail.com. Our team is here to assist you with all your healthcare needs.",
  },
];

const aboutSubData = [
  {
    id: 0,
    title: `MISSION`,
    description: ` Historical Foundation: In 1908, William J. Mayo hired Harry Harwick to manage the
business and operations of the Mayo Clinic, pioneering a new leadership model in healthcare:
the Dyad. At its core, a Dyad is a partnership ⎼ a seamless collaboration between a physician
leader and a non-physician administrator to elevate patient care and practice performance.

`,
    description2: ` Inspiration and Purpose: Dyad Practice Solutions was born out of a critical need ⎼ to

address concerns physicians face with practice operations and to safeguard their financial well-
being and autonomy.

`,
    description3: `Redefining Healthcare Partnership: At Dyad Practice Solutions, we are reshaping the
landscape of physician support. Our commitment is to forge transformative long term
partnerships that go beyond traditional standards. 

`,
  },

  {
    id: 1,
    title: `VALUES`,
    description: `Physician Autonomy: We empower physicians to maintain their independence while
realizing pricing and efficiency benefits from the economies of scale and sophistication of a
larger health system, without the interference or agenda of private equity involvement. 
Transparency & Accountability: We believe in accountable partnership
model ⎼ maximizing revenues while minimizing costs .`,

    description2: ` Partnership: Our goal is to establish lasting partnerships. We’re redefining outdated market
standards by offering unmatched servic  e quality and execution at competitive prices, serving as
a ally and fiduciary for our physicians.`,

    description3: `Dependability & Quality: With third-party audits conducted by a chartered accounting firm
and industry subject matter experts, our services are not only dependable.`,
  },

  {
    id: 2,
    title: `APPROACH`,
    description: `Enterprise Risk Management (ERM): At Dyad, we implement the
     COSO ERM and ISO 31000 frameworks to ensure a thorough and effective
     risk management strategy. Our services are assessed through people,
      processes, systems, technology, and various risks. We prioritize
       transparency and accountability, maintaining robust business continuity 
       measures.`,
    description2: `People: We provide physicians comprehensive solutions 
    through a diverse team of certified coders, auditors, accountants, 
    legal experts, and digital marketers.
`,
    description3: `Processes & Systems: We implement automated, paperless 
    workflows with secure audit trails to reduce costs, mitigate risks, and 
    optimize revenue. Each process is independently audited and routinely 
    tested for best-in-class service quality.
`,
  },

  // {
  //   id: 3,
  //   title: `INSIGHTS`,
  //   description: `description`,
  // },
];
