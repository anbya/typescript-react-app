import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | "button";
  children: React.ReactNode;
  className?: string; // Optional additional class for customization
}

// Map variant to valid HTML tags
const variantMapping: Record<TypographyProps["variant"], React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  subtitle1: "p",
  subtitle2: "p",
  caption: "span",
  overline: "span",
  button: "span",
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  const Component = variantMapping[variant] || "p"; // Fallback to <p> if variant is missing

  return (
    <Component className={`${styles.typography} ${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
