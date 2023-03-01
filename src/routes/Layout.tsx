import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

type layoutProps = {
  isAuth: boolean;
};
export const Layout: FC<layoutProps> = ({ isAuth }) => {
  return (
    <div>
      <Header isAuth={isAuth} />
      <div className="bg-gray-200 py-10">
        <Outlet />
      </div>
    </div>
  );
};
