import Experience from "../types/experience";
import { skills } from "./skills";
import { projects } from "./projects";

export const experiences: Array<Experience> = [
  {
    position: "Full-Stack Engineer",
    company: "Apolinar",
    dateStart: "Jul 2020",
    dateEnd: "Present",
    link: "https://apolinargroup.com/",
    snippet: "Apolinar is an award-winning digital team in New Zealand.",
    description: (
      <>
        <p>
          Apolinar is an award-winning digital team in New Zealand. We create
          content-managed websites for clients in various sectors like
          healthcare, education, NGO and tech.
        </p>
        <p>
          I work on these sites, implementing pixel-perfect designs across
          multiple devices and browsers, while providing a good user experience
          for content editors on the backend in Contentful.
        </p>
      </>
    ),
    skills: [
      skills.react,
      skills.nextjs,
      skills.contentful,
      skills.angular,
      skills.sass,
      skills.less,
      skills.ts,
      skills.bootstrap,
      skills.algolia,
      skills.redux,
    ],
    projects: [projects.nzst, projects.apolinar],
  },
  {
    position: "Frontend Engineer",
    company: "Corebridge",
    dateStart: "May 2019",
    dateEnd: "Jul 2020",
    link: "https://corebridge.net/",
    snippet: "Corebridge is a management tool for printing businesses.",
    description: (
      <p>
        Corebridge is a management tool for printing businesses. It&apos;s a
        large complex web app that calculates orders based on a number of costs
        like labor, machine, materials, etc. I worked on the frontend side using
        Angular with a team of 30+ devs and led tasking of user stories.
      </p>
    ),
    skills: [skills.angular, skills.js, skills.ts, skills.git, skills.scrum],
    projects: [projects.educaider, projects.dubber, projects["dancer-tribe"]],
  },
  {
    position: "Full-Stack Engineer",
    company: "Catapult",
    dateStart: "Apr 2017",
    dateEnd: "Mar 2019",
    link: "https://www.magaya.com/catapult-freight-rate-management-software/",
    snippet:
      "Catapult develops a rate management software for freights for searching and comparing rates, managing margins, filing tariffs, etc.",
    description: (
      <p>
        I worked on a single page app for logistics quote management. I designed
        and developed a drag and drop form builder which allowed for users to
        resize and format various elements in the form.
      </p>
    ),
    skills: [
      skills.angular,
      skills.ux,
      skills.js,
      skills.ts,
      skills.spring,
      skills.java,
    ],
    projects: [projects.nzma],
  },
];
