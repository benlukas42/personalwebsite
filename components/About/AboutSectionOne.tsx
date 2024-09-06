import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text , description}) => (
    <div>
      <h1 className="flex items-center text-lg font-medium text-black dark:text-white">
        <span className="mr-4 flex h-[5px] w-[20px] items-center justify-center rounded-md bg-primary bg-opacity-20 text-primary"></span>
        {text}
      </h1>
      <p className="text-left ml-16 indent-6 text-body-color text-md w-100 text-wrap">
        {description}
      </p>
    </div>
    
  );

  return (
    <section id="about" className="pt-6 md:pt-10 lg:pt-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="University Experience"
                paragraph="I'm currently studying Computer Science at the University of Wisconsin-Madison, planning on completing my Bachelors in December 2024. Here are some relevant and interesting classes I have taken so far:"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 lg:mb-0 w-max"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full sm:w-100 md:w-1/2 lg:w-3/4 px-3">
                    <List text="Programming I, II, and III (CS 200/300/400)" description="Programming fundamentals; Object-oriented languages (Java), abstract data types and structures, group projects"/>
                    <List text="Machine Organization & Programming (CS 354)" description="Fundamental structures of computer systems, C programming, low-level interrelationships, assembly language"/>
                    <List text="Algorithms (CS 577)" description="Paradigms for efficient algorithms; Greedy, Divide-and-Conquer, Dynamic Programming, Reductions."/>
                    <List text = "Artificial Intellegence (CS 540)" description="Introduction to machine learning and neural networks, programming in Python"/>
                    <List text = "Operating Systems (CS 537)" description="Input-output hardware, interrupt handling, scheduling resource allocation, modular software systems, and more"/>
                    <List text = "Database Management Systems (CS 564)" description="SQL and Relational, hierarchecal, and network database systems"/>
                    <List text = "Building User Interfaces (CS 571)" description="Software development of UIs; event-driven interfaces, direct-manipulation interfaces, and dialogue-based interaction"></List>
                    <List text = "Introduction to Information Security (CS 642)" description="Cryptography, Access Control, OS Security, Network Security, Machine Learning Security, Web Security, and more"></List>
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[36/24] max-w-[600px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="https://brand.wisc.edu/content/uploads/2016/11/readability-04.jpg"
                  alt="University of Wisconsin-Madison"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="https://brand.wisc.edu/content/uploads/2016/11/readability-04.jpg"
                  alt="University of Wisconsin-Madison"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
