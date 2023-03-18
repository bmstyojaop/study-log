import React, { Dispatch, FC, SetStateAction } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

type layoutProps = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

export const Layout: FC<layoutProps> = ({ isAuth, setIsAuth }) => {
  return (
    <div>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className="bg-gray-200 py-10">
        <Outlet />
      </div>
    </div>
  );
};
