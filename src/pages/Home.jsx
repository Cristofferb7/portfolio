import { useRef } from 'react';
import Hero from '../components/Hero.jsx';
import Lineup from '../components/Lineup.jsx';
import Projects from '../components/Projects.jsx';
import HowIBuild from '../components/HowIBuild.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import Footer from '../components/Footer.jsx';
import SpiderCameo from '../components/SpiderCameo.jsx';

export default function Home() {
  const scrollProgressRef = useRef(0);

  return (
    <main>
      <Hero scrollProgressRef={scrollProgressRef} />
      <Lineup />
      <Projects />
      <HowIBuild />
      <Experience />
      <Skills />
      <Footer />
      <SpiderCameo />
    </main>
  );
}
