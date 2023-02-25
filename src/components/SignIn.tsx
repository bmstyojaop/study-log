import { signInWithPopup } from "firebase/auth";
import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase";

type signInProps = {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};
export const SignIn: FC<signInProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};
