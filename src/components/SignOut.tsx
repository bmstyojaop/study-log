import type { User } from "@firebase/auth";
import { signOut } from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

type SignOutProps = {
  user: User | null;
};
export const SignOut: FC<SignOutProps> = ({ user }) => {
  const navigate = useNavigate();
  const signOutGoogle = () => {
    signOut(auth).then(() => {
      navigate("/signin");
    });
  };

  return (
    <div>
      <p>サインアウトする</p>
      <button onClick={signOutGoogle}>サインアウト</button>
    </div>
  );
};
