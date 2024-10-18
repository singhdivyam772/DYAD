const About = () => {
  return (
    <section
      id="about"
      className="text-gray-600 pt-[5rem]  font-cabinetgrotesk body-font"
    >
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" bg-gradient-text bg-clip-text text-transparent text-3xl font-semibold title-font mb-4 text-gray-900">
            ABOUT
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            At Dyad Practice Solutions, we recognize the challenges physicians
            and practice administrators face in managing financial and
            operational complexities, often at the expense of patient care.
            Inspired by the Dyad leadership model, we empower physicians by
            streamlining operations and safeguarding their financial well-being.
            We aim to change that narrative, transforming physician support
            through strategic partnerships that prioritize quality and
            transparency, allowing healthcare professionals to focus on
            delivering exceptional care.
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
  );
};

export default About;
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
