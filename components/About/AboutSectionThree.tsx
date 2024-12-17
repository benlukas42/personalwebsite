import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionThree = () => {
  return (
    <section className="py-4 md:py-5 lg:py-7">
      <div className="container">
        <div className="mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9">
              <SectionTitle
                title="Internship Experience - BC"
                paragraph=""
                width="100%"
                mb="14px"
              />
                <p className="text-base leading-relaxed text-body-color mb-4 sm:text-lg sm:leading-relaxed">
                  From November of 2024 until now, I have been an intern for 
                  <a href="https://brownandcaldwell.com/" target="_blank" title="BC Home Page" className="text-blue-500 hover:underline font-bold"> Brown and Caldwell </a>
                    in Milwaukee, Wisconsin.
                </p>

                <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Watching Water Work
                </h3>
                <p className="text-base leading-relaxed text-body-color mb-2 sm:text-lg sm:leading-relaxed">
                  In my internship, I am the main contributor to the development of the company's DTS (Distributed Temperature Sensing) application. 
                  The application's purpose is to import, manipulate and plot data to help BC's engineers figure out what is happening in sewers and nearby environments.
                  The tool is written almost entirely in Python, and accepts a variety of data, from DTS to flow and rainfall data.
                  The main challenge is maximizing the UI's user-friendliness, so that engineers who may have no computer science experience have no trouble using it!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[1/1] max-w-[350px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/bclogo.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/bclogo.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
