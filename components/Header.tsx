import Link from "next/link";
import React, { ReactElement } from "react";
import { Menu } from "@headlessui/react";

import Icon from "./Icon";
export const Header = (): ReactElement => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return (
    <>
      <div className="w-full bg-primary sticky top-0 shadow z-50 text-white">
        <div className="md:hidden w-full flex justify-between items-center px-5">
          <div>
            <Link href="/" passHref>
              <a className="text-xl font-semibold">Sixty9Unit</a>
            </Link>
          </div>
          <div className="relative">
            <Menu>
              <Menu.Button aria-label="navigation">
                <span className="inline-block px-4 py-2.5 rounded mt-1">
                  <Icon icon="fa-solid:bars" />
                </span>
              </Menu.Button>
              <Menu.Items>
                <ul className="absolute top-full right-0 bg-white shadow-lg rounded py-2 w-48">
                  {links.map((link) => (
                    <Menu.Item key={link.url}>
                      <Link href={link.url} passHref>
                        <a className="block text-primary font-semibold py-1.5 px-5 opacity-80 hover:opacity-100 text-sm hover:bg-gray-50 transition">
                          {link.title}
                        </a>
                      </Link>
                    </Menu.Item>
                  ))}
                </ul>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="container px-5 py-4 mx-auto max-w-3xl text-center hidden md:block">
          {links.map((link) => (
            <Link href={link.url} key={link.url}>
              <a
                href={link.url}
                className="p-5 opacity-90 hover:opacity-100 tracking-wider text-sm"
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
