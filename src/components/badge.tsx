import React from "react";

type BadgeProps = {
  label: string;
  key: number;
};
//

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span
      className="bg-[length:8=px_8px]
          bg-[repeating-linear-gradient(45deg,#aadcec_0,#aadcec_2px,transparent_2px,transparent_8px)] text-font rounded-lg font-medium px-4 py-2 text-sm"
    >
      {label}
    </span>
  );
};

export default Badge;
