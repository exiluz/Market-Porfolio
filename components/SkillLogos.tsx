import { skills } from "../content/skills";
import Icon from "./Icon";
import Link from "next/link";

const SkillLogos = (props: { className?: string }) => {
  return (
    <div className={`flex flex-wrap ${props.className || ""}`}>
      {Object.keys(skills).map((key) => {
        const skill = skills[key];
        const { icon, slug, name } = skill;
        return icon ? (
          <Link href={`/${slug}`} passHref key={slug}>
            <a title={`${name} Projects`}>
              <Icon icon={icon} />
            </a>
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default SkillLogos;
