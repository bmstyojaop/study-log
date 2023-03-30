import type { User } from "@firebase/auth";
import { signOut } from "firebase/auth";
import React, { FC } from "react";
import { AiOutlineAreaChart, AiOutlineHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="flex h-full w-1/4 items-center justify-start pr-4">
          <Link to="/" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none text-gray-900">StudyLog</span>
          </Link>
        </div>
        <div className="flex justify-around items-center h-full w-3/4">
          <nav className="w-full flex justify-around">
            <Link to={"/"} className="hover:text-indigo-600 flex items-center">
              <AiOutlineHome className="inline-block" size={20} />
              <span className="hidden md:inline-block pl-2">ホーム</span>
            </Link>
            {user ? (
              <>
                <Link to="/record-study" className="hover:text-indigo-600 flex items-center">
                  <BsPencil className="inline-block" size={20} />
                  <span className="hidden md:inline-block pl-2">記録</span>
                </Link>
                <Link to="/my-page" className="hover:text-indigo-600 flex items-center">
                  <AiOutlineAreaChart className="inline-block" size={20} />
                  <span className="hidden md:inline-block pl-2">マイページ</span>
                </Link>
              </>
            ) : null}
            {user ? (
              <button onClick={signOutGoogle} className="hover:text-indigo-600 flex items-center">
                <GoSignIn className="inline-block" size={20} />
                <span className="hidden md:inline-block pl-2">ログアウト</span>
              </button>
            ) : (
              <Link to="/login" className="hover:text-indigo-600 flex items-center">
                <GoSignOut className="inline-block" size={20} />
                <span className="hidden md:inline-block pl-2">ログイン</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
