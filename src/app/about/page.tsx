import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sashtisoft | AI-Powered Software Solutions",
  description:
    "Learn about Sashtisoft and our mission to build innovative AI-powered applications.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Who We Are"
        description="Sashtisoft is a next-gen software development company led by seasoned full-stack developer Mani, delivering intelligent, AI-infused applications across web and mobile platforms. "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
