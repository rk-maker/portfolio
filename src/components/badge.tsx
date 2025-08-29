import React from "react";

type BadgeProps = {
  label: string;
  key?: number;
};

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="font-bold underline text-m decoration-thirdy">
      {label}
    </span>
  );
};

export default Badge;
