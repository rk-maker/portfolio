import React from "react";

type BadgeProps = {
  label: string;
  key?: number;
};

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-thirdy)] px-2 py-0.5  text-sm text-[var(--color-thirdy)]">
      {label}
    </span>
  );
};

export default Badge;
