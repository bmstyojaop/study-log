import type { User } from "@firebase/auth";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type MyPageProps = {
  user: User | null;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <div>マイページ</div>;
};
