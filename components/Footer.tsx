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
          <h2 className="mb-10">Wanna ask questions?</h2>

            <Button href="mailto:support@sixty9unit.tech" icon="fa-solid:envelope">
              Send me an Email
            </Button>
          </div>

          <Socials size="sm" className="justify-center mt-20" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
