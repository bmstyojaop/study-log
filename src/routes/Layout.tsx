import type { User } from "@firebase/auth";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

type layoutProps = {
  user: User | null;
};

export const Layout: FC<layoutProps> = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      <div className="fixed h-full w-full overflow-scroll bg-gray-200 pt-5 pb-52  ">
        <Outlet />
      </div>
    </div>
  );
};
