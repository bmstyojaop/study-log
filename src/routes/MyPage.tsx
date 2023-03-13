import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type MyPageProps = {
  isAuth: boolean;
};

export const MyPage: FC<MyPageProps> = ({ isAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return <div>マイページ</div>;
};
