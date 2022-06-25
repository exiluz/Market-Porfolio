import { ReactElement } from "react";
import ISkill from "../types/skill";
import Link from "next/link";

const Skill = (props: { content: ISkill }): ReactElement => {
  const { name, slug } = props.content;

  return (
    <Link href={`/${slug}`}>
      <a className="text-primary border border-primary py-1 px-2 mb-3 mr-3 text-xs text-gray-500 rounded transition hover:text-white hover:bg-primary">
        {name}
      </a>
    </Link>
  );
};

export default Skill;
