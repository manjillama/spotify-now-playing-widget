import React from "react";

const sizes = {
  default: 14,
  small: 12,
};

const colors = {
  default: "#24292e",
  "gray-light": "#e1e4e8",
  gray: "#586069",
  "gray-dark": "#24292e",
};

const families = {
  default:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  mono: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
};

const weights = {
  default: 400,
  bold: 600,
};

type Props = {
  children: React.ReactNode;
  weight?: keyof typeof weights;
  family?: keyof typeof families;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  id: "track" | "artist";
};

const Text = ({
  children = "",
  weight = "default",
  family = "default",
  color = "default",
  size = "default",
  id,
  ...props
}: Props) => {
  return (
    <p
      id={id}
      style={{
        whiteSpace: "pre",
        fontSize: `${sizes[size]}px`,
        lineHeight: 1.5,
        fontFamily: families[family],
        color: colors[color],
        fontWeight: weights[weight],
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
