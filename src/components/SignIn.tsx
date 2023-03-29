import type { User } from "@firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase";

type SignInProps = {
  user: User | null;
};

export const SignIn: FC<SignInProps> = ({ user }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};
