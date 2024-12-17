import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ben's Personal Website",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Experience"
        description="Here is a synopsis of my experience in college and in my internship."
      />
      
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
