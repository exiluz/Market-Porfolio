import { projects } from "../../content/projects";
import SiteLayout from "../../components/SiteLayout";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import React from "react";
import Button from "../../components/Button";
import Testimonial from "../../components/Testimonial";
import Image from "next/image";
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
  } = project;
  const button = (
    <Button href={link} target="_blank" icon="fa-solid:external-link-alt">
      Buy now
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
                width="590"
                height="300"
                alt={`${title} Banner`}
              />
            </div>
          )}


          <div className="space-y-3 py-5">
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
