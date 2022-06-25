import { Icon as Iconify } from "@iconify/react";

const Icon = (props: { icon: string; className?: string }) => {
  const { icon, className = "" } = props;
  return <Iconify icon={icon} className={className} />;
};

export default Icon;
