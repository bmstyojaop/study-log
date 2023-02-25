import React, { FC } from "react";

import { Card } from "./Card";

type mainProps = {
  iconUrl: string[];
};

export const Cards: FC<mainProps> = (props: mainProps) => {
  return (
    <main className="w-screen h-screen flex justify-center">
      <div className="container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        {props.iconUrl.map((icon: string) => (
          <Card key={icon} iconPath={icon} />
        ))}
      </div>
    </main>
  );
};
