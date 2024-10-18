"use client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Image from "next/image";
import About from "./components/About";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function Home() {
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
                <a href="#about" className="home-button mx-auto w-[40%] mt-10">
                  Know More
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
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
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {data.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{data.description}</p>
                  <a
                    href={data.scrollId}
                    className="text-purple-500 inline-flex items-center  cursor-pointer"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 "
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      <Service />

      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
}

const aboutData = [
  {
    id: 0,
    title: "About",
    scrollId: "#about",
    description:
      "DYAD delivers fast, accurate diagnostic testing with advanced technology and expert care. We offer a range of services, from routine tests to specialized diagnostics, ensuring accessible and reliable healthcare solutions.",
  },
  {
    id: 1,
    scrollId: "#services",
    title: "Services",
    description:
      "At DYAD, we provide a variety of diagnostic services, including routine blood tests, advanced imaging, and specialized screenings. Our cutting-edge technology ensures precise results to support accurate diagnosis and effective treatment planning.",
  },
  {
    id: 2,
    scrollId: "#contact",
    title: "Contact",
    description:
      "Get in touch with DYAD for any inquiries or to schedule a diagnostic test. Reach us at +91-1111111111 or email us at dyad@gmail.com. Our team is here to assist you with all your healthcare needs.",
  },
];
