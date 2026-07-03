import React from "react";

type BadgeProps = {
  label: string;
  key?: number;
};

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full   px-2 py-0.5  text-sm text-[var(--color-thirdy)] bg-thirdy/10">
      {label}
    </span>
  );
};

export default Badge;
