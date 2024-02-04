import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-r from-white via-sky-100/50 to-purple-100/50 dark:bg-gradient-to-r dark:from-fuchsia-950/25 dark:via-20% dark:via-dark/100 dark:to-cyan-950/50 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="px-4 sm:w-full md:w-full lg:w-1/2">
              <div
                className="wow fadeInUp mx-10 my-20 max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  About Me
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                Hi, I'm Ben Lukas! I'm currently a senior studying Computer Science at the University of Wisconsin-Madison and a remote intern for Space Science Institute in Boulder, Colorado.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div
                className="wow fadeInUp mx-auto max-w-[300px] items-center"
                data-wow-delay=".2s"
              >
                <Image
                  //src="https://brand.wisc.edu/content/uploads/2016/11/readability-04.jpg"
                  src="/images/hero/selfie.jpg"
                  alt="University of Wisconsin-Madison"
                  className="drop-shadow-three"
                  height="400"
                  width="600"
                />
              </div>
              <div className = "mx-auto max-w-[300px] text-center">
                <p className = "dark:text-body-color-dark mb-12 text-base italic !leading-relaxed text-body-color font-semibold sm:text-md md:text-l">
                  Hi there!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
