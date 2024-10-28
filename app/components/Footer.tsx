import Image from "next/image";
import dyadLogo from "../../assets/DYAD_logo.svg";

const Footer = () => {
  return (
    <footer className=" text-gray-600 w-full  font-roboto ">
      <div className=" px-5 py-24 mx-auto w-full bg-gray-100 ">
        <div className="flex flex-wrap justify-center items-center  ">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Menu
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#testimonial"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Values
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Approach
                </a>
              </li>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Full Revenue Cycle Management (RCM)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  PI & WC Lien Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Specialty Coding & Billing
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Analytics & Transparent Reporting
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Specialty Coding & Billing
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-400  duration-150 "
                >
                  Physician: Licensing & Payor Enrollment
                </a>
              </li>
            </nav>
          </div>

          {/* Subscription Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              SEARCH
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Search
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Discover more about our medical services and expertise.
              <br className="lg:block hidden" /> Your health, our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-300">
        <div className="container px-5 py-3 flex items-center sm:flex-row flex-col">
          <a
            href="#home"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image alt="dyadlogo" src={dyadLogo} width={64} height={64} />
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 DYAD —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              dyad@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center ">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
