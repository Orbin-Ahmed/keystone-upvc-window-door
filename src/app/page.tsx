import Header from "@/components/Header";
import Benifits_1 from "@/sections/Benifits_1";
import Benifits_2 from "@/sections/Benifits_2";
import Hero from "@/sections/Hero";
import OurStory from "@/sections/OurStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || Keystone uPVC Windows & Doors",
  description: "This is the Home Page.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <Benifits_1 />
      <Benifits_2 />
    </>
  );
}
