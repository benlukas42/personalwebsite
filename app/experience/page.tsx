import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Ben Lukas and his experience in Computer Science",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Experience"
        description="Here is a synopsis of my experience in college and in my internship."
      />
      <div className="items-center">
        <hr className="w-full border-slate-700"></hr>
      </div>
      
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
