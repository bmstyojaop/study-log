import { signOut } from "firebase/auth";
import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

type signOutProps = {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};
export const SignOut: FC<signOutProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signOutGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
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
