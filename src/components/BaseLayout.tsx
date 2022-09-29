import React from "react";

type IProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: IProps) => {
  return <div className="bg-primaryBGColor h-screen">{children}</div>;
};

export default BaseLayout;
