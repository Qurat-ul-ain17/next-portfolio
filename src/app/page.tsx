
import Home from "@/components/home";
import About from "@/app/about/page"
import Skills from "@/app/skills/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page"
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}
