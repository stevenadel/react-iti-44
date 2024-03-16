import React from 'react';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import PortfolioSection from './sections/Projects';
import FooterSection from './sections/Footer';

const aboutMe = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus neque magni soluta eos sapiente, in tempora laboriosam corrupti eius eaque sit, porro harum. Maiores culpa quod officiis reiciendis tenetur incidunt similique enim nihil, magni inventore animi dolorum nesciunt itaque eveniet veritatis in odio! Fugiat magnam dignissimos molestias nesciunt illum veniam.";

function App() {
  return (
    <>
      <HeroSection name="Steven Adel" role="Web Developer" />
      <AboutSection description={aboutMe} />
      <SkillsSection />
      <PortfolioSection />
      <FooterSection />
    </>
  );
}

export default App;
