import { projects } from "../../content/projects";
import Project from "../../components/Project";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import SkillsSection from "../../components/SkillsSection";

const ProjectsPage = () => {
  return (
    <SiteLayout>
      <main className="">
        <div className="container py-10 lg:py-16">
          <h1 className="mb-8">Projects</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(projects).map((key) => (
              <div key={projects[key].link}>
                <Project content={projects[key]} />
              </div>
            ))}
          </div>
        </div>

        <SkillsSection title="Browse Projects by Skill" />
      </main>
    </SiteLayout>
  );
};

export default ProjectsPage;
