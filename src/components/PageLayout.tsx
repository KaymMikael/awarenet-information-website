import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="max-w-5xl mx-auto px-3">{children}</div>;
};

export default PageLayout;
