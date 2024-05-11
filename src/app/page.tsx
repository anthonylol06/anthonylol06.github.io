import Navbar from "./navbar/navbar";
import Profile from "./profile/profile";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

export default function Home() {
  return (
    // <div className="flex flex-col justify-start bg-gray-300">
      <div className="grid grid-flow-row  items-start bg-gray-300">
        <Navbar></Navbar>
        <Profile></Profile>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    // </div>  
  );
}
