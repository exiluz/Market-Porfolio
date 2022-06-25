import Button from "./Button";
import React from "react";
import Socials from "./Socials";
import SkillsSection from "./SkillsSection";

const Footer = ({ showSkills }: { showSkills: boolean }) => {
  return (
    <section>
      {showSkills && <SkillsSection />}

      <div className="w-full bg-neutral-800 py-24 text-white">
        <div className="container text-center">
          <h2 className="mb-10">Wanna work with me?</h2>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-5">
            <Button
              href="https://twitter.com/youUsername"
              target="_blank"
              icon="fa-solid:paper-plane"
            >
              DM me on Twitter
            </Button>

            <span>or</span>

            <Button href="mailto:your@email.com" icon="fa-solid:envelope">
              Send me an email
            </Button>
          </div>

          <Socials size="sm" className="justify-center mt-20" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
