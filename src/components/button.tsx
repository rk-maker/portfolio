import React, { ReactNode, MouseEventHandler } from "react";

type StripedButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function StripedButton({
  children,
  icon,
  onClick,
}: StripedButtonProps) {
  return (
    <div className="relative inline-block group">
      {/* Background layer */}
      <div
        className={`
          absolute inset-0 translate-x-1 translate-y-1 rounded-lg transition-all duration-300
          bg-size-[12px_12px]
          bg-[repeating-linear-gradient(45deg,#aadcec_0,#aadcec_2px,transparent_2px,transparent_8px)]
          group-hover:bg-secondary
          group-hover:bg-none
        `}
      ></div>

      {/* Button */}
      <button
        onClick={onClick}
        className="
          relative z-10 inline-flex items-center gap-1 border-3 border-(--color-thirdy) rounded-lg 
          bg-transparent px-4 py-1 transition-all duration-300
        "
      >
        <span
          className="
            font-bold text-(--color-thirdy) transition-all duration-300
            group-hover:[text-shadow:2px_2px_white]
          "
        >
          {children}
        </span>
        {icon ? (
          <span className="inline-flex items-center justify-center text-[var(--color-thirdy)]">
            {icon}
          </span>
        ) : null}
      </button>
    </div>
  );
}
