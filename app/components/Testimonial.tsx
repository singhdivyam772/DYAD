const Testimonial = () => {
  const teamMembers = [
    {
      name: "Dr. Alper Kamu",
      title: "Cardiologist",
      image:
        "https://media.istockphoto.com/id/181855223/photo/doctor.jpg?b=1&s=612x612&w=0&k=20&c=Ztz4LNTTm9euG61k4TM-h2kFn_kIswz9qNqSnW3kDus=",
      description:
        "Dedicated to improving heart health and preventing heart disease.",
    },
    {
      name: "Dr. Holden Caulfield",
      title: "Pediatrician",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-doctor-wearing-white-coat-with-stethoscope-smiling-cheerfully-showing-thumbs-up_141793-34131.jpg?ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
      description: "Passionate about children's health and well-being.",
    },
    {
      name: "Dr. Atticus Finch",
      title: "Orthopedic Surgeon",
      image:
        "https://img.freepik.com/premium-photo/man-lab-coat-giving-thumbs-up_1215445-1687.jpg?ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
      description: "Expert in treating musculoskeletal injuries and disorders.",
    },
    {
      name: "Dr. Henry Letham",
      title: "Dermatologist",
      image:
        "https://img.freepik.com/premium-photo/woman-white-coat-giving-thumbs-up_81048-50370.jpg?ga=GA1.1.882004537.1726815125&semt=ais_hybrid",
      description: "Committed to providing the best care for skin health.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="text-3xl font-semibold bg-gradient-text bg-clip-text text-transparent title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our dedicated team of healthcare professionals is committed to
            providing personalized care tailored to each patient’s unique needs.
            With a blend of expertise and compassion, we strive to create a
            welcoming environment for all.
          </p>
        </div>
        <div className="flex flex-wrap  ">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt={`Team member ${member.name}`}
                  className="flex-shrink-0 rounded-lg w-4/5 h-1/2 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.title}</h3>
                  <p className="">{member.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500" href="#">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500" href="#">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500" href="#">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
