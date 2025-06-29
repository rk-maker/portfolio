import React from "react";

type IconType = React.ComponentType<{
  size?: number | string;
  className?: string;
}>;

type StackedIconProps = {
  OutlineIcon: IconType;
  FilledIcon: IconType;
  offset?: number;
  size?: number;
};

const StackedIcon: React.FC<StackedIconProps> = ({
  OutlineIcon,
  FilledIcon,
  offset = 1,
  size = 24,
}) => {
  return (
    <div
      className="relative inline-block"
      style={{ width: size + offset, height: size + offset }}
    >
      {/* Filled icon behind with offset */}
      <div
        className="absolute text-secondary"
        style={{
          left: `${offset}px`,
          top: `${offset}px`,
        }}
      >
        <FilledIcon size={size} />
      </div>

      {/* Outline icon on top */}
      <div className="absolute top-0 left-0 text-thirdy">
        <OutlineIcon size={size} />
      </div>
    </div>
  );
};

export default StackedIcon;
