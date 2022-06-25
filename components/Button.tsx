import Link from "next/link";
import React, { ReactNode } from "react";
import Icon from "./Icon";

const Button = (props: {
  href: string;
  target?: string;
  children: ReactNode;
  className?: string;
  icon?: string;
}) => {
  const { href, target, children, className = "", icon } = props;

  return (
    <Link href={href} passHref>
      <a
        target={target}
        className={`text-center inline-flex items-center justify-center font-semibold border-2 border-primary bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded transition ${className}`}
      >
        {children}
        {icon && <Icon icon={icon} className="ml-3 text-[1.07em]" />}
      </a>
    </Link>
  );
};

export default Button;
