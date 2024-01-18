import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Resume"
        description="Take a look at some more details of my professional experience."
      />

      <section className="pb-[60px] pt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <embed src="/Resume.pdf" width="1000" height="700" type="application/pdf"></embed>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
