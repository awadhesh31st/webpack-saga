import React from "react";

export interface LayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutMain;
