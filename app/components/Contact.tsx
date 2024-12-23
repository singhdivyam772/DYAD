const Contact = () => {
  return (
    <section
      id="contact"
      className="text-gray-600 pt-[5.5rem] font-roboto px-6 body-font mb-12 relative "
    >
      <div className=" shadow-2xl border rounded-xl  md:px-5 px-8 pt-18 flex flex-col mx-auto  lg:w-2/3 ">
        <h1 className="text-2xl font-semibold mt-4 mx-auto bg-gradient-text bg-clip-text text-transparent title-font mb-4 text-gray-900">
          Get in Touch
        </h1>

        <div className=" w-full flex md:flex-row flex-col justify-center md:gap-12   items-center ">
          {" "}
          <div className="relative mb-4 w-full">
            <label htmlFor="name" className="w-full text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label htmlFor="email" className=" text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className=" w-full flex md:flex-row flex-col justify-center md:gap-12   items-center ">
          <div className="relative mb-4 w-full">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Practice/Facility Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4 w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Enter a brief message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <a className="home-button mx-auto md:w-[30%] my-5 lg:mt-10 mt-2">
          Submit
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
