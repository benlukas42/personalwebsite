
const Contact = () => {
    return (
        <section id="contact" className="overflow-hidden py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Me
              </h2>
              <p className="text-base text-body-color font-bold text-lg">
                Here are some of my contacts:
              </p>
              <p className="mb-4 text-base font-light text-body-color text-sm">
                No funny business!
              </p>
              <h3 className="text-black dark:text-white ml-2 leading-10">
                Email: benlukas42@gmail.com / blukas@wisc.edu
                <br></br>
                LinkedIn:
                <a href="https://www.linkedin.com/in/ben-lukas-473b46260/" title="My LinkedIn Profile" target="_blank" className="text-blue-400 hover:underline"> My LinkedIn Profile</a>


              </h3>
            </div>
          </div>
        </div>
      </div>
      </section>

        );
    };
    
    export default Contact;
    