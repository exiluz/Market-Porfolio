import SiteLayout from "../components/SiteLayout";
import { experiences } from "../content/experiences";
import Link from "next/link";
import Skill from "../components/Skill";
import Project from "../components/Project";
import React from "react";

export default function ExperiencePage() {
  return (
    <SiteLayout showSkills={true}>
      <main className="container py-10 lg:py-16">
        <h1 className="mb-8">Work Experience</h1>
        <div>
          {experiences.map((e) => (
            <div className="mb-10" key={e.company}>
              <div className="md:flex flex-wrap items-center justify-between">
                <div className="flex my-2">
                  <h3 className="mr-5">
                    <Link href={e.link}>
                      <a
                        href={e.link}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {e.position} at {e.company}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p className="text-gray-500 text-sm my-2">
                  {e.dateStart} - {e.dateEnd}
                </p>
              </div>
              <div className="my-5">{e.description}</div>
              <div>
                <div className="mt-5 flex flex-wrap">
                  {e.skills.map((s) => (
                    <Skill key={s.name} content={s} />
                  ))}
                </div>
              </div>

              {e.projects?.length && (
                <>
                  <h2 className="text-gray-500 text-sm font-normal my-5">
                    Projects
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {e.projects.map((p) => (
                      <div key={p.link}>
                        <Project content={p} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </SiteLayout>
  );
}
