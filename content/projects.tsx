import Project from "../types/project";
import { skills } from "./skills";

const dancerTribe = {
  title: "Velzon v1.6.0 – Admin & Dashboard Template",
  link: "https://buy.stripe.com/eVa8wAdCvecR3Uk8ww",
  imageUrl: "https://firebasestorage.googleapis.com/v0/b/sixty9unit-tech.appspot.com/o/velzon-admin-theme-nulled-free-download%20(1).jpg?alt=media&token=227df23c-6a81-4461-a86e-3acbe7f74822",
  slug: "Velzon-Dashboard",
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
  "dancer-tribe": {
    ...dancerTribe,
    otherProjects: [],
  },
};
