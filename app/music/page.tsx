import Breadcrumb from "@/components/Common/Breadcrumb";
import Music from "@/components/Music";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ben's Personal Website",
  description: "",
  // other metadata
};

const MusicPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Music Page"
        description=""
      />

      <Music />
    </>
  );
};

export default MusicPage;
