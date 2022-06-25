import Project from "../types/project";
import { skills } from "./skills";

const Velzon = {
  title: "Velzon v1.6.0 – Admin & Dashboard Template",
  link: "https://buy.stripe.com/eVa8wAdCvecR3Uk8ww",
  imageUrl: "velzon-admin-theme-nulled-free-download (1).jpg",
  slug: "velzon-dashboard",
  description: `
        Velzon is a fully responsive and premium Bootstrap 5 
        Admin & Dashboard Template built in HTML, React js, 
        Angular 13, Vue 3, Laravel, ASP.Net Core, Django, 
        CodeIgniter, Symfony, PHP, Ajax Node Js (EJS) & Cake PHP.
      `,
  snippet: "Velzon is a fully responsive Admin Dashboard",
  skills: [],
  images: [],
  testimonials: [],
};

export const projects: { [key: string]: Project } = {
  "velzon-dashboard": {
    ...Velzon,
    otherProjects: [],
  },
};
