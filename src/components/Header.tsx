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
        <div className="flex h-full w-full items-center justify-around">
          <nav className="flex w-full justify-around">
            <Link to="/" className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-gray-900">JustDoIt</span>
            </Link>
            <Link to={"/"} className="flex items-center hover:text-indigo-600">
              <AiOutlineHome className="inline-block" size={20} />
              <span className="hidden pl-2 md:inline-block">ホーム</span>
            </Link>
            {user ? (
              <>
                <Link to="/record-study" className="flex items-center hover:text-indigo-600">
                  <BsPencil className="inline-block" size={20} />
                  <span className="hidden pl-2 md:inline-block">記録</span>
                </Link>
                <Link to="/my-page" className="flex items-center hover:text-indigo-600">
                  <AiOutlineAreaChart className="inline-block" size={20} />
                  <span className="hidden pl-2 md:inline-block">マイページ</span>
                </Link>
              </>
            ) : null}
            {user ? (
              <button onClick={signOutGoogle} className="flex items-center hover:text-indigo-600">
                <GoSignOut className="inline-block" size={20} />
                <span className="hidden pl-2 md:inline-block">ログアウト</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center hover:text-indigo-600">
                <GoSignIn className="inline-block" size={20} />
                <span className="hidden pl-2 md:inline-block">ログイン</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
