import type { User } from "@firebase/auth";
import { signOut } from "firebase/auth";
import React, { FC } from "react";
import { AiOutlineAreaChart, AiOutlineHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

type HeaderProps = {
  user: User | null;
};

export const Header: FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const signOutGoogle = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <header className="h-20 select-none">
      <div className="container mx-auto flex h-20 flex-wrap items-center overflow-hidden font-medium lg:justify-center">
        <div className="flex h-full w-full items-center justify-around">
          <nav className="flex w-full justify-around">
            <Link to="/" className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-gray-900">JustDoIt</span>
            </Link>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "flex items-center text-indigo-600"
                  : "flex items-center hover:text-indigo-400"
              }
            >
              <AiOutlineHome className="inline-block" size={20} />
              <span className="hidden pl-2 md:inline-block">ホーム</span>
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to="/record-study"
                  className={({ isActive, isPending }) =>
                    isPending || isActive
                      ? "flex items-center text-indigo-600"
                      : "flex items-center hover:text-indigo-400"
                  }
                >
                  <BsPencil className="inline-block" size={20} />
                  <span className="hidden pl-2 md:inline-block">記録</span>
                </NavLink>
                <NavLink
                  to="/my-page"
                  className={({ isActive, isPending }) =>
                    isPending || isActive
                      ? "flex items-center text-indigo-600"
                      : "flex items-center hover:text-indigo-400"
                  }
                >
                  <AiOutlineAreaChart className="inline-block" size={20} />
                  <span className="hidden pl-2 md:inline-block">マイページ</span>
                </NavLink>
              </>
            ) : null}
            {user ? (
              <button onClick={signOutGoogle} className="flex items-center hover:text-indigo-400">
                <GoSignOut className="inline-block" size={20} />
                <span className="hidden pl-2 md:inline-block">ログアウト</span>
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending || isActive
                    ? "flex items-center text-indigo-600"
                    : "flex items-center hover:text-indigo-400"
                }
              >
                <GoSignIn className="inline-block" size={20} />
                <span className="hidden pl-2 md:inline-block">ログイン</span>
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
