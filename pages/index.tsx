import type { NextPage } from "next";
import React from "react";
import Project from "../components/Project";
import SiteLayout from "../components/SiteLayout";
import { projects } from "../content/projects";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <SiteLayout>
      <main className="container py-5 lg:py-12">
        <div className="flex w-full justify-between items-center flex-wrap flex-row-reverse md:flex-row mt-8">
          <div className="my-5 text-center md:text-left w-full md:w-10/12">
            <h1 className="font-bold text-5xl md:text-6xl">Mini Marketplace</h1>
            <h2 className="my-3 text-xl sm:text-2xl">Browse Here</h2>
          </div>
        </div>
        <span id="about" className="block mb-8" />
        <section className="my-16">
          <h2 className="mb-8">Featured</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(projects)
              .slice(0, 3)
              .map((key) => (
                <div key={projects[key].link}>
                  <Project content={projects[key]} />
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/projects">See all Products</Button>
          </div>
        </section>

      </main>
    </SiteLayout>
  );
};

export default Home;
