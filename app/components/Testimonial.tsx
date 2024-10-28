import Image from "next/image";

const Testimonial = () => {
  const teamMembers = [
    {
      name: "Dr. Holden Caulfield",
      title: "Pediatrician",
      image:
        "https://www.shutterstock.com/image-photo/doctor-portrait-mature-man-confidence-600nw-2472682665.jpg",
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
        "https://www.shutterstock.com/shutterstock/videos/1110906057/thumb/1.jpg?ip=x480",
      description: "Committed to providing the best care for skin health.",
    },
    {
      name: "Dr. Alper Kamu",
      title: "Cardiologist",
      image:
        "https://www.shutterstock.com/shutterstock/videos/23656006/thumb/1.jpg?ip=x480",
      description:
        "Dedicated to improving heart health and preventing heart disease.",
    },
  ];

  return (
    <section id="testimonial" className="text-gray-600 body-font font-roboto">
      <div className="container px-5 pt-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="text-2xl font-semibold bg-gradient-text bg-clip-text text-transparent title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Our dedicated team of healthcare professionals is committed to
            providing personalized care tailored to each patient’s unique needs.
            With a blend of expertise and compassion, we strive to create a
            welcoming environment for all.
          </p>
        </div>
        <div className="flex flex-wrap">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="px-4 md:w-[30rem] my-4 mx-auto w-[100%] shadow-2xl border rounded-2xl py-8 space-x-4"
            >
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full h-0 pb-[75%] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    alt={`Team member ${member.name}`}
                    src={member.image}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500">{member.title}</h3>
                  <p>{member.description}</p>
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
