import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[36/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/SpatialHeadshot2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/SpatialHeadshot2.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9">
              <SectionTitle
                title="Internship Experience - SSI"
                paragraph=""
                width="100"
                mb="14px"
              />
                <p className="text-base leading-relaxed text-body-color mb-4 sm:text-lg sm:leading-relaxed">
                  From June 2023-April 2024, I was a remote intern for the 
                  <a href="https://www.spacescience.org/index.php" target="_blank" title="Space Science Institute Home Page" className="text-blue-500 hover:underline font-bold"> Space Science Institute </a>
                    in Boulder, CO.
                </p>

                <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mars in Virtual Reality
                </h3>
                <p className="text-base leading-relaxed text-body-color mb-2 sm:text-lg sm:leading-relaxed">
                  In my internship, I explored the modern landscape of VR development for browser. Using tools such as Spatial, Unity, Blender, and AFrame, I learned to make VR scenes out of scans of real Martian land and materials.
                </p>
                <h3 className="text-m font-bold text-black mb-2 dark:text-white sm:text-l sm:leading-relaxed">
                Check out some of my work here:
                  <a href="https://www.spatial.io/@ben_56611" target="_blank" title="My Spatial profile" className="text-blue-500 hover:underline"> My Spatial profile</a>
                </h3>
                <p className="text-base leading-relaxed text-body-color mb-2 sm:text-lg sm:leading-relaxed">
                  This can also be found in the Spatial app on the Oculus Quest. Search my profile @ben_56611!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
