import { projects } from "../../content/projects";
import Skill from "../../components/Skill";
import Project from "../../components/Project";
import SiteLayout from "../../components/SiteLayout";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import React from "react";
import Button from "../../components/Button";
import Testimonial from "../../components/Testimonial";
import Image from "next/image";
import SkillLogos from "../../components/SkillLogos";
import { GetStaticProps } from "next";

interface ProjectsPageProps {
  slug: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
  const { slug } = props;
  const project = projects[slug];

  const {
    title,
    description,
    imageUrl,
    images,
    skills,
    link,
    body,
    links,
    testimonials,
    otherProjects,
  } = project;
  const button = (
    <Button href={link} target="_blank" icon="fa-solid:external-link-alt">
      See live
    </Button>
  );
  return (
    <SiteLayout>
      <main className="container pt-10 pb-32 lg:pt-16">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="w-full md:w-8/12">{title}</h1>
            <span className="hidden md:flex">{button}</span>
          </div>

          {images?.length ? (
            <Carousel images={images} className="mb-5" title={title} />
          ) : (
            <div className="mb-5">
              <Image
                src={imageUrl}
                className="mb-5"
                width="1000"
                height="750"
                alt={`${title} screenshot`}
              />
            </div>
          )}

          {skills && (
            <div className="flex flex-wrap mb-2">
              {skills.map((s) => (
                <Skill key={s.name} content={s} />
              ))}
            </div>
          )}

          <div className="space-y-5 py-5">
            {description && <p>{description}</p>}
            {body}
          </div>

          {links?.length && (
            <ul className="list-disc pl-8 space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href={link} passHref>
                    <a
                      target="_blank"
                      className="text-primary underline hover:no-underline"
                    >
                      {link}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="md:hidden flex justify-center my-10 w-full">
            {button}
          </div>

          {testimonials?.length ? (
            <section className="my-16 space-y-8">
              <h2 className="text-2xl">References</h2>
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.name} content={testimonial} />
              ))}
            </section>
          ) : (
            <></>
          )}
        </div>

        <section className="mt-16">
          <h2 className="mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-y-8 md:gap-8">
            {otherProjects?.map((project) => (
              <div key={project.slug}>
                {" "}
                <Project content={project} />{" "}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/projects">See all projects</Button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-12 text-center">Browse Projects by Skill</h2>

          <SkillLogos className="max-w-3xl justify-center gap-8 text-3xl md:text-4xl m-auto" />
        </section>
      </main>
    </SiteLayout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: Object.keys(projects).map((key) => ({
      params: { slug: key },
    })),
    // fallback: "blocking",
    fallback: false //to make it work with next export
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context.params;

    if (slug) {
      // @ts-ignore
      const project = projects[slug];

      if (project) {
        return {
          props: {
            slug,
          },
        };
      }
    }
  }

  return {
    notFound: true,
  };
};

export default ProjectsPage;
