import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
}

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return <div className="py-5 grid gap-4">{children}</div>;
};

export default SectionLayout;
