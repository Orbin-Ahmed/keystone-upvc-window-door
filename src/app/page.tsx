import Header from "@/components/Header";
import Hero from "@/sections/Hero";
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
    </>
  );
}
