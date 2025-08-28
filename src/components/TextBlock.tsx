import React from "react";

type TextBlockProps = {
  heading: string;
  paragraph: string | React.ReactNode;
  align?: "left" | "center" | "right";
  headingSize?: "lg" | "xl";
  width?: "small" | "medium" | "large";
};

const headingSizeMap = {
  lg: "text-5xl",
  xl: "text-3xl",
};

const widthMap = {
  small: "w-2/5", // less than half screen
  medium: "w-3/5",
  large: "w-4/5",
};

const TextBlock: React.FC<TextBlockProps> = ({
  heading,
  paragraph,
  align = "left",
  headingSize = "lg",
  width = "small",
}) => {
  return (
    <div className={`${widthMap[width]} text-${align}`}>
      <span className={`${headingSizeMap[headingSize]} font-bold`}>
        {heading}
        <span className="text-secondary">{`.`}</span>
      </span>

      <p className="mt-5 md:text-lg font-light ">{paragraph}</p>
    </div>
  );
};

export default TextBlock;
